        // Movies data
        const movies = [
          {
              title:'Drop [2025] WEB-DL [Hindi + English] | Full Movie',
              im:'dS2S5lpfgRIRQOb7LDCjNsQqKjp',
              dl:'https://pixeldrain.net/api/file/Cg5iHFCg?download',
              link: 'tt32149847'
          },
          {
              title:'Peaky Blinders [Season 1] [Episode 4] WEB-DL [Hindi + English]',
              im:'vPlsKun2WZEsqe3yZTmebxtwElW',
              dl:'https://pixeldrain.net/api/file/pompH96N?download',
              link: 'tt2442560'
          },
          {
              title:'The Last of Us [Season 2] [Episode 3] WEB-DL [Hindi + English] | HBO Series',
              im:'dmo6TYuuJgaYinXBPjrgG9mB5od',
              dl:'https://pixeldrain.net/api/file/QVEgnjqW?download',
              link: 'tt3581920'
          }
      ];

      const itemsPerPage = 14;
      let currentPage = 1;
      let currentSearch = '';

      // Initialize the page
      window.onload = function() {
          displayMovies();
          updatePagination();
      };

      // Toggle search bar
      function toggleSearch() {
          const headerContent = document.querySelector('.header-content');
          const searchBar = document.querySelector('.search-bar');
          
          if (searchBar.style.display === 'flex') {
              // Hide search bar
              searchBar.style.display = 'none';
              headerContent.style.display = 'flex';
              currentSearch = '';
              document.getElementById('searchInput').value = '';
              displayMovies();
          } else {
              // Show search bar
              headerContent.style.display = 'none';
              searchBar.style.display = 'flex';
              document.getElementById('searchInput').focus();
          }
      }

      // Search functionality
      document.getElementById('searchInput').addEventListener('input', function() {
          currentSearch = this.value.toLowerCase();
          currentPage = 1;
          displayMovies();
          updatePagination();
      });

      // Movie display function
      function displayMovies() {
          const list = document.getElementById('movieList');
          list.innerHTML = '';

          const filteredMovies = movies.filter(movie => 
              movie.title.toLowerCase().includes(currentSearch) || 
              movie.link.toLowerCase().includes(currentSearch)
          );

          const start = (currentPage - 1) * itemsPerPage;
          const paginatedMovies = filteredMovies.slice(start, start + itemsPerPage);

          if (paginatedMovies.length === 0) {
              list.innerHTML = '<p style="grid-column: 1 / -1; text-align: center;">No movies found</p>';
              return;
          }

          paginatedMovies.forEach(movie => {
              const card = document.createElement('div');
              card.className = 'movie-card';
              card.onclick = function() {
                  openModal(movie);
              };

              const thumbnailContainer = document.createElement('div');
              thumbnailContainer.className = 'movie-thumbnail-container';
              
              const thumbnail = document.createElement('img');
              thumbnail.src = 'https://media.themoviedb.org/t/p/w188_and_h282_bestv2/' + movie.im + '.jpg';
              thumbnail.className = 'movie-thumbnail';
              thumbnail.alt = movie.title;
              
              thumbnailContainer.appendChild(thumbnail);

              const infoDiv = document.createElement('div');
              infoDiv.className = 'movie-info';

              const title = document.createElement('div');
              title.className = 'movie-title';
              title.textContent = movie.title;

              infoDiv.appendChild(title);
              card.appendChild(thumbnailContainer);
              card.appendChild(infoDiv);

              list.appendChild(card);
          });

          updatePagination();
      }

      // Pagination functions
      function prevPage() {
          if (currentPage > 1) {
              currentPage--;
              displayMovies();
              window.scrollTo({top: 0, behavior: 'smooth'});
          }
      }

      function nextPage() {
          const filteredMovies = movies.filter(movie => 
              movie.title.toLowerCase().includes(currentSearch) || 
              movie.link.toLowerCase().includes(currentSearch)
          );
          
          const totalPages = Math.ceil(filteredMovies.length / itemsPerPage);
          
          if (currentPage < totalPages) {
              currentPage++;
              displayMovies();
              window.scrollTo({top: 0, behavior: 'smooth'});
          }
      }

      function updatePagination() {
          const filteredMovies = movies.filter(movie => 
              movie.title.toLowerCase().includes(currentSearch) || 
              movie.link.toLowerCase().includes(currentSearch)
          );
          
          const totalPages = Math.ceil(filteredMovies.length / itemsPerPage);
          const pageInfo = `Page ${currentPage} of ${totalPages}`;
          
          document.getElementById('pageInfoTop').textContent = pageInfo;
          document.getElementById('pageInfoBottom').textContent = pageInfo;
          
          document.getElementById('prevBtnTop').disabled = currentPage === 1;
          document.getElementById('prevBtnBottom').disabled = currentPage === 1;
          document.getElementById('nextBtnTop').disabled = currentPage === totalPages;
          document.getElementById('nextBtnBottom').disabled = currentPage === totalPages;
      }

      // Modal functions
      function openModal(movie) {
          const modal = document.getElementById('movieModal');
          const modalPoster = document.getElementById('modalPoster');
          const videoPlayer = document.getElementById('videoPlayer');
          const modalTitle = document.getElementById('modalTitle');
          const modalDownload = document.getElementById('modalDownload');
          const modalInfo = document.getElementById('modalInfo');
          
          // Check if title contains "HEVC" or "all episodes" (case insensitive)
          const hideMedia = movie.title.toLowerCase().includes('hevc') || 
                           movie.title.toLowerCase().includes('all episodes');
          
          // Always show the poster container (we'll toggle visibility of the image)
          modalPoster.style.display = 'block';
          modalPoster.src = 'https://media.themoviedb.org/t/p/w500_and_h282_face/' + movie.im + '.jpg';
          modalPoster.alt = movie.title;
          
          // Clear any existing video player
          videoPlayer.innerHTML = '';
          
          if (!hideMedia && movie.dl) {
              try {
                  videoPlayer.innerHTML = `
                  <video controls preload="metadata"
                      poster="https://media.themoviedb.org/t/p/w500_and_h282_face/${movie.im}.jpg"
                      style="width:100%;height:100%;object-fit:contain;background:#000;">
                      <source src="${movie.dl}" type="video/mp4">
                      Your browser doesn't support HTML5 video.
                  </video>`;
                  modalPoster.style.display = 'none';
              } catch(e) {
                  console.error('Error creating video player:', e);
                  modalPoster.style.display = 'block';
              }
          } else {
              modalPoster.style.display = 'block';
          }
          
          modalTitle.textContent = movie.title;
          modalDownload.href = 'https://dereferer.me/?' + movie.dl;
          modalInfo.href = 'https://www.imdb.com/title/' + movie.link;
          modal.style.display = 'block';
          
          // Prevent body scroll when modal is open
          document.body.style.overflow = 'hidden';
      }

      function closeModal() {
          const modal = document.getElementById('movieModal');
          const videoPlayer = document.getElementById('videoPlayer');
          
          // Clear video player when closing modal
          videoPlayer.innerHTML = '';
          modal.style.display = 'none';
          
          // Restore body scroll
          document.body.style.overflow = 'auto';
      }

      window.onclick = function(event) {
          const modal = document.getElementById('movieModal');
          if (event.target == modal) {
              closeModal();
          }
      }

      function goHome() {
          window.location.href = '/';
      }
const itemsPerPage = 12;
let currentPage = 1;
let currentSearch = '';

// Helper function to clean search strings
function cleanSearchString(str) {
    return str.toLowerCase().replace(/[{}\-\.\(\)\s\|:\[\]]/g, '');
}

// Parse URL parameters
function getUrlParams() {
    const params = new URLSearchParams(window.location.search);
    const search = params.get('s') || '';
    const page = parseInt(params.get('p')) || 1;
    return { search, page };
}

// Update URL parameters
function updateUrlParams() {
    const params = new URLSearchParams();
    if (currentSearch) params.set('s', currentSearch);
    if (currentPage > 1) params.set('p', currentPage);
    
    const newUrl = window.location.pathname + (params.toString() ? `?${params.toString()}` : '');
    window.history.replaceState({}, '', newUrl);
}

// Initialize the page
function initializePage() {
    const { search, page } = getUrlParams();
    currentSearch = cleanSearchString(search);
    currentPage = page;
    
    if (search) {
        document.getElementById('searchInput').value = search;
        toggleSearch(false); // Show search bar if there's a search query
    }
    
    displayMovies();
    updatePagination();
}

// Toggle search bar (modified to accept show/hide parameter)
function toggleSearch(show = null) {
    const headerContent = document.querySelector('.header-content');
    const searchBar = document.querySelector('.search-bar');
    
    if (show === false || (show === null && searchBar.style.display === 'flex')) {
        // Hide search bar
        searchBar.style.display = 'none';
        headerContent.style.display = 'flex';
        currentSearch = '';
        document.getElementById('searchInput').value = '';
        currentPage = 1; // Reset to first page when clearing search
        updateUrlParams();
        displayMovies();
    } else {
        // Show search bar
        headerContent.style.display = 'none';
        searchBar.style.display = 'flex';
        document.getElementById('searchInput').focus();
    }
}

// Movie display function (optimized to only work with current page)
function displayMovies() {
    const list = document.getElementById('movieList');
    if (!list) {
        console.error('movieList element not found');
        return;
    }
    
    list.innerHTML = '';

    // Get filtered movies
    const filteredMovies = movies.filter(movie => 
        !currentSearch || 
        cleanSearchString(movie.title).includes(currentSearch) || 
        cleanSearchString(movie.link).includes(currentSearch)
    );

    // Calculate pagination
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedMovies = filteredMovies.slice(startIndex, startIndex + itemsPerPage);

    if (paginatedMovies.length === 0) {
        list.innerHTML = '<p style="grid-column: 1 / -1; text-align: center;">No movies found</p>';
        return;
    }

    // Create document fragment for better performance
    const fragment = document.createDocumentFragment();

    paginatedMovies.forEach(movie => {
        const card = document.createElement('div');
        card.className = 'movie-card';
        card.onclick = function() {
            openModal(movie);
        };

        const thumbnailContainer = document.createElement('div');
        thumbnailContainer.className = 'movie-thumbnail-container';
        
        const thumbnail = document.createElement('img');
        thumbnail.src = 'https://image.tmdb.org/t/p/w342/' + (movie.im || '') + '.jpg';
        thumbnail.className = 'movie-thumbnail';
        thumbnail.alt = movie.title;
        thumbnail.loading = 'lazy';
        thumbnail.onerror = function() {
            this.src = 'placeholder.jpg'; // Fallback image
        };
        
        thumbnailContainer.appendChild(thumbnail);

        const infoDiv = document.createElement('div');
        infoDiv.className = 'movie-info';

        const title = document.createElement('div');
        title.className = 'movie-title';
        title.textContent = movie.title;

        infoDiv.appendChild(title);
        card.appendChild(thumbnailContainer);
        card.appendChild(infoDiv);

        fragment.appendChild(card);
    });

    list.appendChild(fragment);
    updatePagination();
}

// Pagination functions
function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        updateUrlParams();
        displayMovies();
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
}

function nextPage() {
    const filteredMovies = movies.filter(movie => 
        !currentSearch || 
        cleanSearchString(movie.title).includes(currentSearch) || 
        cleanSearchString(movie.link).includes(currentSearch)
    );
    
    const totalPages = Math.ceil(filteredMovies.length / itemsPerPage);
    
    if (currentPage < totalPages) {
        currentPage++;
        updateUrlParams();
        displayMovies();
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
}

function updatePagination() {
    const filteredMovies = movies.filter(movie => 
        !currentSearch || 
        cleanSearchString(movie.title).includes(currentSearch) || 
        cleanSearchString(movie.link).includes(currentSearch)
    );
    
    const totalPages = Math.ceil(filteredMovies.length / itemsPerPage);
    const pageInfo = `Page ${currentPage} of ${totalPages}`;
    
    // Safely update page info elements
    const pageInfoTop = document.getElementById('pageInfoTop');
    const pageInfoBottom = document.getElementById('pageInfoBottom');
    if (pageInfoTop) pageInfoTop.textContent = pageInfo;
    if (pageInfoBottom) pageInfoBottom.textContent = pageInfo;
    
    // Safely update button states
    const prevBtnTop = document.getElementById('prevBtnTop');
    const prevBtnBottom = document.getElementById('prevBtnBottom');
    const nextBtnTop = document.getElementById('nextBtnTop');
    const nextBtnBottom = document.getElementById('nextBtnBottom');
    
    if (prevBtnTop) prevBtnTop.disabled = currentPage === 1;
    if (prevBtnBottom) prevBtnBottom.disabled = currentPage === 1;
    if (nextBtnTop) nextBtnTop.disabled = currentPage === totalPages || totalPages === 0;
    if (nextBtnBottom) nextBtnBottom.disabled = currentPage === totalPages || totalPages === 0;
}

// Modal functions
function openModal(movie) {
    const modal = document.getElementById('movieModal');
    if (!modal) return;
    
    const modalPoster = document.getElementById('modalPoster');
    const videoPlayer = document.getElementById('videoPlayer');
    const modalTitle = document.getElementById('modalTitle');
    const modalDownload = document.getElementById('modalDownload');
    const modalInfo = document.getElementById('modalInfo');
    
    if (!modalPoster || !videoPlayer || !modalTitle || !modalDownload || !modalInfo) {
        console.error('Missing modal elements');
        return;
    }

    const hideMedia = movie.title.toLowerCase().includes('hevc') || 
                     movie.title.toLowerCase().includes('all episodes');
    
    // Use bgi if available, otherwise fall back to im
    const modalImage = movie.bgi || movie.im;
    
    modalPoster.style.display = 'block';
    modalPoster.src = 'https://image.tmdb.org/t/p/w500_and_h282_face/' + (modalImage || '') + '.jpg';
    modalPoster.alt = movie.title;
    modalPoster.onerror = function() {
        this.src = 'placeholder.jpg'; // Fallback image
    };
    
    videoPlayer.innerHTML = '';
    
    if (!hideMedia && movie.dl) {
        try {
            videoPlayer.innerHTML = `
                <script type="text/javascript" src="https://ssl.p.jwpcdn.com/player/v/8.8.6/jwplayer.js"></script>
                <script type="text/javascript">jwplayer.key="64HPbvSQorQcd52B8XFuhMtEoitbvY/EXJmMBfKcXZQU2Rnn";</script>
                <style type="text/css" media="screen">
                    html,#apicodes-player{width:100%!important;height:100%!important;overflow:hidden;background-color:#000}
                </style>
                <div id="apicodes-player"></div>
                <script>
                    var player = jwplayer("apicodes-player");
                    player.setup({
                        sources: [{"label":"HD","type":"video/mp4","file":"${movie.dl}"}],
                        cast: {},
                        aspectratio: "16:9",
                        startparam: "start",
                        primary: "html5",
                        autostart: false,
                        preload: "auto",
                        image: "${modalImage}",
                        captions: {
                            color: "#f3f368",
                            fontSize: 16,
                            backgroundOpacity: 0,
                            fontfamily: "Helvetica",
                            edgeStyle: "raised"
                        }
                    });

                    player.on("setupError", function() {
                        console.error("Player setup error");
                    });

                    player.on("error", function(){
                        console.error("Player error");
                    });
                </script>`;
            modalPoster.style.display = 'none';
        } catch(e) {
            console.error('Error creating video player:', e);
            modalPoster.style.display = 'block';
        }
    } else {
        modalPoster.style.display = 'block';
    }
    
    modalTitle.textContent = movie.title;
    if (movie.dl) {
        modalDownload.href = 'https://dereferer.me/?' + movie.dl;
        modalDownload.style.display = 'inline-block';
    } else {
        modalDownload.style.display = 'none';
    }
    
    if (movie.link) {
        modalInfo.href = 'https://www.imdb.com/title/' + movie.link;
        modalInfo.style.display = 'inline-block';
    } else {
        modalInfo.style.display = 'none';
    }
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('movieModal');
    const videoPlayer = document.getElementById('videoPlayer');
    
    if (videoPlayer) {
        videoPlayer.innerHTML = '';
    }
    
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Event listeners
function setupEventListeners() {
    // Search input
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            currentSearch = cleanSearchString(this.value);
            currentPage = 1;
            updateUrlParams();
            displayMovies();
        });
    }
    
    // Window click for modal
    window.addEventListener('click', function(event) {
        const modal = document.getElementById('movieModal');
        if (event.target === modal) {
            closeModal();
        }
    });
    
    // Window load
    window.addEventListener('load', initializePage);
}

// Initialize the application
setupEventListeners();
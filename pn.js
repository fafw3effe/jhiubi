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
window.onload = function() {
    const { search, page } = getUrlParams();
    currentSearch = cleanSearchString(search);
    currentPage = page;
    
    if (search) {
        document.getElementById('searchInput').value = search;
        toggleSearch(false); // Show search bar if there's a search query
    }
    
    displayMovies();
    updatePagination();
};

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
        updateUrlParams();
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
    currentSearch = cleanSearchString(this.value);
    currentPage = 1;
    updateUrlParams();
    displayMovies();
    updatePagination();
});

// Movie display function (optimized to only work with current page)
function displayMovies() {
    const list = document.getElementById('movieList');
    list.innerHTML = '';

    // Get filtered movies for current page only
    const filteredMovies = movies.filter(movie => 
        cleanSearchString(movie.title).includes(currentSearch) || 
        cleanSearchString(movie.link).includes(currentSearch)
    ).slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    if (filteredMovies.length === 0) {
        list.innerHTML = '<p style="grid-column: 1 / -1; text-align: center;">No movies found</p>';
        return;
    }

    filteredMovies.forEach(movie => {
        const card = document.createElement('div');
        card.className = 'movie-card';
        card.onclick = function() {
            openModal(movie);
        };

        const thumbnailContainer = document.createElement('div');
        thumbnailContainer.className = 'movie-thumbnail-container';
        
        const thumbnail = document.createElement('img');
        thumbnail.src = 'https://image.tmdb.org/t/p/w342/' + movie.im + '.jpg';
        thumbnail.className = 'movie-thumbnail';
        thumbnail.alt = movie.title;
        thumbnail.loading = 'lazy'; // Add lazy loading
        
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
        updateUrlParams();
        displayMovies();
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
}

function nextPage() {
    const filteredMovies = movies.filter(movie => 
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
        cleanSearchString(movie.title).includes(currentSearch) || 
        cleanSearchString(movie.link).includes(currentSearch)
    );
    
    const totalPages = Math.ceil(filteredMovies.length / itemsPerPage);
    const pageInfo = `Page ${currentPage} of ${totalPages}`;
    
    document.getElementById('pageInfoTop').textContent = pageInfo;
    document.getElementById('pageInfoBottom').textContent = pageInfo;
    
    document.getElementById('prevBtnTop').disabled = currentPage === 1;
    document.getElementById('prevBtnBottom').disabled = currentPage === 1;
    document.getElementById('nextBtnTop').disabled = currentPage === totalPages || totalPages === 0;
    document.getElementById('nextBtnBottom').disabled = currentPage === totalPages || totalPages === 0;
}

// Modal functions
function openModal(movie) {
    const modal = document.getElementById('movieModal');
    const modalPoster = document.getElementById('modalPoster');
    const videoPlayer = document.getElementById('videoPlayer');
    const modalTitle = document.getElementById('modalTitle');
    const modalDownload = document.getElementById('modalDownload');
    const modalInfo = document.getElementById('modalInfo');
    
    const hideMedia = movie.title.toLowerCase().includes('hevc') || 
                     movie.title.toLowerCase().includes('all episodes');
    
    // Use bgi if available, otherwise fall back to im
    const modalImage = movie.bgi || movie.im;
    
    modalPoster.style.display = 'block';
    modalPoster.src = 'https://image.tmdb.org/t/p/w500_and_h282_face/' + modalImage + '.jpg';
    modalPoster.alt = movie.title;
    
    videoPlayer.innerHTML = '';
    
    if (!hideMedia && movie.dl) {
        try {
            videoPlayer.innerHTML = `<iframe width="100%" height="100%" src="https://bdhduebd.blogspot.com/?v=${movie.dl}&i=https://image.tmdb.org/t/p/w533_and_h300_bestv2/${modalImage}.jpg" allowfullscreen></iframe>`;
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
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('movieModal');
    const videoPlayer = document.getElementById('videoPlayer');
    
    videoPlayer.innerHTML = '';
    modal.style.display = 'none';
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
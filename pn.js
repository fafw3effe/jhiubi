const itemsPerPage = 12;
let currentPage = 1;
let currentSearch = '';
let searchTimeout = null;

// Helper function to clean search strings
function cleanSearchString(str) {
    if (!str) return '';
    return str.toLowerCase().replace(/[^\w\s]/g, '');
}

// Parse URL parameters
function getUrlParams() {
    const params = new URLSearchParams(window.location.search);
    const search = params.get('s') ? decodeURIComponent(params.get('s')) : '';
    const page = Math.max(1, parseInt(params.get('p')) || 1);
    return { search, page };
}

// Update URL parameters
function updateUrlParams() {
    const params = new URLSearchParams();
    if (currentSearch) params.set('s', encodeURIComponent(currentSearch));
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
        toggleSearch(false);
    }
    
    displayMovies();
    updatePagination();
};

// Toggle search bar
function toggleSearch(show = null) {
    const headerContent = document.querySelector('.header-content');
    const searchBar = document.querySelector('.search-bar');
    
    if (show === false || (show === null && searchBar.style.display === 'flex')) {
        searchBar.style.display = 'none';
        headerContent.style.display = 'flex';
        currentSearch = '';
        document.getElementById('searchInput').value = '';
        currentPage = 1;
        updateUrlParams();
        displayMovies();
    } else {
        headerContent.style.display = 'none';
        searchBar.style.display = 'flex';
        document.getElementById('searchInput').focus();
    }
}

// Search functionality with debounce
document.getElementById('searchInput').addEventListener('input', function() {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
        currentSearch = cleanSearchString(this.value);
        currentPage = 1;
        updateUrlParams();
        displayMovies();
        updatePagination();
    }, 300);
});

// Movie display function
function displayMovies() {
    const list = document.getElementById('movieList');
    list.innerHTML = '';

    const filteredMovies = movies.filter(movie => {
        const cleanTitle = cleanSearchString(movie.title);
        const cleanLink = cleanSearchString(movie.link);
        return cleanTitle.includes(currentSearch) || cleanLink.includes(currentSearch);
    });

    const totalPages = Math.max(1, Math.ceil(filteredMovies.length / itemsPerPage));
    currentPage = Math.min(currentPage, totalPages);

    const pageMovies = filteredMovies.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    if (pageMovies.length === 0) {
        list.innerHTML = '<p style="grid-column: 1 / -1; text-align: center;">No movies found</p>';
        return;
    }

    const fragment = document.createDocumentFragment();
    
    pageMovies.forEach(movie => {
        const card = document.createElement('div');
        card.className = 'movie-card';
        card.onclick = () => openModal(movie);

        const thumbnailContainer = document.createElement('div');
        thumbnailContainer.className = 'movie-thumbnail-container';
        
        const thumbnail = document.createElement('img');
        thumbnail.src = 'https://image.tmdb.org/t/p/w342/' + (movie.im || '') + '.jpg';
        thumbnail.className = 'movie-thumbnail';
        thumbnail.alt = movie.title;
        thumbnail.loading = 'lazy';
        thumbnail.onerror = () => {
            thumbnail.src = 'placeholder.jpg'; // Fallback image
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
        cleanSearchString(movie.title).includes(currentSearch) || 
        cleanSearchString(movie.link).includes(currentSearch)
    );
    
    const totalPages = Math.max(1, Math.ceil(filteredMovies.length / itemsPerPage));
    
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
    
    const totalPages = Math.max(1, Math.ceil(filteredMovies.length / itemsPerPage));
    currentPage = Math.min(currentPage, totalPages);
    
    const pageInfo = `Page ${currentPage} of ${totalPages}`;
    
    document.getElementById('pageInfoTop').textContent = pageInfo;
    document.getElementById('pageInfoBottom').textContent = pageInfo;
    
    const disablePrev = currentPage === 1;
    const disableNext = currentPage === totalPages || totalPages === 0;
    
    document.getElementById('prevBtnTop').disabled = disablePrev;
    document.getElementById('prevBtnBottom').disabled = disablePrev;
    document.getElementById('nextBtnTop').disabled = disableNext;
    document.getElementById('nextBtnBottom').disabled = disableNext;
}

// Modal functions
function openModal(movie) {
    const modal = document.getElementById('movieModal');
    const modalPoster = document.getElementById('modalPoster');
    const videoPlayer = document.getElementById('videoPlayer');
    const modalTitle = document.getElementById('modalTitle');
    const modalDownload = document.getElementById('modalDownload');
    const modalInfo = document.getElementById('modalInfo');
    
    const hideMedia = movie.title.toLowerCase().includes('heevc') || 
                     movie.title.toLowerCase().includes('all episodes');
    
    // Use bgi if available, otherwise fall back to im
    const modalImage = movie.bgi || movie.im;
    
    modalPoster.style.display = 'block';
    modalPoster.src = 'https://image.tmdb.org/t/p/w500_and_h282_face/' + (modalImage || '') + '.jpg';
    modalPoster.alt = movie.title;
    modalPoster.onerror = () => {
        modalPoster.src = 'placeholder.jpg';
    };
    
    videoPlayer.innerHTML = '';
    
    if (!hideMedia && movie.dl) {
        try {
            const videoUrl = `https://bdhduebd.blogspot.com/?v=${movie.dl}&i=https://image.tmdb.org/t/p/w533_and_h300_bestv2/${modalImage}.jpg`;
            videoPlayer.innerHTML = `<iframe width="100%" height="100%" src="${videoUrl}" allowfullscreen></iframe>`;
            modalPoster.style.display = 'none';
        } catch(e) {
            console.error('Error creating video player:', e);
            modalPoster.style.display = 'block';
        }
    }
    
    modalTitle.textContent = movie.title;
    modalDownload.href = movie.dl ? 'https://dereferer.me/?' + encodeURIComponent(movie.dl) : '#';
    modalDownload.style.display = movie.dl ? 'block' : 'none';
    modalInfo.href = 'https://www.imdb.com/title/' + (movie.link || '');
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('movieModal');
    const videoPlayer = document.getElementById('videoPlayer');
    
    // Pause any playing video
    const iframe = videoPlayer.querySelector('iframe');
    if (iframe) {
        iframe.src = '';
    }
    
    videoPlayer.innerHTML = '';
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

window.onclick = function(event) {
    const modal = document.getElementById('movieModal');
    if (event.target === modal) {
        closeModal();
    }
}

function goHome() {
    window.location.href = '/';
}

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});
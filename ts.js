const itemsPerPage = 20;
let currentPage = 1;

// Function to get URL parameters
function getUrlParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        search: params.get('s') || '',
        page: parseInt(params.get('p')) || 1,
        post: params.get('post') || ''
    };
}

// Function to update URL with search term, page, and post
function updateUrl(searchTerm, page, postId = '') {
    const params = new URLSearchParams();
    if (searchTerm) {
        params.set('s', searchTerm);
    }
    if (page && page > 1) {
        params.set('p', page);
    }
    if (postId) {
        params.set('post', postId);
    }
    const newUrl = `${window.location.pathname}${params.toString() ? '?' + params.toString() : ''}`;
    history.pushState({ searchTerm, page, postId }, '', newUrl);
}

// Initialize the page
window.onload = function() {
    const params = getUrlParams();
    currentPage = params.page;
    document.getElementById('searchInput').value = params.search;
    
    // Check if there's a post ID in the URL
    if (params.post) {
        const movie = movies.find(m => m.im === params.post);
        if (movie) {
            openModal(movie);
        }
    }
    
    displayMovies();
    updatePagination();
};

// Toggle search bar
function toggleSearch() {
    const headerContent = document.querySelector('.header-content');
    const searchBar = document.querySelector('.search-bar');
    
    if (searchBar.style.display === 'flex') {
        searchBar.style.display = 'none';
        headerContent.style.display = 'flex';
    } else {
        headerContent.style.display = 'none';
        searchBar.style.display = 'flex';
        document.getElementById('searchInput').focus();
    }
}

// Search functionality
document.getElementById('searchInput').addEventListener('input', function() {
    currentPage = 1;
    const searchTerm = this.value;
    updateUrl(searchTerm, currentPage);
    displayMovies();
    updatePagination();
    window.scrollTo({top: 0, behavior: 'smooth'});
});

// Function to trigger search
function triggerSearch(term) {
    closeModal();
    document.getElementById('searchInput').value = term;
    currentPage = 1;
    updateUrl(term, currentPage);
    displayMovies();
    updatePagination();
    window.scrollTo({top: 0, behavior: 'smooth'});
}

// Display movies with quality badges
function displayMovies() {
    const list = document.getElementById('movieList');
    list.innerHTML = '';

    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const cleanedSearchTerm = searchTerm.replace(/[{}\-.\()\s|:\[\]]/g, '');

    const filteredMovies = movies.filter(movie => {
        const cleanedTitle = movie.title.toLowerCase().replace(/[{}\-.\()\s|:\[\]]/g, '');
        const cleanedGenre = (movie.genre || '').toLowerCase().replace(/[{}\-.\()\s|:\[\]]/g, '');
        const cleanedCast = (movie.cast || '').toLowerCase().replace(/[{}\-.\()\s|:\[\]]/g, '');
        const cleanedYear = (movie.year || '').toLowerCase().replace(/[{}\-.\()\s|:\[\]]/g, '');
        
        return cleanedTitle.includes(cleanedSearchTerm) ||
               cleanedGenre.includes(cleanedSearchTerm) ||
               cleanedCast.includes(cleanedSearchTerm) ||
               cleanedYear.includes(cleanedSearchTerm);
    });

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, filteredMovies.length);
    const moviesToShow = filteredMovies.slice(startIndex, endIndex);

    if (moviesToShow.length === 0) {
        list.innerHTML = '<p style="grid-column: 1 / -1; text-align: center;">No movies found</p>';
        return;
    }

    moviesToShow.forEach(movie => {
        const card = document.createElement('div');
        card.className = 'movie-card';
        card.onclick = function(event) {
            if (!event.target.closest('a')) {
                openModal(movie);
            }
        };

        const thumbnailContainer = document.createElement('div');
        thumbnailContainer.className = 'movie-thumbnail-container';
        
        const thumbnail = document.createElement('img');
        thumbnail.src = 'https://image.tmdb.org/t/p/w342/' + movie.im + '.jpg';
        thumbnail.className = 'movie-thumbnail';
        thumbnail.alt = movie.title;
        thumbnail.loading = 'lazy';
        
        const ratingSticker = document.createElement('div');
        ratingSticker.className = 'sticker rating-sticker';
        ratingSticker.innerHTML = `<i class="fas fa-star"></i> ${movie.rating || 'N/A'}`;
        
        let ratingColor = '#6c757d';
        if (movie.rating && !isNaN(parseFloat(movie.rating))) {
            const rating = parseFloat(movie.rating);
            if (rating >= 8.5) {
                ratingColor = '#0074f8';
            } else if (rating >= 7) {
                ratingColor = '#28a745';
            } else if (rating >= 5) {
                ratingColor = '#fd7e14';
            } else {
                ratingColor = '#dc3545';
            }
        }
        ratingSticker.style.backgroundColor = ratingColor;
        
let qualityClass = 'quality-hd'; 
let mq = movie.title.match(/\] (.*?) \[/); 
mq = mq ? `${mq[1]}` : ''; // Re-assign mq without redeclaring
const qualityText = mq || 'hd';
        
        const sticker = document.createElement('div');
        if (movie.type === 'series') {
            const seasonMatch = movie.title.match(/\[Season (.*?)\]/);
            const seasonText = seasonMatch ? `Season ${seasonMatch[1]}` : 'Season 1';
            
            const seasonMatche = movie.title.match(/\[Episode (.*?)\]/);
            const seasonTexte = seasonMatche ? ` - Episode ${seasonMatche[1]}` : '';

            sticker.className = 'sticker season-sticker';
            sticker.textContent = seasonText+seasonTexte;
        } else {
            sticker.className = `sticker quality-sticker ${qualityClass}`;
            sticker.textContent = qualityText.toUpperCase();
        }
        
        thumbnailContainer.appendChild(thumbnail);
        thumbnailContainer.appendChild(ratingSticker);
        thumbnailContainer.appendChild(sticker);

        const infoDiv = document.createElement('div');
        infoDiv.className = 'movie-info';

        const title = document.createElement('div');
        title.className = 'movie-title';
        let displayTitle = movie.title;
        title.textContent = displayTitle;
        
        infoDiv.appendChild(title);
        card.appendChild(thumbnailContainer);
        card.appendChild(infoDiv);

        list.appendChild(card);
    });
}

// Pagination functions
function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        const searchTerm = document.getElementById('searchInput').value;
        updateUrl(searchTerm, currentPage);
        displayMovies();
        updatePagination();
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
}

function nextPage() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const filteredMovies = movies.filter(movie => {
        const cleanedTitle = movie.title.toLowerCase().replace(/[{}\-.\()\s|:\[\]]/g, '');
        const cleanedGenre = (movie.genre || '').toLowerCase().replace(/[{}\-.\()\s|:\[\]]/g, '');
        const cleanedCast = (movie.cast || '').toLowerCase().replace(/[{}\-.\()\s|:\[\]]/g, '');
        const cleanedYear = (movie.year || '').toLowerCase().replace(/[{}\-.\()\s|:\[\]]/g, '');
        
        return cleanedTitle.includes(searchTerm) ||
               cleanedGenre.includes(searchTerm) ||
               cleanedCast.includes(searchTerm) ||
               cleanedYear.includes(searchTerm);
    });
    
    const totalPages = Math.ceil(filteredMovies.length / itemsPerPage);
    
    if (currentPage < totalPages) {
        currentPage++;
        updateUrl(searchTerm, currentPage);
        displayMovies();
        updatePagination();
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
}

function updatePagination() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const filteredMovies = movies.filter(movie => {
        const cleanedTitle = movie.title.toLowerCase().replace(/[{}\-.\()\s|:\[\]]/g, '');
        const cleanedGenre = (movie.genre || '').toLowerCase().replace(/[{}\-.\()\s|:\[\]]/g, '');
        const cleanedCast = (movie.cast || '').toLowerCase().replace(/[{}\-.\()\s|:\[\]]/g, '');
        const cleanedYear = (movie.year || '').toLowerCase().replace(/[{}\-.\()\s|:\[\]]/g, '');
        
        return cleanedTitle.includes(searchTerm) ||
               cleanedGenre.includes(searchTerm) ||
               cleanedCast.includes(searchTerm) ||
               cleanedYear.includes(searchTerm);
    });
    
    const totalPages = Math.ceil(filteredMovies.length / itemsPerPage);
    const pageInfo = `Page ${currentPage} of ${totalPages}`;
    
    document.getElementById('pageInfo').textContent = pageInfo;
    
    document.getElementById('prevBtn').disabled = currentPage === 1;
    document.getElementById('nextBtn').disabled = currentPage === totalPages || totalPages === 0;
}

// Modal functions
function openModal(movie) {
    const modal = document.getElementById('movieModal');
    const modalPoster = document.getElementById('modalPoster');
    const videoPlayer = document.getElementById('videoPlayer');
    const modalTitle = document.getElementById('modalTitle');
    const modalDownload = document.getElementById('modalDownload');
    const modalRating = document.getElementById('modalRating');
    const modalDuration = document.getElementById('modalDuration');
    const modalYear = document.getElementById('modalYear');
    const modalGenre = document.getElementById('modalGenre');
    const modalCast = document.getElementById('modalCast');
    const modalDescription = document.getElementById('modalDescription');
    
    // Update URL with post ID
    const searchTerm = document.getElementById('searchInput').value;
    updateUrl(searchTerm, currentPage, movie.im);
    
    const modalImage = movie.bgi || movie.im;
    
    modalPoster.style.display = 'block';
    modalPoster.src = 'https://image.tmdb.org/t/p/w500_and_h282_face/' + modalImage + '.jpg';
    modalPoster.alt = movie.title;
    
    videoPlayer.innerHTML = '';
    
    const titleLower = movie.title.toLowerCase();
    const hideVideoPlayer = titleLower.includes('all episodes') || titleLower.includes('heevc');
    
    if (movie.dl && !hideVideoPlayer) {
        try {
            videoPlayer.innerHTML = `
            <video controls preload="metadata"
                poster="https://image.tmdb.org/t/p/w533_and_h300_bestv2/${modalImage}.jpg"
                style="width:100%;height:100%;object-fit:contain;background:#000;"
                onerror="this.style.display='none';this.nextElementSibling.style.display='block';">
                <source src="${movie.dl}" type="video/mp4">
                Your browser doesn't support HTML5 video.
            </video>
            <div style="display:none;color:white;background:#000;width:100%;height:100%;text-align:center;padding-top:50px;">
                Sorry, the video cannot be played. Please try downloading the file.
            </div>`;
            modalPoster.style.display = 'none';
        } catch(e) {
            console.error('Error creating video player:', e);
            modalPoster.style.display = 'block';
        }
    } else {
        modalPoster.style.display = 'block';
    }
    
    let displayTitle = movie.title;
    modalTitle.textContent = displayTitle;
    modalDownload.href = 'https://dereferer.me/?' + movie.dl;
    modalRating.textContent = movie.rating || 'N/A';
    modalDuration.textContent = movie.duration || 'N/A';
    modalYear.innerHTML = `<a onclick="triggerSearch('${movie.year}')">${movie.year || 'N/A'}</a>`;
    
    const genres = movie.genre ? movie.genre.split(',').map(g => g.trim()) : ['N/A'];
    modalGenre.innerHTML = genres.map(genre => 
        `<a onclick="triggerSearch('${genre}')">${genre}</a>`
    ).join(', ');
    
    const cast = movie.cast ? movie.cast.split(',').map(c => c.trim()) : ['N/A'];
    modalCast.innerHTML = cast.map(actor => 
        `<a onclick="triggerSearch('${actor}')">${actor}</a>`
    ).join(', ');
    
    modalDescription.textContent = movie.description || 'No description available.';
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('movieModal');
    const videoPlayer = document.getElementById('videoPlayer');
    
    const video = videoPlayer.querySelector('video');
    if (video) {
        video.pause();
    }
    
    videoPlayer.innerHTML = '';
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    
    // Remove post ID from URL when closing modal
    const searchTerm = document.getElementById('searchInput').value;
    updateUrl(searchTerm, currentPage);
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

// Handle back/forward navigation
window.addEventListener('popstate', function(event) {
    const params = getUrlParams();
    currentPage = params.page;
    document.getElementById('searchInput').value = params.search;
    
    if (params.post) {
        const movie = movies.find(m => m.im === params.post);
        if (movie) {
            openModal(movie);
        } else {
            closeModal();
        }
    } else {
        closeModal();
    }
    
    displayMovies();
    updatePagination();
});
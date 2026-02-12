
const itemsPerLoad = 20; // Number of items to load each time
let currentIndex = 0;
let isLoading = false;
let hasMore = true;
let filteredMovies = [];

// Initialize on page load
window.onload = function() {
    filteredMovies = [...movies]; // Start with all movies
    loadMoreMovies();
    
    // Set up intersection observer for infinite scroll
    setupInfiniteScroll();
    
    // Close modal on ESC key
    document.addEventListener('keydown', function(e) {
        if(e.key === 'Escape') closeModal();
    });
};

function toggleSearch() {
    const bar = document.querySelector('.search-bar');
    const header = document.querySelector('.header-content');
    if(bar.style.display === 'flex') {
        bar.style.display = 'none';
        header.style.display = 'flex';
    } else {
        bar.style.display = 'flex';
        header.style.display = 'none';
        document.getElementById('searchInput').focus();
    }
}

// Search functionality
document.getElementById('searchInput').addEventListener('input', function() {
    const term = this.value.toLowerCase();
    const cleanTerm = term.replace(/[^a-z0-9]/g, '');
    
    if (cleanTerm === '') {
        filteredMovies = [...movies];
    } else {
        filteredMovies = movies.filter(m => {
            const t = (m.title + m.genre + m.cast).toLowerCase().replace(/[^a-z0-9]/g, '');
            return t.includes(cleanTerm);
        });
    }
    
    // Reset and reload
    currentIndex = 0;
    hasMore = true;
    document.getElementById('movieList').innerHTML = '';
    document.getElementById('endMessage').style.display = 'none';
    loadMoreMovies();
});

function setupInfiniteScroll() {
    const options = {
        root: null,
        rootMargin: '200px', // Start loading when within 200px of the bottom
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting && !isLoading && hasMore) {
                loadMoreMovies();
            }
        });
    }, options);
    
    // Create a sentinel element for observing
    const sentinel = document.createElement('div');
    sentinel.id = 'scrollSentinel';
    sentinel.style.height = '10px';
    sentinel.style.width = '100%';
    sentinel.style.gridColumn = '1/-1';
    document.getElementById('movieList').after(sentinel);
    observer.observe(sentinel);
}

function loadMoreMovies() {
    if (isLoading || !hasMore) return;
    
    isLoading = true;
    document.getElementById('loaderContainer').style.display = 'flex';
    
    // Simulate network delay (remove in production)
    setTimeout(() => {
        const start = currentIndex;
        const end = Math.min(start + itemsPerLoad, filteredMovies.length);
        const newItems = filteredMovies.slice(start, end);
        
        if (newItems.length > 0) {
            appendMovies(newItems);
            currentIndex = end;
        }
        
        if (currentIndex >= filteredMovies.length) {
            hasMore = false;
            document.getElementById('loaderContainer').style.display = 'none';
            document.getElementById('endMessage').style.display = 'block';
        } else {
            document.getElementById('loaderContainer').style.display = 'none';
        }
        
        isLoading = false;
    }, 300); // Small delay for smooth loading effect
}

function appendMovies(moviesToAdd) {
    const list = document.getElementById('movieList');
    
    moviesToAdd.forEach(movie => {
        const div = document.createElement('div');
        div.className = 'movie-card';
        div.onclick = () => openModal(movie);
        
        // Badge Logic
        let badge = 'HD';
        let bClass = 'quality-sticker';
        if(movie.type === 'series') {
            badge = 'Series';
            bClass = 'season-sticker';
        } else if (movie['1080p']) badge = '1080p';
        else if (movie['720p']) badge = '720p';

        // Use bgi for image
        const imgSrc = 'https://image.tmdb.org/t/p/original/' + movie.bgi + '.jpg';
        
        div.innerHTML = `
            <div class="movie-thumbnail-container">
                <img src="${imgSrc}" class="movie-thumbnail" loading="lazy" onerror="this.src='https://via.placeholder.com/342x192/1a1c24/ffffff?text=No+Image'">
                <div class="sticker rating-sticker"><i class="fas fa-star" style="color:#ffd166"></i> ${movie.rating}</div>
                <div class="sticker ${bClass}">${badge}</div>
            </div>
            <div class="movie-info">
                <h3 class="movie-title">${movie.title}</h3>
            </div>
        `;
        list.appendChild(div);
    });
}

function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}

function goHome() { 
    // Reset search and reload
    document.getElementById('searchInput').value = '';
    filteredMovies = [...movies];
    currentIndex = 0;
    hasMore = true;
    document.getElementById('movieList').innerHTML = '';
    document.getElementById('endMessage').style.display = 'none';
    loadMoreMovies();
    scrollToTop();
}

// --- MODAL FUNCTIONS ---
function openModal(movie) {
    currentMovie = movie;
    const modal = document.getElementById('movieModal');
    document.getElementById('modalTitle').innerText = movie.title;
    document.getElementById('modalRating').innerText = movie.rating;
    document.getElementById('modalYear').innerText = movie.year;
    document.getElementById('modalDuration').innerText = movie.duration;
    document.getElementById('modalType').innerText = movie.type === 'movie' ? 'Movie' : 'TV Series';
    document.getElementById('modalDescription').innerText = movie.description;
    
    // Setup media container - show video player if wo exists, otherwise show poster
    const mediaContainer = document.getElementById('modalMediaContainer');
    mediaContainer.innerHTML = '';
    
    if(movie.wo) {
        // Show video player for streaming
        const streamingUrl = movie.wo;
        mediaContainer.innerHTML = `
            <div class="video-container">
                <div class="video-wrapper">
                    <video width="320" height="240" controls>
<source src="${streamingUrl}" type="video/mp4">
Your browser does not support the video tag
</video>
                </div>
            </div>
        `;
    } else {
        // Show poster image
        const imgSrc = 'https://image.tmdb.org/t/p/original/' + movie.bgi + '.jpg';
        mediaContainer.innerHTML = `<img class="modal-poster" src="${imgSrc}" onerror="this.src='https://via.placeholder.com/780x439/1a1c24/ffffff?text=No+Image'">`;
    }
    
    // Cast & Genre
    const castGenreContainer = document.getElementById('modalCastGenre');
    castGenreContainer.innerHTML = '';
    
    if(movie.genre) {
        const genres = movie.genre.split(',');
        genres.forEach(genre => {
            if(genre.trim()) {
                const span = document.createElement('span');
                span.textContent = genre.trim();
                castGenreContainer.appendChild(span);
            }
        });
    }
    
    if(movie.cast) {
        const cast = movie.cast.split(',');
        cast.slice(0, 3).forEach(actor => {
            if(actor.trim()) {
                const span = document.createElement('span');
                span.textContent = actor.trim();
                span.title = movie.cast;
                castGenreContainer.appendChild(span);
            }
        });
    }
    
    // Generate Download Buttons
    const grid = document.getElementById('dynamicButtons');
    grid.innerHTML = '';
    
    const skip = ['title', 'bgi', 'year', 'duration', 'rating', 'genre', 'description', 'type', 'cast', 'wo'];
    let links = [];
    
    for(let k in movie) {
        if(!skip.includes(k) && typeof movie[k] === 'string' && movie[k].startsWith('http')) {
            links.push({ key: k, url: movie[k] });
        }
    }
    
    // Sort links
    if(movie.type === 'series') {
        links.sort((a, b) => {
            return a.key.localeCompare(b.key, undefined, {numeric: true});
        });
    } else {
        const order = {'480p':1, '720p':2, '1080p':3, '4k':4};
        links.sort((a, b) => (order[a.key] || 99) - (order[b.key] || 99));
    }
    
    // Create download buttons
    links.forEach(l => {
        const btn = document.createElement('a');
        btn.className = 'dl-btn';
        
        // Add quality classes
        if(l.key.includes('1080p')) btn.classList.add('q-1080p');
        else if(l.key.includes('720p')) btn.classList.add('q-720p');
        else if(l.key.includes('480p')) btn.classList.add('q-480p');
        
        // Use dereferer for links
        btn.href = 'https://dereferer.me/?' + encodeURIComponent(l.url);
        btn.target = '_blank';
        btn.rel = 'noopener noreferrer';
        
        let icon = 'fa-download';
        if(l.key.includes('S') && l.key.includes('E')) icon = 'fa-play';
        
        btn.innerHTML = `<i class="fas ${icon}"></i> ${l.key.toUpperCase()}`;
        grid.appendChild(btn);
    });
    
    // Show modal
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    // Stop any playing videos
    const iframe = document.querySelector('#modalMediaContainer iframe');
    if(iframe) {
        iframe.src = '';
    }
    
    document.getElementById('movieModal').style.display = 'none';
    document.body.style.overflow = 'auto';
    currentMovie = null;
}

// Close modal when clicking outside
window.onclick = function(e) {
    if(e.target == document.getElementById('movieModal')) {
        closeModal();
    }
}
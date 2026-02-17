    // ---------- ROUTER & PAGE RENDERING ----------
    const itemsPerLoad = 50;
    let currentIndex = 0;
    let isLoading = false;
    let hasMore = true;
    let filteredMovies = [];
    let currentSearchTerm = ''; // Store search term for persistence

    // Helper: create URL-friendly slug from title
    function slugify(title) {
        return title.toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-|-$/g, '');
    }

    // Precompute slugs for each movie
    movies.forEach(m => {
        m.slug = slugify(m.title);
    });

    // Get current slug from URL hash (e.g., "#romeo-2026")
    function getCurrentSlug() {
        const hash = window.location.hash;
        if (hash && hash.startsWith('#')) {
            return hash.substring(1);
        }
        return null;
    }

    function navigateToPost(slug) {
        window.location.hash = slug;
        renderPostPage(slug);
        // Close search if open and scroll to top
        document.querySelector('.search-bar').style.display = 'none';
        document.querySelector('.header-content').style.display = 'flex';
        window.scrollTo(0, 0); // Scroll to top when opening post
    }

    function goHome() {
        window.location.hash = '';
        renderHomePage();
        // Close search if open
        document.querySelector('.search-bar').style.display = 'none';
        document.querySelector('.header-content').style.display = 'flex';
        window.scrollTo(0, 0); // Scroll to top when going home
    }

    // Initialize page based on URL
    window.addEventListener('load', function() {
        const slug = getCurrentSlug();
        if (slug) {
            renderPostPage(slug);
        } else {
            renderHomePage();
        }
        // Close search on load
        document.querySelector('.search-bar').style.display = 'none';
        document.querySelector('.header-content').style.display = 'flex';
        
        // Initialize search input listener
        setupSearchListener();
    });

    window.addEventListener('hashchange', function() {
        const slug = getCurrentSlug();
        if (slug) {
            renderPostPage(slug);
            window.scrollTo(0, 0); // Scroll to top when navigating to post via hash
        } else {
            renderHomePage();
            window.scrollTo(0, 0); // Scroll to top when going home
        }
    });

    // ---------- SEARCH FUNCTIONALITY - NOW REDIRECTS TO HOME ----------
    function setupSearchListener() {
        const searchInput = document.getElementById('searchInput');
        // Remove existing listeners to avoid duplicates
        searchInput.removeEventListener('input', handleSearch);
        searchInput.addEventListener('input', handleSearch);
    }

    function handleSearch(e) {
        const term = e.target.value;
        
        // If we're on a post page, redirect to home with search term
        if (getCurrentSlug()) {
            // Store the search term
            currentSearchTerm = term;
            // Navigate to home
            window.location.hash = '';
            renderHomePage();
            // Set the search input value and trigger filtering
            const searchInput = document.getElementById('searchInput');
            searchInput.value = term;
            performSearch(term);
        } else {
            // Already on home, just perform search
            currentSearchTerm = term;
            performSearch(term);
        }
    }

    function performSearch(term) {
        const cleanTerm = term.toLowerCase().replace(/[^a-z0-9]/g, '');
        
        if (cleanTerm === '') {
            filteredMovies = [...movies];
        } else {
            filteredMovies = movies.filter(m => {
                const t = (m.title + ' ' + (m.genre || '') + ' ' + (m.cast || '')).toLowerCase().replace(/[^a-z0-9]/g, '');
                return t.includes(cleanTerm);
            });
        }
        
        // Update UI if movie grid exists
        const movieList = document.getElementById('movieList');
        if (movieList) {
            currentIndex = 0;
            hasMore = true;
            movieList.innerHTML = '';
            document.getElementById('endMessage').style.display = 'none';
            loadMoreMovies();
        }
    }

    // ---------- HOME PAGE (infinite grid) ----------
    function renderHomePage() {
        document.title = "PP TOONS INDIA - Home";
        document.getElementById('canonicalLink').href = 'https://www.pptons.com';
        const main = document.getElementById('mainContent');
        main.innerHTML = `
            <div class='container'>
                <div class='top-buttons'>
                    <button class='top-btn' onclick="window.location.href='/'"><i class='fas fa-home'></i> Home</button>
                    <button class='top-btn' onclick='window.open("https://t.me/pptnxyz", "_blank")'><i class='fab fa-telegram'></i> Telegram</button>
                </div>
                <div class='movie-grid' id='movieList'></div>
                <div id='loaderContainer' class='loader-container' style='display: none;'><div class='loader'></div></div>
                <div id='endMessage' class='end-message' style='display: none;'><i class='fas fa-check-circle'></i> You've reached the end!</div>
                <footer style='text-align:center; color:#666; font-size:12px; margin-top:30px; padding-top:20px; border-top:1px solid rgba(255,255,255,0.1);'>
                    <p>Admin: admin@pptons.com | No files stored on server.</p>
                    <p>&copy; 2026 PP TOONS INDIA. All rights reserved.</p>
                </footer>
            </div>
        `;

        // Apply current search filter if any
        if (currentSearchTerm) {
            const cleanTerm = currentSearchTerm.toLowerCase().replace(/[^a-z0-9]/g, '');
            filteredMovies = cleanTerm ? movies.filter(m => {
                const t = (m.title + ' ' + (m.genre || '') + ' ' + (m.cast || '')).toLowerCase().replace(/[^a-z0-9]/g, '');
                return t.includes(cleanTerm);
            }) : [...movies];
        } else {
            filteredMovies = [...movies];
        }
        
        currentIndex = 0;
        hasMore = true;
        isLoading = false;
        document.getElementById('movieList').innerHTML = '';
        document.getElementById('endMessage').style.display = 'none';
        
        loadMoreMovies();
        setupInfiniteScroll();
        
        // Restore search input value
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.value = currentSearchTerm;
        }
    }

    function setupInfiniteScroll() {
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting && !isLoading && hasMore) {
                    loadMoreMovies();
                }
            });
        }, { rootMargin: '200px' });
        
        const oldSentinel = document.getElementById('scrollSentinel');
        if(oldSentinel) oldSentinel.remove();
        
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
        }, 300);
    }

    function appendMovies(moviesToAdd) {
        const list = document.getElementById('movieList');
        moviesToAdd.forEach(movie => {
            const link = document.createElement('a');
            link.className = 'movie-card';
            link.href = '#';
            link.onclick = (e) => {
                e.preventDefault();
                navigateToPost(movie.slug);
            };
            
            let badge = 'HD';
            let bClass = 'quality-sticker';
            if(movie.type === 'series') { badge = 'Series'; bClass = 'season-sticker'; }
            else if (movie['1080p']) badge = '1080p';
            else if (movie['720p']) badge = '720p';

            const imgSrc = 'https://image.tmdb.org/t/p/original/' + (movie.bgi || movie.im) + '.jpg';
            
            link.innerHTML = `
                <div class="movie-thumbnail-container">
                    <img src="${imgSrc}" class="movie-thumbnail" loading="lazy" onerror="this.src='https://via.placeholder.com/342x192/1a1c24/ffffff?text=No+Image'">
                    <div class="sticker rating-sticker"><i class="fas fa-star" style="color:#ffd166"></i> ${movie.rating}</div>
                    <div class="sticker ${bClass}">${badge}</div>
                </div>
                <div class="movie-info">
                    <h3 class="movie-title">${movie.title}</h3>
                </div>
            `;
            list.appendChild(link);
        });
    }

    // ---------- HELPER: Get random related movies (excluding current) ----------
    function getRandomRelatedMovies(currentSlug, count = 4) {
        const others = movies.filter(m => m.slug !== currentSlug);
        const shuffled = others.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, Math.min(count, others.length));
    }

    // ---------- MOVIE DETAIL PAGE WITH RELATED POSTS ----------
    function renderPostPage(slug) {
        const movie = movies.find(m => m.slug === slug);
        if (!movie) {
            goHome();
            return;
        }

        document.title = movie.title + " - PP TOONS INDIA";
        document.getElementById('canonicalLink').href = 'https://www.pptons.com/post/' + slug;

        const main = document.getElementById('mainContent');
        
        // Media
        let mediaHtml = '';
        if (movie.wo) {
            const streamingUrl = movie.wo;
            const imgSrc = 'https://image.tmdb.org/t/p/original/' + (movie.bgi || movie.im) + '.jpg';
            mediaHtml = `

                        <video width="100%" height="100%" controls poster="${imgSrc}"><source src="${streamingUrl}" type="video/mp4"></video>

            `;
        } else {
            const imgSrc = 'https://image.tmdb.org/t/p/original/' + (movie.bgi || movie.im) + '.jpg';
            mediaHtml = `<img class="movie-detail-poster" src="${imgSrc}" onerror="this.src='https://via.placeholder.com/780x439/1a1c24/ffffff?text=No+Image'">`;
        }

        // Download buttons
        const skip = ['title', 'bgi', 'im', 'year', 'duration', 'rating', 'genre', 'description', 'type', 'cast', 'wo', 'slug'];
        let links = [];
        for(let k in movie) {
            if(!skip.includes(k) && typeof movie[k] === 'string' && movie[k].startsWith('http')) {
                links.push({ key: k, url: movie[k] });
            }
        }
        if(movie.type === 'series') {
            links.sort((a, b) => a.key.localeCompare(b.key, undefined, {numeric: true}));
        } else {
            const order = {'480p':1, '720p':2, '1080p':3, '4k':4};
            links.sort((a, b) => (order[a.key] || 99) - (order[b.key] || 99));
        }

        let buttonsHtml = '';
        links.forEach(l => {
            let qClass = '';
            if(l.key.includes('1080p')) qClass = 'q-1080p';
            else if(l.key.includes('720p')) qClass = 'q-720p';
            else if(l.key.includes('480p')) qClass = 'q-480p';
            
            let icon = 'fa-download';
            if(l.key.includes('S') && l.key.includes('E')) icon = 'fa-play';
            
            buttonsHtml += `
                <a class="dl-btn ${qClass}" href="https://dereferer.me/?${encodeURIComponent(l.url)}" target="_blank" rel="noopener">
                    <i class="fas ${icon}"></i> ${l.key.toUpperCase()}
                </a>
            `;
        });

        // Cast & genre
        const genreHtml = movie.genre ? movie.genre.split(',').map(g => `<span class="meta-tag">${g.trim()}</span>`).join('') : '';
        const castHtml = movie.cast ? movie.cast.split(',').slice(0,3).map(a => `<span class="meta-tag">${a.trim()}</span>`).join('') : '';

        // ----- RELATED POSTS -----
        const relatedMovies = getRandomRelatedMovies(movie.slug, 4);
        let relatedHtml = '';
        if (relatedMovies.length > 0) {
            relatedMovies.forEach(rel => {
                const relImg = 'https://image.tmdb.org/t/p/original/' + (rel.bgi || rel.im) + '.jpg';
                relatedHtml += `
                    <a class="movie-card" href="#" onclick="event.preventDefault(); navigateToPost('${rel.slug}');">
                        <div class="movie-thumbnail-container">
                            <img src="${relImg}" class="movie-thumbnail" loading="lazy" onerror="this.src='https://via.placeholder.com/342x192/1a1c24/ffffff?text=No+Image'">
                            <div class="sticker rating-sticker"><i class="fas fa-star" style="color:#ffd166"></i> ${rel.rating}</div>
                        </div>
                        <div class="movie-info">
                            <h3 class="movie-title">${rel.title}</h3>
                        </div>
                    </a>
                `;
            });
        }

        main.innerHTML = `
            <div class="movie-detail-container">
                <div class="top-buttons" style="justify-content:flex-start;">
<button class="top-btn" onclick="window.location.href='/'"><i class="fas fa-arrow-left"></i> Back</button>
                    <button class="top-btn" onclick='window.open("https://t.me/pptnxyz", "_blank")'><i class='fab fa-telegram'></i> Telegram</button>
                </div>
                <div class="movie-detail-card">
                    ${mediaHtml}
                    <div class="movie-detail-info">
                        <h1 class="movie-detail-title">${movie.title}</h1>
                        <div class="movie-detail-meta">
                            <span><i class="fas fa-star" style="color:#ffd166"></i> ${movie.rating}</span>
                            <span><i class="fas fa-calendar"></i> ${movie.year}</span>
                            <span><i class="fas fa-clock"></i> ${movie.duration}</span>
                            <span><i class="fas fa-film"></i> ${movie.type === 'movie' ? 'Movie' : 'Series'}</span>
                        </div>
                        <div class="cast-genre" style="margin:10px 0;">
                            ${genreHtml} ${castHtml}
                        </div>
                        <p class="movie-detail-description">${movie.description}</p>
                        
                        <!-- DOWNLOAD LINKS - Centered section -->
                        <div class="download-section">
                            <h3 class="download-title">Download Links</h3>
                            <div class="detail-dl-grid" style="justify-content: center; margin-left: auto; margin-right: auto;">
                                ${buttonsHtml || '<p style="grid-column:1/-1; text-align:center;">No links available</p>'}
                            </div>
                        </div>

                        <!-- RELATED POSTS SECTION -->
                        ${relatedHtml ? `
                        <div class="related-posts">
                            <h3 class="related-title">You May Also Like</h3>
                            <div class="related-grid">
                                ${relatedHtml}
                            </div>
                        </div>
                        ` : ''}
                    </div>
                </div>
            </div>
        `;
        
        // Ensure page scrolls to top
        window.scrollTo(0, 0);
    }

    // ---------- UTILITIES ----------
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

    document.addEventListener('keydown', function(e) {
        if(e.key === 'Escape') {
            const bar = document.querySelector('.search-bar');
            if(bar.style.display === 'flex') {
                bar.style.display = 'none';
                document.querySelector('.header-content').style.display = 'flex';
            }
        }
    });

    function scrollToTop() {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
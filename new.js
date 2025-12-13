    const itemsPerPage = 20;
    let currentPage = 1;
    const naturalSort = new Intl.Collator(undefined, {numeric: true, sensitivity: 'base'}).compare;

    window.onload = function() {
        displayMovies();
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

    document.getElementById('searchInput').addEventListener('input', function() {
        currentPage = 1;
        displayMovies();
    });

    function displayMovies() {
        const term = document.getElementById('searchInput').value.toLowerCase();
        const cleanTerm = term.replace(/[^a-z0-9]/g, '');
        
        const filtered = movies.filter(m => {
            const t = (m.title + m.genre).toLowerCase().replace(/[^a-z0-9]/g, '');
            return t.includes(cleanTerm);
        });

        const list = document.getElementById('movieList');
        list.innerHTML = '';

        if(filtered.length === 0) {
            list.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:40px;color:#666">No results</div>';
            return;
        }

        const start = (currentPage - 1) * itemsPerPage;
        const pageItems = filtered.slice(start, start + itemsPerPage);

        pageItems.forEach(movie => {
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

            div.innerHTML = `
                <div class="movie-thumbnail-container">
                    <img src="https://image.tmdb.org/t/p/w342/${movie.im}.jpg" class="movie-thumbnail" loading="lazy">
                    <div class="sticker rating-sticker"><i class="fas fa-star" style="color:#ffd166"></i> ${movie.rating}</div>
                    <div class="sticker ${bClass}">${badge}</div>
                </div>
                <div class="movie-info">
                    <h3 class="movie-title">${movie.title}</h3>
                </div>
            `;
            list.appendChild(div);
        });
        
        // Update Pagination Text
        const total = Math.ceil(filtered.length / itemsPerPage) || 1;
        document.getElementById('pageInfo').innerText = currentPage + '/' + total;
        document.getElementById('prevBtn').disabled = currentPage === 1;
        document.getElementById('nextBtn').disabled = currentPage >= total;
    }

    function prevPage() { if(currentPage > 1) { currentPage--; displayMovies(); window.scrollTo(0,0); } }
    function nextPage() { currentPage++; displayMovies(); window.scrollTo(0,0); }
    function goHome() { window.location.href='/'; }

    // --- MODAL ---
    function openModal(movie) {
        const m = document.getElementById('movieModal');
        document.getElementById('modalTitle').innerText = movie.title;
        document.getElementById('modalPoster').src = `https://image.tmdb.org/t/p/w780/${movie.im}.jpg`;
        document.getElementById('modalRating').innerText = movie.rating;
        document.getElementById('modalYear').innerText = movie.year;
        document.getElementById('modalDuration').innerText = movie.duration;
        document.getElementById('modalDescription').innerText = movie.description;
        
        // Generate Buttons
        const grid = document.getElementById('dynamicButtons');
        grid.innerHTML = '';
        
        const skip = ['title','im','bgi','year','duration','rating','genre','description','type'];
        let links = [];
        
        for(let k in movie) {
            if(!skip.includes(k) && movie[k].startsWith('http')) {
                links.push({ key: k, url: movie[k] });
            }
        }
        
        // Sort
        if(movie.type === 'series') {
            links.sort((a,b) => naturalSort(a.key, b.key));
        } else {
            const order = {'480p':1, '720p':2, '1080p':3, '4k':4};
            links.sort((a,b) => (order[a.key]||99) - (order[b.key]||99));
        }
        
        links.forEach(l => {
            const btn = document.createElement('a');
            btn.className = 'dl-btn';
            if(l.key.includes('1080p')) btn.classList.add('q-1080p');
            if(l.key.includes('720p')) btn.classList.add('q-720p');
            
            btn.href = 'https://dereferer.me/?' + l.url;
            btn.target = '_blank';
            
            let icon = 'fa-download';
            if(l.key.includes('S') && l.key.includes('E')) icon = 'fa-play';
            
            btn.innerHTML = `<i class="fas ${icon}"></i> ${l.key}`;
            grid.appendChild(btn);
        });

        m.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Lock background scroll
    }

    function closeModal() {
        document.getElementById('movieModal').style.display = 'none';
        document.body.style.overflow = 'auto'; // Unlock background scroll
    }
    
    // Close on clicking outside
    window.onclick = function(e) {
        if(e.target == document.getElementById('movieModal')) closeModal();
    }
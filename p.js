const itemsPerPage = 12;
let currentPage = 1;
let currentSearch = '';
let jwPlayerInstance = null;

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
$(document).ready(function() {
    const { search, page } = getUrlParams();
    currentSearch = cleanSearchString(search);
    currentPage = page;
    
    if (search) {
        $('#searchInput').val(search);
        toggleSearch(false);
    }
    
    displayMovies();
    updatePagination();
    
    // Check if JW Player loaded correctly
    if (typeof jwplayer === 'undefined') {
        console.error('JW Player failed to load');
        Swal.fire('Error', 'Video player failed to load. Please refresh the page.', 'error');
    }
});

// Toggle search bar
function toggleSearch(show = null) {
    const headerContent = $('.header-content');
    const searchBar = $('.search-bar');
    
    if (show === false || (show === null && searchBar.css('display') === 'flex')) {
        searchBar.hide();
        headerContent.show();
        currentSearch = '';
        $('#searchInput').val('');
        updateUrlParams();
        displayMovies();
    } else {
        headerContent.hide();
        searchBar.show();
        $('#searchInput').trigger('focus');
    }
}

// Search functionality
$('#searchInput').on('input', function() {
    currentSearch = cleanSearchString($(this).val());
    currentPage = 1;
    updateUrlParams();
    displayMovies();
    updatePagination();
});

// Movie display function
function displayMovies() {
    const $list = $('#movieList').empty();

    const filteredMovies = movies.filter(movie => 
        cleanSearchString(movie.title).includes(currentSearch) || 
        cleanSearchString(movie.link).includes(currentSearch)
    ).slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    if (filteredMovies.length === 0) {
        $list.append('<p style="grid-column: 1 / -1; text-align: center;">No movies found</p>');
        return;
    }

    filteredMovies.forEach(movie => {
        $list.append(`
            <div class="movie-card" onclick="openModal(${JSON.stringify(movie).replace(/"/g, '&quot;')})">
                <div class="movie-thumbnail-container">
                    <img src="https://image.tmdb.org/t/p/w342/${movie.im}.jpg" 
                         class="movie-thumbnail" 
                         alt="${movie.title}" 
                         loading="lazy">
                </div>
                <div class="movie-info">
                    <div class="movie-title">${movie.title}</div>
                </div>
            </div>
        `);
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
    
    $('.page-info').text(pageInfo);
    $('.prev-btn').prop('disabled', currentPage === 1);
    $('.next-btn').prop('disabled', currentPage === totalPages || totalPages === 0);
}

// JW Player Modal Functions
function openModal(movie) {
    const hideMedia = movie.title.toLowerCase().includes('hevc') || 
                     movie.title.toLowerCase().includes('all episodes');
    
    const modalImage = movie.bgi || movie.im;
    
    $('#modalPoster').html(`<img src="https://image.tmdb.org/t/p/w500/${modalImage}.jpg" alt="${movie.title}">`).show();
    
    // Destroy previous player instance
    if (jwPlayerInstance) {
        jwPlayerInstance.remove();
        jwPlayerInstance = null;
    }
    
    $('#videoContainer').empty();
    
    if (!hideMedia && movie.dl) {
        try {
            $('#videoContainer').html('<div id="jwplayer-container"></div>');
            
            jwPlayerInstance = jwplayer("jwplayer-container").setup({
                file: movie.dl,
                image: `https://image.tmdb.org/t/p/w780/${modalImage}.jpg`,
                width: '100%',
                height: '100%',
                aspectratio: '16:9',
                autostart: false,
                controls: true,
                displaytitle: false,
                stretching: 'uniform',
                primary: 'html5',
                playbackRateControls: true,
                abouttext: 'Video Player',
                aboutlink: 'https://example.com'
            });
            
            jwPlayerInstance.on('error', function(e) {
                console.error('JW Player Error:', e);
                Swal.fire('Playback Error', 'Could not load the video. Please try another movie.', 'error');
                $('#modalPoster').show();
            });
            
            jwPlayerInstance.on('ready', function() {
                $('#modalPoster').hide();
            });
            
        } catch(e) {
            console.error('JW Player Init Error:', e);
            Swal.fire('Player Error', 'Failed to initialize video player.', 'error');
            $('#modalPoster').show();
        }
    }
    
    $('#modalTitle').text(movie.title);
    $('#modalDownload').attr('href', 'https://dereferer.me/?' + encodeURIComponent(movie.dl));
    $('#modalInfo').attr('href', 'https://www.imdb.com/title/' + movie.link);
    $('#movieModal').show();
    $('body').css('overflow', 'hidden');
}

function closeModal() {
    if (jwPlayerInstance) {
        jwPlayerInstance.remove();
        jwPlayerInstance = null;
    }
    $('#movieModal').hide();
    $('body').css('overflow', 'auto');
}

// Close modal when clicking outside
$(document).on('click', '#movieModal', function(e) {
    if (e.target === this) {
        closeModal();
    }
});

function goHome() {
    window.location.href = '/';
}
// Function to update SEO meta tags
function updateMetaTags(movie = null) {
    // Default site metadata
    const defaultTitle = "Movie Database"; // Replace with your site's default title
    const defaultDescription = "Explore a vast collection of movies and TV series."; // Replace with your site's default description
    const defaultImage = "https://your-site.com/default-image.jpg"; // Replace with your site's default image
    const siteUrl = window.location.href;

    // Select or create meta tags
    let titleTag = document.querySelector('title');
    let metaDesc = document.querySelector('meta[name="description"]');
    let ogTitle = document.querySelector('meta[property="og:title"]');
    let ogDesc = document.querySelector('meta[property="og:description"]');
    let ogImage = document.querySelector('meta[property="og:image"]');
    let ogUrl = document.querySelector('meta[property="og:url"]');
    let twitterTitle = document.querySelector('meta[name="twitter:title"]');
    let twitterDesc = document.querySelector('meta[name="twitter:description"]');
    let twitterImage = document.querySelector('meta[name="twitter:image"]');

    // Create meta tags if they don't exist
    if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.name = 'description';
        document.head.appendChild(metaDesc);
    }
    if (!ogTitle) {
        ogTitle = document.createElement('meta');
        ogTitle.setAttribute('property', 'og:title');
        document.head.appendChild(ogTitle);
    }
    if (!ogDesc) {
        ogDesc = document.createElement('meta');
        ogDesc.setAttribute('property', 'og:description');
        document.head.appendChild(ogDesc);
    }
    if (!ogImage) {
        ogImage = document.createElement('meta');
        ogImage.setAttribute('property', 'og:image');
        document.head.appendChild(ogImage);
    }
    if (!ogUrl) {
        ogUrl = document.createElement('meta');
        ogUrl.setAttribute('property', 'og:url');
        document.head.appendChild(ogUrl);
    }
    if (!twitterTitle) {
        twitterTitle = document.createElement('meta');
        twitterTitle.name = 'twitter:title';
        document.head.appendChild(twitterTitle);
    }
    if (!twitterDesc) {
        twitterDesc = document.createElement('meta');
        twitterDesc.name = 'twitter:description';
        document.head.appendChild(twitterDesc);
    }
    if (!twitterImage) {
        twitterImage = document.createElement('meta');
        twitterImage.name = 'twitter:image';
        document.head.appendChild(twitterImage);
    }

    if (movie) {
        // Movie-specific metadata
        const movieTitle = movie.title || defaultTitle;
        const movieDescription = movie.description || defaultDescription;
        const movieImage = movie.bgi || movie.im;
        const imageUrl = movieImage ? `https://image.tmdb.org/t/p/w1200/${movieImage}.jpg` : defaultImage;

        titleTag.textContent = `${movieTitle} - Movie Database`;
        metaDesc.content = movieDescription;
        ogTitle.content = movieTitle;
        ogDesc.content = movieDescription;
        ogImage.content = imageUrl;
        ogUrl.content = siteUrl;
        twitterTitle.content = movieTitle;
        twitterDesc.content = movieDescription;
        twitterImage.content = imageUrl;
    } else {
        // Reset to default metadata
        titleTag.textContent = defaultTitle;
        metaDesc.content = defaultDescription;
        ogTitle.content = defaultTitle;
        ogDesc.content = defaultDescription;
        ogImage.content = defaultImage;
        ogUrl.content = siteUrl;
        twitterTitle.content = defaultTitle;
        twitterDesc.content = defaultDescription;
        twitterImage.content = defaultImage;
    }
}

// Modified openModal function
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
    
    // Update SEO meta tags
    updateMetaTags(movie);
    
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

// Modified closeModal function
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
    
    // Reset meta tags to default
    updateMetaTags();
    
    // Remove post ID from URL when closing modal
    const searchTerm = document.getElementById('searchInput').value;
    updateUrl(searchTerm, currentPage);
}
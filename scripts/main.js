// Handle loading page click
document.addEventListener('DOMContentLoaded', function() {
    const loadingPage = document.getElementById('loading-page');
    if (loadingPage) {
        loadingPage.addEventListener('click', function() {
            loadingPage.style.display = 'none';
            const profilePage = document.getElementById('profile-page');
            if (profilePage) {
                profilePage.style.display = 'flex';
            }
        });
    }
});

// Global function to play videos
function playVideo(videoId) {
    if (videoId && videoId !== 'EXAMPLE_ID_1') { // Skip example IDs
        window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
    } else {
        alert('This is an example video. Replace with actual YouTube ID in config.js');
    }
}

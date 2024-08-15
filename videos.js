document.addEventListener('DOMContentLoaded', () => {
    fetch('https://randomtube.xyz/b/', { mode: 'no-cors' })
        .then(response => {
            // Since the response is opaque, you can't access the response data directly
            const videoContainer = document.getElementById('video-container');
            const videoEmbed = document.createElement('iframe');
            videoEmbed.src = 'https://randomtube.xyz/b/';
            videoEmbed.width = "560";
            videoEmbed.height = "560";
            videoEmbed.frameborder = "0";
            videoEmbed.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
            videoEmbed.allowFullscreen = true;
            videoContainer.appendChild(videoEmbed);
        })
        .catch(error => {
            console.error('Error fetching video:', error);
            displayErrorMessage();
        });

    function displayErrorMessage() {
        const videoContainer = document.getElementById('video-container');
        const errorMessage = document.createElement('p');
        errorMessage.textContent = 'Error loading video. Please try again later.';
        videoContainer.appendChild(errorMessage);
    }
});

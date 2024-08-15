document.addEventListener('DOMContentLoaded', () => {
    fetch('https://randomtube.xyz/b/')
        .then(response => response.json())
        .then(data => {
            if (data && data.url) {
                const videoUrl = data.url;

                // Directly embedding the video as it comes from /b/
                const videoContainer = document.getElementById('video-container');
                const videoEmbed = document.createElement('iframe');
                videoEmbed.src = videoUrl;
                videoEmbed.width = "560";
                videoEmbed.height = "315";
                videoEmbed.frameborder = "0";
                videoEmbed.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
                videoEmbed.allowFullscreen = true;
                videoContainer.appendChild(videoEmbed);
            } else {
                displayNoVideoMessage();
            }
        })
        .catch(error => {
            console.error('Error fetching video:', error);
            displayErrorMessage();
        });

    function displayNoVideoMessage() {
        const videoContainer = document.getElementById('video-container');
        const noVideoMessage = document.createElement('p');
        noVideoMessage.textContent = 'No suitable video found.';
        videoContainer.appendChild(noVideoMessage);
    }

    function displayErrorMessage() {
        const videoContainer = document.getElementById('video-container');
        const errorMessage = document.createElement('p');
        errorMessage.textContent = 'Error loading video. Please try again later.';
        videoContainer.appendChild(errorMessage);
    }
});

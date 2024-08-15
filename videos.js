document.addEventListener('DOMContentLoaded', () => {
    fetch('https://randomtube.xyz')
        .then(response => response.json())
        .then(data => {
            if (data && data.video) {
                const videoUrl = data.video.url;

                // Check if the URL contains "/sex/"
                if (!videoUrl.includes('/sex/')) {
                    const videoContainer = document.getElementById('video-container');
                    const videoEmbed = document.createElement('iframe');
                    videoEmbed.src = videoUrl;
                    videoEmbed.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
                    videoContainer.appendChild(videoEmbed);
                } else {
                    displayNoVideoMessage();
                }
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

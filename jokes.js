document.addEventListener('DOMContentLoaded', () => {
    fetch('https://official-joke-api.appspot.com/random_joke')
        .then(response => response.json())
        .then(data => {
            const jokeContainer = document.getElementById('joke-container');
            const setup = document.createElement('p');
            const punchline = document.createElement('p');
            setup.textContent = data.setup;
            punchline.textContent = data.punchline;
            jokeContainer.appendChild(setup);
            jokeContainer.appendChild(punchline);
        })
        .catch(error => {
            console.error('Error fetching joke:', error);
        });
});

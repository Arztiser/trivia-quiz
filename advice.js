document.addEventListener('DOMContentLoaded', () => {
    fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(data => {
            const factContainer = document.getElementById('advice-container');
            const fact = document.createElement('p');
            advice.textContent = data.text;
            adviceContainer.appendChild(advice);
        })
        .catch(error => {
            console.error('Error fetching fact:', error);
        });
});

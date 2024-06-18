document.addEventListener('DOMContentLoaded', () => {
    fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => {
            const quoteContainer = document.getElementById('quote-container');
            const quote = document.createElement('p');
            quote.textContent = `${data.content} — ${data.author}`;
            quoteContainer.appendChild(quote);
        })
        .catch(error => {
            console.error('Error fetching quote:', error);
        });
});

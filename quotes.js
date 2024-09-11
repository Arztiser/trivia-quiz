document.addEventListener('DOMContentLoaded', () => {
    fetch('https://favqs.com/api/qotd')
        .then(response => response.json())
        .then(data => {
            const quoteContainer = document.getElementById('quote-container');
            const quote = document.createElement('p');
            const quoteText = `${data.quote.body} — ${data.quote.author}`;
            quote.textContent = quoteText;
            quoteContainer.appendChild(quote);
        })
        .catch(error => {
            console.error('Error fetching quote:', error);
        });
});

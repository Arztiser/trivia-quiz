document.addEventListener('DOMContentLoaded', () => {
    fetch('https://zenquotes.io/api/random')
        .then(response => response.json())
        .then(data => {
            const quoteContainer = document.getElementById('quote-container');
            const quote = document.createElement('p');
            // ZenQuotes returns an array with the first object containing the quote
            const quoteText = `${data[0].q} — ${data[0].a}`;
            quote.textContent = quoteText;
            quoteContainer.appendChild(quote);
        })
        .catch(error => {
            console.error('Error fetching quote:', error);
        });
});

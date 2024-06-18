document.addEventListener('DOMContentLoaded', () => {
    fetch('https://csrng.net/csrng/csrng.php?min=1&max=100')
        .then(response => response.json())
        .then(data => {
            const numberContainer = document.getElementById('number-container');
            const number = document.createElement('p');
            number.textContent = `Random Number: ${data[0].random}`;
            numberContainer.appendChild(number);
        })
        .catch(error => {
            console.error('Error fetching number:', error);
        });
});

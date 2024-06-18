document.addEventListener('DOMContentLoaded', () => {
    fetch('https://www.random.org/integers/?num=1&min=1&max=1000000000&col=1&base=10&format=plain&rnd=new')
        .then(response => response.text())
        .then(data => {
            const numberContainer = document.getElementById('number-container');
            numberContainer.textContent = `Random Number: ${data.trim()}`;
        })
        .catch(error => {
            console.error('Error fetching number:', error);
        });
});

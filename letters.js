document.addEventListener('DOMContentLoaded', () => {
    function getRandomLetter() {
        const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        return alphabet[Math.floor(Math.random() * alphabet.length)];
    }

    const letterContainer = document.getElementById('letter-container');
    const letter = document.createElement('p');
    letter.textContent = `Random Letter: ${getRandomLetter()}`;
    letterContainer.appendChild(letter);
});

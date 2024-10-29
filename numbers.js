document.addEventListener('DOMContentLoaded', () => {
    // Function to generate a random number between 1 and a specified max limit
    const generateRandomNumber = () => {
        const maxNumber = 1000000; // You can adjust the max number here
        return Math.floor(Math.random() * maxNumber) + 1;
    };

    // Display the random number in the container
    const numberContainer = document.querySelector('.content p');
    numberContainer.textContent = `Random Number: ${generateRandomNumber()}`;

    // Optional: You can set up a button to generate a new random number on click
    const generateButton = document.getElementById('generate-button');
    if (generateButton) {
        generateButton.addEventListener('click', () => {
            numberContainer.textContent = `Random Number: ${generateRandomNumber()}`;
        });
    }
});

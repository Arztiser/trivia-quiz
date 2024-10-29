document.addEventListener('DOMContentLoaded', () => {
    // Function to generate a random number between 1 and a specified max limit
    const generateRandomNumber = () => {
        const maxNumber = 1000000; // Set the max limit here (e.g., one million)
        return Math.floor(Math.random() * maxNumber) + 1;
    };

    // Display the random number in the specified container on page load
    const numberContainer = document.getElementById('number-container');
    numberContainer.textContent = `Random Number: ${generateRandomNumber()}`;
});


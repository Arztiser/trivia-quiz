document.addEventListener('DOMContentLoaded', () => {
    // Function to get a random word from an array
    function getRandomWord(words) {
        const randomIndex = Math.floor(Math.random() * words.length);
        return words[randomIndex];
    }

    // Predefined array of words
    const words = ["Red", "Orange", "Yellow", "Green", "Blue", "Purple", "Magenta", "Pink", "White", "Black", "Brown", "Gray", "Silver", "Gold", "Maroon", "Teal", "Cyan", "Violet", "Bronze", ];

    // Fetch random user data
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            const person = data.results[0];
            const personContainer = document.getElementById('person-container');

            const fullName = `${person.name.first} ${person.name.last}`;
            const address = `${person.location.street.number} ${person.location.street.name}`;
            const city = person.location.city;
            const state = person.location.state;
            const country = person.location.country;
            const postcode = person.location.postcode;
            const email = person.email;
            const phone = person.phone;
            const dob = new Date(person.dob.date).toLocaleDateString();
            const randomWord = getRandomWord(words);

            // Update the inner HTML of the person container
            personContainer.innerHTML = `
                <p><strong>Name:</strong> ${fullName}</p>
                <p><strong>Address:</strong> ${address}, ${city}, ${state}, ${postcode}</p>
                <p><strong>Country:</strong> ${country}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Date of Birth:</strong> ${dob}</p>
                <p><strong>Color:</strong> ${randomWord}</p>
            `;
        })
        .catch(error => {
            console.error('Error fetching person data:', error);
        });
});

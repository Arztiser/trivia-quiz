document.addEventListener('DOMContentLoaded', () => {
    // Function to get a random item from an array
    function getRandomItem(array) {
        const randomIndex = Math.floor(Math.random() * array.length);
        return array[randomIndex];
    }

    // Predefined arrays for favorites
    const colors = ["Red", "Orange", "Yellow", "Green", "Blue", "Purple", "Magenta", "Pink", "White", "Black", "Brown", "Gray", "Silver", "Gold", "Maroon", "Teal", "Cyan", "Violet", "Bronze"];
    const animals = ["Dog", "Cat", "Elephant", "Lion", "Tiger", "Dolphin", "Eagle", "Kangaroo", "Panda", "Giraffe", "Zebra", "Rabbit", "Horse", "Penguin", "Bear"];

    // Fetch random user data
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            const person = data.results[0];

            // Personal Details
            const fullName = `${person.name.first} ${person.name.last}`;
            const address = `${person.location.street.number} ${person.location.street.name}, ${person.location.city}, ${person.location.state}, ${person.location.postcode}`;
            const country = person.location.country;
            const email = person.email;
            const phone = person.phone;
            const dob = new Date(person.dob.date).toLocaleDateString();

            // Favorites
            const favoriteColor = getRandomItem(colors);
            const favoriteAnimal = getRandomItem(animals);

            // Populate Personal Details Card
            const personalDetailsContainer = document.getElementById('personal-details');
            personalDetailsContainer.innerHTML += `
                <p><strong>Name:</strong> ${fullName}</p>
                <p><strong>Address:</strong> ${address}</p>
                <p><strong>Country:</strong> ${country}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Date of Birth:</strong> ${dob}</p>
            `;

            // Populate Favorites Card
            const favoritesContainer = document.getElementById('favorites');
            favoritesContainer.innerHTML += `
                <p><strong>Favorite Color:</strong> ${favoriteColor}</p>
                <p><strong>Favorite Animal:</strong> ${favoriteAnimal}</p>
            `;
        })
        .catch(error => {
            console.error('Error fetching person data:', error);
        });
});

document.addEventListener('DOMContentLoaded', () => {
    // Function to get a random item from an array
    function getRandomItem(array) {
        const randomIndex = Math.floor(Math.random() * array.length);
        return array[randomIndex];
    }

    // Predefined arrays for favorites
    const colors = ["Red", "Orange", "Yellow", "Green", "Blue", "Purple", "Magenta", "Pink", "White", "Black", "Brown", "Gray", "Silver", "Gold", "Maroon", "Teal", "Cyan", "Violet", "Bronze"];
    const foods = ["Pizza", "Burger", "Sushi", "Pasta", "Salad", "Ice Cream", "Chocolate", "Steak", "Tacos", "Fried Chicken"];
    const hobbies = ["Reading", "Hiking", "Gaming", "Cooking", "Traveling", "Fishing", "Drawing", "Photography", "Swimming", "Cycling"];

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

            // Get random favorites
            const favoriteColor = getRandomItem(colors);
            const favoriteFood = getRandomItem(foods);
            const favoriteHobby = getRandomItem(hobbies);

            // Update the inner HTML of the person container
            personContainer.innerHTML = `
                <p><strong>Name:</strong> ${fullName}</p>
                <p><strong>Address:</strong> ${address}, ${city}, ${state}, ${postcode}</p>
                <p><strong>Country:</strong> ${country}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Date of Birth:</strong> ${dob}</p>
            `;

            // Update the inner HTML of the favorites container
            const favoritesContainer = document.getElementById('favorites-container');
            favoritesContainer.innerHTML = `
                <p><strong>Favorite Color:</strong> ${favoriteColor}</p>
                <p><strong>Favorite Food:</strong> ${favoriteFood}</p>
                <p><strong>Favorite Hobby:</strong> ${favoriteHobby}</p>
            `;
        })
        .catch(error => {
            console.error('Error fetching person data:', error);
        });
});

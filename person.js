document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');
    function getRandomItem(array) {
        const randomIndex = Math.floor(Math.random() * array.length);
        return array[randomIndex];
    }

    const colors = ["Red", "Orange", "Yellow", "Green", "Blue", "Purple", "Magenta", "Pink", "White", "Black", "Brown", "Gray", "Silver", "Gold", "Maroon", "Teal", "Cyan", "Violet", "Bronze"];
    const foods = ["Pizza", "Burger", "Sushi", "Pasta", "Salad", "Ice Cream", "Chocolate", "Steak", "Tacos", "Fried Chicken"];
    const hobbies = ["Reading", "Hiking", "Gaming", "Cooking", "Traveling", "Fishing", "Drawing", "Photography", "Swimming", "Cycling"];

    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            console.log('Data fetched:', data);
            const person = data.results[0];
            const personContainer = document.getElementById('person-container');
            const favoritesContainer = document.getElementById('favorites-container');

            const fullName = `${person.name.first} ${person.name.last}`;
            const address = `${person.location.street.number} ${person.location.street.name}`;
            const city = person.location.city;
            const state = person.location.state;
            const country = person.location.country;
            const postcode = person.location.postcode;
            const email = person.email;
            const phone = person.phone;
            const dob = new Date(person.dob.date).toLocaleDateString();

            const favoriteColor = getRandomItem(colors);
            const favoriteFood = getRandomItem(foods);
            const favoriteHobby = getRandomItem(hobbies);

            console.log('Updating person container with:', { fullName, address, city, state, country, postcode, email, phone, dob });
            personContainer.innerHTML = `
                <h1>Random Person</h1>
                <p><strong>Name:</strong> ${fullName}</p>
                <p><strong>Address:</strong> ${address}, ${city}, ${state}, ${postcode}</p>
                <p><strong>Country:</strong> ${country}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Date of Birth:</strong> ${dob}</p>
            `;

            console.log('Updating favorites container with:', { favoriteColor, favoriteFood, favoriteHobby });
            favoritesContainer.innerHTML = `
                <h2>Favorites</h2>
                <p><strong>Favorite Color:</strong> ${favoriteColor}</p>
                <p><strong>Favorite Food:</strong> ${favoriteFood}</p>
                <p><strong>Favorite Hobby:</strong> ${favoriteHobby}</p>
            `;
        })
        .catch(error => {
            console.error('Error fetching person data:', error);
        });
});

document.addEventListener('DOMContentLoaded', () => {
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            const person = data.results[0];

            // Extract person details
            const fullName = `${person.name.first} ${person.name.last}`;
            const address = `${person.location.street.number} ${person.location.street.name}`;
            const city = person.location.city;
            const state = person.location.state;
            const country = person.location.country;
            const postcode = person.location.postcode;
            const email = person.email;
            const phone = person.phone;
            const dob = new Date(person.dob.date).toLocaleDateString();

            // Generate random favorites
            const colors = ["Red", "Orange", "Yellow", "Green", "Blue", "Purple", "Magenta", "Pink", "White", "Black", "Brown", "Gray", "Silver", "Gold", "Maroon", "Teal", "Cyan", "Violet", "Bronze"];
            const foods = ["Pizza", "Burger", "Sushi", "Pasta", "Salad", "Ice Cream", "Chocolate", "Steak", "Tacos", "Fried Chicken"];
            const hobbies = ["Reading", "Hiking", "Gaming", "Cooking", "Traveling", "Fishing", "Drawing", "Photography", "Swimming", "Cycling"];

            const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

            const favoriteColor = getRandomItem(colors);
            const favoriteFood = getRandomItem(foods);
            const favoriteHobby = getRandomItem(hobbies);

            // Populate person details
            const personDetailsGrid = document.querySelector('#person-container .details-grid');
            if (personDetailsGrid) {
                personDetailsGrid.innerHTML = `
                    <p class="label">Name:</p><p>${fullName}</p>
                    <p class="label">Address:</p><p>${address}</p>
                    <p class="label">City:</p><p>${city}</p>
                    <p class="label">State:</p><p>${state}</p>
                    <p class="label">Country:</p><p>${country}</p>
                    <p class="label">Postcode:</p><p>${postcode}</p>
                    <p class="label">Email:</p><p>${email}</p>
                    <p class="label">Phone:</p><p>${phone}</p>
                    <p class="label">Date of Birth:</p><p>${dob}</p>
                `;
            }

            // Populate favorites
            const favoritesDetailsGrid = document.querySelector('#favorites-container .details-grid');
            if (favoritesDetailsGrid) {
                favoritesDetailsGrid.innerHTML = `
                    <p class="label">Favorite Color:</p><p>${favoriteColor}</p>
                    <p class="label">Favorite Food:</p><p>${favoriteFood}</p>
                    <p class="label">Favorite Hobby:</p><p>${favoriteHobby}</p>
                `;
            }
        })
        .catch(error => {
            console.error('Error fetching person data:', error);
        });
});

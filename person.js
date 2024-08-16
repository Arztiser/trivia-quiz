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
      personDetailsGrid.innerHTML = `
        <p><strong>Name:</strong></p><p>${fullName}</p><br>
        <p><strong>Address:</strong></p><p>${address}</p><br>
        <p><strong>City:</strong></p><p>${city}</p><br>
        <p><strong>State:</strong></p><p>${state}</p><br>
        <p><strong>Country:</strong></p><p>${country}</p><br>
        <p><strong>Postcode:</strong></p><p>${postcode}</p><br>
        <p><strong>Email:</strong></p><p>${email}</p><br>
        <p><strong>Phone:</strong></p><p>${phone}</p><br>
        <p><strong>Date of Birth:</strong></p><p>${dob}</p><br>
      `;

      // Populate favorites
      const favoritesDetailsGrid = document.querySelector('#favorites-container .details-grid');
      favoritesDetailsGrid.innerHTML = `
        <p><strong>Favorite Color:</strong></p><p>${favoriteColor}</p><br>
        <p><strong>Favorite Food:</strong></p><p>${favoriteFood}</p><br>
        <p><strong>Favorite Hobby:</strong></p><p>${favoriteHobby}</p><br>
      `;
    })
    .catch(error => {
      console.error('Error fetching person data:', error);
    });
});
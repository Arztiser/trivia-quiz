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
      const foods = ["Pizza", "Burger", "Sushi", "Pasta", "Salad", "Ice Cream", "Chocolate", "Steak", "Tacos", "Fried Chicken", "Caviar", "Sub Sandwich", "Fish", "Chips", "Cereal", "Porkchop", "Crackers", "Cookies", "Biscuits", "Bacon", "Ham", "Chicken Nuggets", "Scrambled Eggs", "Apple", "Banana", "Peach", "Grapes", "Orange", "Durian", "Kiwi", "Cherries", "Strawberries", "Watermelon", "Popcorn", "Grilled Cheese", "Cantaloupe", "Hot Dog", "Rice"];
      const hobbies = ["Reading", "Hiking", "Gaming", "Cooking", "Traveling", "Fishing", "Drawing", "Photography", "Swimming", "Cycling", "Writing", "Painting", "Archery", "Woodworking", "Baking", "Boxing", "Programming", "Dancing", "Gardening", "Knitting", "Sculpting", "Singing", "Surfing", "Yoga", "Wrestling", "Parkour", "Hunting", "Sailing", "Running", "Kayaking", "Mountain Biking", "Bowling", "Fencing", "Handball", "Golfing", "Football", "Soccer", "Tennis", "Volleyball", "Paintball", "Badminton", "Geocaching"];

      const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

      const favoriteColor = getRandomItem(colors);
      const favoriteFood = getRandomItem(foods);
      const favoriteHobby = getRandomItem(hobbies);

      // Populate person details
      const personDetailsGrid = document.querySelector('#person-container .details-grid');
      personDetailsGrid.innerHTML = `
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>City:</strong> ${city}</p>
        <p><strong>State:</strong> ${state}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Postcode:</strong> ${postcode}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Date of Birth:</strong> ${dob}</p>
      `;

      // Function to pad the text
      const padText = (text, length) => text.padEnd(length, ' ');

      // Populate favorites
      const favoritesDetailsGrid = document.querySelector('#favorites-container .details-grid');
      favoritesDetailsGrid.innerHTML = `
        <p><strong>${padText('Color:', 10)}</strong> ${favoriteColor}</p>
        <p><strong>${padText('Food:', 10)}</strong> ${favoriteFood}</p>
        <p><strong>${padText('Hobby:', 10)}</strong> ${favoriteHobby}</p>
      `;
    })
    .catch(error => {
      console.error('Error fetching person data:', error);
    });
});

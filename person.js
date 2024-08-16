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
      const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      const foods = ["Pizza", "Burger", "Sushi", "Pasta", "Salad", "Ice Cream", "Chocolate", "Steak", "Tacos", "Fried Chicken", "Caviar", "Sub Sandwich", "Fish", "Chips", "Cereal", "Porkchop", "Crackers", "Cookies", "Biscuits", "Bacon", "Ham", "Chicken Nuggets", "Scrambled Eggs", "Apple", "Banana", "Peach", "Grapes", "Orange", "Durian", "Kiwi", "Cherries", "Strawberries", "Watermelon", "Popcorn", "Grilled Cheese", "Cantaloupe", "Hot Dog", "Rice"];
      const hobbies = ["Reading", "Hiking", "Gaming", "Cooking", "Traveling", "Fishing", "Drawing", "Photography", "Swimming", "Cycling", "Writing", "Painting", "Archery", "Woodworking", "Baking", "Boxing", "Programming", "Dancing", "Gardening", "Knitting", "Sculpting", "Singing", "Surfing", "Yoga", "Wrestling", "Parkour", "Hunting", "Sailing", "Running", "Kayaking", "Mountain Biking", "Bowling", "Fencing", "Handball", "Golfing", "Football", "Soccer", "Tennis", "Volleyball", "Paintball", "Badminton", "Geocaching"];
      const holidays = ["Christmas", "Easter", "Halloween", "New Years", "Thanksgiving"];
      const music = ["Pop", "Rock", "Rock & Roll", "Metal", "Country", "Classical", "Hip-Hop", "Rap", "R & B", "Gospel", "Indie", "Electronic", "Alternative", "Disco"];
      const seasons = ["Summer", "Autumn", "Winter", "Spring"];

      const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

      const favoriteColor = getRandomItem(colors);
      const favoriteDay = getRandomItem(days);
      const favoriteFood = getRandomItem(foods);
      const favoriteHobby = getRandomItem(hobbies);
      const favoriteHoliday = getRandomItem(holidays);
      const favoriteMusic = getRandomItem(music);
      const favoriteSeason = getRandomItem(seasons);

      // Inline styles for person details
      const style = "display: inline-block; margin-right: 15px; font-family: Arial, sans-serif; font-size: 14px;";
      const sectionTitleStyle = "font-weight: bold; font-size: 16px;";

      // Populate person details
      const personDetailsGrid = document.querySelector('#person-container .details-grid');
      personDetailsGrid.innerHTML = `
        <p style="${sectionTitleStyle}">Random People</p>
        <p style="margin: 5px 0;">
          <span style="${style}"><strong>Name:</strong> ${fullName}</span>
          <span style="${style}"><strong>Address:</strong> ${address}</span>
        </p>
        <p style="margin: 5px 0;">
          <span style="${style}"><strong>City:</strong> ${city}</span>
          <span style="${style}"><strong>State:</strong> ${state}</span>
          <span style="${style}"><strong>Country:</strong> ${country}</span>
          <span style="${style}"><strong>Postcode:</strong> ${postcode}</span>
        </p>
        <p style="margin: 5px 0;">
          <span style="${style}"><strong>Email:</strong> ${email}</span>
          <span style="${style}"><strong>Phone:</strong> ${phone}</span>
        </p>
        <p style="margin: 5px 0;">
          <span style="${style}"><strong>Date of Birth:</strong> ${dob}</span>
        </p>
      `;

      // Populate favorites in rows of three
      const favoritesDetailsGrid = document.querySelector('#favorites-container .details-grid');
      favoritesDetailsGrid.innerHTML = `
        <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
          <span style="${style}"><strong>Color:</strong> ${favoriteColor}</span>
          <span style="${style}"><strong>Day:</strong> ${favoriteDay}</span>
          <span style="${style}"><strong>Food:</strong> ${favoriteFood}</span>
        </div>
        <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
          <span style="${style}"><strong>Hobby:</strong> ${favoriteHobby}</span>
          <span style="${style}"><strong>Holiday:</strong> ${favoriteHoliday}</span>
          <span style="${style}"><strong>Music:</strong> ${favoriteMusic}</span>
        </div>
        <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
          <span style="${style}"><strong>Season:</strong> ${favoriteSeason}</span>
        </div>
      `;
    })
    .catch(error => {
      console.error('Error fetching person data:', error);
    });
});

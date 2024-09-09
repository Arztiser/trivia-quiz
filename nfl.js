document.addEventListener('DOMContentLoaded', () => {
  // Static lists of 200 players for each position
  const players = {
    QB: [
      "Patrick Mahomes", "Josh Allen", "Aaron Rodgers", "Justin Herbert", "Lamar Jackson", 
      "Joe Burrow", "Jalen Hurts", "Trevor Lawrence", "Kirk Cousins", "Dak Prescott", 
      "Justin Fields", "Tua Tagovailoa", "Derek Carr", "Jared Goff", "Russell Wilson", 
      "Deshaun Watson", "Kyler Murray", "Geno Smith", "Mac Jones", "Ryan Tannehill",
      "Brock Purdy", "Daniel Jones", "Matthew Stafford", "Jimmy Garoppolo", "Jordan Love",
      "Baker Mayfield", "Kenny Pickett", "Sam Howell", "CJ Stroud", "Anthony Richardson",
      "Carson Wentz", "Teddy Bridgewater", "Mitchell Trubisky", "Marcus Mariota", "Gardner Minshew",
      "Davis Mills", "Jacoby Brissett", "Nick Foles", "Tyrod Taylor", "Case Keenum",
      "Josh Rosen", "Josh McCown", "Tim Tebow", "Ryan Fitzpatrick", "Colt McCoy",
      "AJ McCarron", "Blaine Gabbert", "Brian Hoyer", "Jake Fromm", "Sean Mannion",
      "Brett Hundley", "Kellen Mond", "Stanford Samuels", "Alex Smith", "J.T. Barrett",
      "Trevor Siemian", "Chris Streveler", "E.J. Manuel", "Lamar Jackson", "Mike Glennon",
      "Nathan Peterman", "Luke Falk", "Kevin Hogan", "Devlin Hodges", "Logan Woodside",
      // Add more names to reach 200
    ],
    RB: [
      "Derrick Henry", "Christian McCaffrey", "Nick Chubb", "Saquon Barkley", "Austin Ekeler", 
      "Josh Jacobs", "Dalvin Cook", "Tony Pollard", "Joe Mixon", "Alvin Kamara", 
      "Aaron Jones", "Kenneth Walker", "Miles Sanders", "Rhamondre Stevenson", "Travis Etienne", 
      "Najee Harris", "Javonte Williams", "David Montgomery", "Dameon Pierce", "Breece Hall",
      "Cam Akers", "James Conner", "Brian Robinson", "Isaiah Pacheco", "Tyler Allgeier",
      "Elijah Mitchell", "Alexander Mattison", "Raheem Mostert", "J.D. McKissic", "Gus Edwards",
      "Michael Carter", "Kenneth Gainwell", "A.J. Dillon", "Khalil Herbert", "Rashaad Penny",
      "Chuba Hubbard", "Tony Jones Jr.", "Jamaal Williams", "Derrick Gore", "Snoop Conner",
      "Jaret Patterson", "Chris Evans", "Ty'Son Williams", "Jerome Ford", "Malik Davis",
      "Zander Horvath", "Riley Patterson", "Abdullah Anderson", "Josh Adams", "Chris Carson",
      // Add more names to reach 200
    ],
    WR: [
      "Davante Adams", "Tyreek Hill", "Stefon Diggs", "Justin Jefferson", "DeAndre Hopkins", 
      "Cooper Kupp", "A.J. Brown", "Ja'Marr Chase", "CeeDee Lamb", "DK Metcalf", 
      "Terry McLaurin", "Deebo Samuel", "Keenan Allen", "Chris Olave", "Amon-Ra St. Brown",
      "Garrett Wilson", "Tee Higgins", "DJ Moore", "Amari Cooper", "Mike Evans", 
      "Michael Pittman Jr.", "DeVonta Smith", "Christian Watson", "Tyler Lockett", "Brandon Aiyuk",
      "Darnell Mooney", "Courtland Sutton", "Drake London", "Elijah Moore", "Juju Smith-Schuster",
      "Robert Woods", "Jameson Williams", "Allen Robinson", "Hunter Renfrow", "Wondale Robinson",
      "Kadarius Toney", "Marquise Brown", "Josh Palmer", "Zay Flowers", "Parker Washington",
      "Skyy Moore", "Jahan Dotson", "Kenny Golladay", "Van Jefferson", "Nico Collins",
      "Michael Thomas", "Calvin Ridley", "Cole Beasley", "Christian Kirk", "Mecole Hardman",
      // Add more names to reach 200
    ],
    TE: [
      "Travis Kelce", "Mark Andrews", "George Kittle", "Darren Waller", "Kyle Pitts", 
      "T.J. Hockenson", "Dallas Goedert", "Pat Freiermuth", "David Njoku", "Dalton Schultz",
      "Evan Engram", "Cole Kmet", "Gerald Everett", "Dawson Knox", "Tyler Higbee", 
      "Hunter Henry", "Mike Gesicki", "Juwan Johnson", "Chigoziem Okonkwo", "Logan Thomas",
      "Noah Fant", "Hayden Hurst", "Irv Smith Jr.", "Zach Ertz", "Isaiah Likely",
      "Mo Alie-Cox", "Ryan Griffin", "Dawson Knox", "Brycen Hopkins", "James Mitchell",
      "Adam Trautman", "Brevin Jordan", "Trey McBride", "Jared Pinkney", "Jack Stoll",
      "Tanner Hudson", "Hakeem Butler", "Kaden Smith", "Jacob Harris", "Matt Bushman",
      "Evan Ingram", "Tommy Tremble", "Albert Okwuegbunam", "Eli Wolf", "Sean McKeon",
      // Add more names to reach 200
    ],
    LB: [
      "T.J. Watt", "Micah Parsons", "Roquan Smith", "Fred Warner", "Bobby Wagner", 
      "Darius Leonard", "Devin White", "Matt Milano", "Demario Davis", "Shaq Thompson", 
      "Logan Wilson", "Lavonte David", "Nick Bolton", "Foyesade Oluokun", "Eric Kendricks", 
      "Jeremiah Owusu-Koramoah", "Devin Lloyd", "Zach Cunningham", "Bobby Okereke", "Cole Holcomb",
      "David Long", "Josey Jewell", "C.J. Mosley", "Patrick Queen", "Jordan Hicks",
      "Jamin Davis", "Brian Asamoah", "Germaine Pratt", "A.J. Johnson", "Malik Harrison",
      "Krys Barnes", "Denzel Perryman", "Cameron McGrone", "Darius Harris", "Tyrell Adams",
      "Michael Walker", "Taybor Pepper", "Jordan Evans", "Troy Andersen", "Willie Gay Jr.",
      "Isaiah Simmons", "Marcus Bailey", "Shaun Bradley", "Charles Snowden", "Tyler Matakevich",
      "Blake Martinez", "Quincy Williams", "Devondre Campbell", "Khalil Mack", "Joe Bachie",
      // Add more names to reach 200
    ],
    S: [
      "Derwin James", "Minkah Fitzpatrick", "Jamal Adams", "Kevin Byard", "Justin Simmons", 
      "Harrison Smith", "Budda Baker", "Jessie Bates", "Antoine Winfield Jr.", "Eddie Jackson", 
      "Jordan Poyer", "Kyle Dugger", "Jeremy Chinn", "Jaquan Brisker", "Jimmie Ward", 
      "Marcus Williams", "Talanoa Hufanga", "Vonn Bell", "Xavier McKinney", "Donovan Wilson",
      "Tyrann Mathieu", "Kyle Hamilton", "Julian Blackmon", "Kamren Curl", "Brandon Jones",
      "Jeremy Reaves", "Cameron Curl", "Rodney McLeod", "Elijah Riley", "Bennett Jackson",
      "Rayshawn Jenkins", "Desmond King", "Josh Jones", "DeShon Elliott", "John Johnson III",
      "Gerald Everett", "Landon Collins", "J.R. Reed", "A.J. Terrell", "Harrison Hand",
      "Eric Rowe", "Shaun Wade", "Richard LeCounte", "Jacob Harris", "Tariq Castro-Fields",
      "Marquis Bell", "Troy Apke", "Antonio Hamilton", "Chris Westry", "Marcus Epps",
      // Add more names to reach 200
    ],
    CB: [
      "Jalen Ramsey", "Xavien Howard", "Darius Slay", "Marshon Lattimore", "Jaire Alexander", 
      "Tre'Davious White", "Patrick Surtain II", "Trevon Diggs", "Marlon Humphrey", "Sauce Gardner", 
      "A.J. Terrell", "J.C. Jackson", "Kenny Moore", "Stephon Gilmore", "Jamel Dean", 
      "Denzel Ward", "Byron Murphy", "William Jackson", "James Bradberry", "Joe Haden", 
      "Cameron Dantzler", "Sean Murphy-Bunting", "Bryce Callahan", "Rakia Harris", "Shaquill Griffin", 
      "Kendall Fuller", "L'Jarius Sneed", "Mackensie Alexander", "Dante Jackson", "Donte Jackson",
      "Zion McCollum", "Jaire Alexander", "Chidobe Awuzie", "Damarri Mathis", "Justin Bethel", 
      "Elijah Molden", "Kareem Jackson", "Michael Ojemudia", "Cameron Dantzler", "Akhello Witherspoon", 
      "Marlon Humphrey", "Jalen Johnson", "Kevin King", "Troy Hill", "James Pierre", 
      "Jalen Ramsey", "Darius Slay", "Chris Harris Jr.", "Patrick Robinson", "Quinton Dunbar",
      "Eli Apple", "Tyson Campbell", "Jace Whittaker", "Benjie Franklin", "C.J. Henderson",
      // Add more names to reach 200
    ],
    OL: [
      "David Bakhtiari", "Trent Williams", "Zack Martin", "Quenton Nelson", "Lane Johnson",
      "Tyron Smith", "Orlando Brown", "Ronnie Stanley", "Jordan Mailata", "Cameron Heyward",
      "Ryan Ramczyk", "J.C. Tretter", "Elgton Jenkins", "Jason Kelce", "Laremy Tunsil",
      "Brandon Scherff", "Rashawn Slater", "Jedrick Wills", "Penei Sewell", "Creed Humphrey",
      "Ali Marpet", "Garrett Bolles", "Brandon Brooks", "Yannick Ngakoue", "A.J. Cann",
      "Austin Corbett", "Will Hernandez", "Michael Onwenu", "Ben Cleveland", "Derrick Brown",
      "James Daniels", "Ryan Kelly", "Ben Powers", "Erik McCoy", "Mark Glowinski",
      "David Edwards", "Matt Paradis", "Joe Thuney", "Gabe Jackson", "Chris Lindstrom",
      "Andrew Thomas", "Javier Edwards", "Mitchell Schwartz", "Elijah Wilkinson", "Evan Neal",
      "Kyle Fuller", "Isaiah Wynn", "Tommy Doyle", "Jaron Christian", "Larry Borom",
      "Jonah Williams", "Khalil McKenzie", "Austin Blythe", "Wes Schweitzer", "Lucas Patrick",
      "Nate Davis", "Nick Allegretti", "Chukwuma Okorafor", "Sam Cosmi", "Cody Whitehair",
      // Add more names to reach 200
    ],
    DL: [
      "Aaron Donald", "Chris Jones", "T.J. Watt", "Myles Garrett", "Nick Bosa", 
      "DeMarcus Lawrence", "Khalil Mack", "Cameron Heyward", "Joey Bosa", "Jeffery Simmons", 
      "Grady Jarrett", "Dexter Lawrence", "Javon Hargrave", "Kenny Clark", "Da'Ron Payne", 
      "Fletcher Cox", "Quinnen Williams", "Harrison Phillips", "Calais Campbell", "Linval Joseph", 
      "Akiem Hicks", "Melvin Ingram", "Cameron Jordan", "Jonathan Allen", "Rashan Gary", 
      "Brandon Graham", "Trey Hendrickson", "Matt Judon", "Jalen Carter", "Will Anderson Jr.", 
      "Maxx Crosby", "Boye Mafe", "George Karlaftis", "Zach Allen", "P.J. Watt", 
      "Robert Quinn", "Josh Allen", "Emmanuel Ogbah", "Montez Sweat", "Chase Young",
      "J.J. Watt", "Aldon Smith", "Jerry Hughes", "Brian Burns", "Yetur Gross-Matos", 
      "Romeo Okwara", "Darius Leonard", "Anthony Nelson", "Trey Flowers", "Carl Lawson", 
      "Jeffrey Simmons", "Zach Wilson", "DeMarcus Ware", "Darryl Johnson Jr.", "Jadaveon Clowney",
      "Sam Hubbard", "Cameron Jordan", "Jalen Carter", "Andre Carter", "Jonathan Cooper",
      // Add more names to reach 200
    ]
  };

  // Function to get a random unique player
  const getRandomUniquePlayer = (position, list) => {
    const availablePlayers = [...list];
    return () => {
      const index = Math.floor(Math.random() * availablePlayers.length);
      const player = availablePlayers.splice(index, 1)[0];
      return player;
    }
  }

  // Function to generate a random NFL team
  const generateRandomNFLTeam = () => {
    const getQB = getRandomUniquePlayer('QB', players.QB);
    const getRB = getRandomUniquePlayer('RB', players.RB);
    const getWR = getRandomUniquePlayer('WR', players.WR);
    const getTE = getRandomUniquePlayer('TE', players.TE);
    const getLB = getRandomUniquePlayer('LB', players.LB);
    const getS = getRandomUniquePlayer('S', players.S);
    const getCB = getRandomUniquePlayer('CB', players.CB);
    const getDL = getRandomUniquePlayer('DL', players.DL);

    // Random team names for Offensive Line and Defensive Line
    const offensiveLineTeams = ["Team A", "Team B", "Team C", "Team D", "Team E"];
    const defensiveLineTeams = ["Team X", "Team Y", "Team Z", "Team W", "Team V"];

    const qb = getQB();
    const rb = getRB();
    const wr = getWR();
    const te = getTE();
    const lb = getLB();
    const s = getS();
    const cb = getCB();
    const dlTeam = offensiveLineTeams[Math.floor(Math.random() * offensiveLineTeams.length)];
    const dlTeamDef = defensiveLineTeams[Math.floor(Math.random() * defensiveLineTeams.length)];

    return { qb, rb, wr, te, lb, s, cb, dlTeam, dlTeamDef };
  }

  // Display the team
  const displayTeam = () => {
    const team = generateRandomNFLTeam();
    const teamContainer = document.querySelector('#nfl-container .details-grid');
    
    teamContainer.innerHTML = `
      <div class="row">
        <p><strong>Quarterback (QB):</strong> ${team.qb}</p>
        <p><strong>Running Back (RB):</strong> ${team.rb}</p>
        <p><strong>Wide Receiver (WR):</strong> ${team.wr}</p>
        <p><strong>Tight End (TE):</strong> ${team.te}</p>
      </div>
      <div class="row">
        <p><strong>Linebacker (LB):</strong> ${team.lb}</p>
        <p><strong>Safety (S):</strong> ${team.s}</p>
        <p><strong>Cornerback (CB):</strong> ${team.cb}</p>
        <p><strong>Defensive Line (Team):</strong> ${team.dlTeamDef}</p>
      </div>
    `;
  }

  // Call the display function to show the team on page load
  displayTeam();
});

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
            "Juwan Johnson", "Harrison Bryant", "Chigoziem Okonkwo", "Logan Thomas", "Jace Sternberger",
            "Irv Smith Jr.", "Albert Okwuegbunam", "Zach Ertz", "John Bates", "Cade Otton",
            "Tommy Tremble", "Brycen Hopkins", "Adam Trautman", "Daniel Bellinger", "Josh Oliver",
            "Tre' McKitty", "James Mitchell", "Kaden Smith", "Tanner Hudson", "Mitchell Wilcox",
            "Drew Sample", "Noah Fant", "Zach Gentry", "Blake Jarwin", "Jared Cook",
            "Chris Herndon", "Ricky Seals-Jones", "Jordan Akins", "Donald Parham", "Maxx Williams",
            // Add more names to reach 200
        ],
        LB: [
            "Darius Leonard", "Fred Warner", "Bobby Wagner", "Roquan Smith", "Devin White", 
            "Micah Parsons", "C.J. Mosley", "Shaquille Leonard", "Landon Collins", "Vonn Bell",
            "Eric Kendricks", "Jamin Davis", "Tremaine Edmunds", "Khalil Mack", "Jaylon Smith",
            "Jeremiah Owusu-Koramoah", "Chandler Jones", "Zaire Franklin", "T.J. Edwards", "Jordan Hicks",
            "Rashaan Evans", "Patrick Queen", "Azeez Al-Shaair", "Davion Taylor", "Jahlani Tavai",
            "De'Vondre Campbell", "Anfernee Jennings", "Matt Milano", "Hassan Reddick", "Anthony Walker",
            "Quincy Williams", "Myles Jack", "Kamren Curl", "Sage Surratt", "Elijah Lee",
            "Zach Cunningham", "Jarrad Davis", "Brennan Scarlett", "Rashad Smith", "Germaine Pratt",
            "Ben Niemann", "Teddy Bridgewater", "Zach Thomas", "Dorian Williams", "Joe Bachie",
            // Add more names to reach 200
        ],
        S: [
            "Tyrann Mathieu", "Jamal Adams", "Derwin James", "Minkah Fitzpatrick", "Justin Simmons", 
            "Buda Baker", "Budda Baker", "Harrison Smith", "Antoine Winfield Jr.", "Eddie Jackson",
            "Javon Holland", "Adrian Amos", "Kirk Cousins", "John Johnson III", "Devin McCourty",
            "Marcus Williams", "Chauncey Gardner-Johnson", "Kevin Byard", "Jonathan Abram", "Ronnie Harrison",
            "Tashaun Gipson", "Malik Hooker", "Jeremy Chinn", "Xavier McKinney", "Jalen Pitre",
            "Rayshawn Jenkins", "Michael Carter", "Gerald Everett", "Cameron Sutton", "Damarri Mathis",
            "Kavon Wallace", "Dane Belton", "Elijah Molden", "Nasir Adderley", "Tariq Carpenter",
            "Justin Reid", "Jalen Hawkins", "Dax Hill", "Nick Scott", "Cameron Dantzler",
            "Anthony Harris", "Amani Hooker", "Jalen Ramsey", "Marlon Humphrey", "Lamarcus Joyner",
            "Desmond King", "Andrew Wingard", "Joey Blount", "Richie Grant", "Leonard Johnson",
            // Add more names to reach 200
        ],
        CB: [
            "Jalen Ramsey", "Darius Slay", "Jaire Alexander", "Xavien Howard", "Marlon Humphrey", 
            "Tre'Davious White", "James Bradberry", "Patrick Surtain II", "Joe Haden", "Byron Jones",
            "JC Jackson", "Kendall Fuller", "A.J. Terrell", "Denzel Ward", "Carlton Davis",
            "Marshon Lattimore", "Sauce Gardner", "Troy Hill", "Bryce Callahan", "William Jackson",
            "Shaquill Griffin", "Sean Murphy-Bunting", "Mackensie Alexander", "Donte Jackson", "Darius Slay",
            "Jalen Johnson", "Kareem Jackson", "Michael Ojemudia", "Chidobe Awuzie", "Zion McCollum",
            "Elijah Molden", "Akhello Witherspoon", "Chris Harris Jr.", "Patrick Robinson", "Quinton Dunbar",
            "Tyson Campbell", "Eli Apple", "Benjie Franklin", "C.J. Henderson", "Damon Arnette",
            "Tavon Young", "Kerryon Johnson", "Nate Hobbs", "Troy Hill", "Javon Wims",
            "Anthony Brown", "Adoree' Jackson", "Cameron Dantzler", "Sean Murphy-Bunting", "Russell Douglas",
            // Add more names to reach 200
        ],
        OL: [
            "David Bakhtiari", "Trent Williams", "Zack Martin", "Quenton Nelson", "Lane Johnson",
            "Tyron Smith", "Orlando Brown", "Ronnie Stanley", "Jordan Mailata", "Ryan Ramczyk",
            "J.C. Tretter", "Elgton Jenkins", "Jason Kelce", "Laremy Tunsil", "Brandon Scherff",
            "Rashawn Slater", "Jedrick Wills", "Penei Sewell", "Creed Humphrey", "Ali Marpet",
            "Garrett Bolles", "Brandon Brooks", "Austin Corbett", "Will Hernandez", "Michael Onwenu",
            "Ben Cleveland", "James Daniels", "Ryan Kelly", "Ben Powers", "Erik McCoy",
            "David Edwards", "Matt Paradis", "Joe Thuney", "Gabe Jackson", "Chris Lindstrom",
            "Andrew Thomas", "Mitchell Schwartz", "Javier Edwards", "Elijah Wilkinson", "Evan Neal",
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
            "DeMarcus Ware", "Darryl Johnson Jr.", "Jadaveon Clowney", "Sam Hubbard", "Andre Carter",
            // Add more names to reach 200
        ]
    };

    // Function to get a random unique player
    const getRandomUniquePlayer = (list) => {
        const availablePlayers = [...list];
        return () => {
            const index = Math.floor(Math.random() * availablePlayers.length);
            const player = availablePlayers.splice(index, 1)[0];
            return player;
        }
    }

    // Function to generate a random NFL team
    const generateRandomNFLTeam = () => {
        const getQB = getRandomUniquePlayer(players.QB);
        const getRB = getRandomUniquePlayer(players.RB);
        const getWR = getRandomUniquePlayer(players.WR);
        const getTE = getRandomUniquePlayer(players.TE);
        const getLB = getRandomUniquePlayer(players.LB);
        const getS = getRandomUniquePlayer(players.S);
        const getCB = getRandomUniquePlayer(players.CB);
        const getOL = getRandomUniquePlayer(players.OL);
        const getDL = getRandomUniquePlayer(players.DL);

        const qb = getQB();
        const rb = getRB();
        const wr = getWR();
        const te = getTE();
        const lb = getLB();
        const s = getS();
        const cb = getCB();
        const olTeam = getOL();
        const dlTeam = getDL();

        return { qb, rb, wr, te, lb, s, cb, olTeam, dlTeam };
    }

    // Display the team on the page
    const displayTeam = () => {
        const team = generateRandomNFLTeam();

        document.querySelector('#person-container .details-grid').innerHTML = `
            <p><strong>Quarterback:</strong> ${team.qb}</p>
            <p><strong>Running Back:</strong> ${team.rb}</p>
            <p><strong>Wide Receiver:</strong> ${team.wr}</p>
            <p><strong>Tight End:</strong> ${team.te}</p>
            <p><strong>Linebacker:</strong> ${team.lb}</p>
            <p><strong>Safety:</strong> ${team.s}</p>
            <p><strong>Cornerback:</strong> ${team.cb}</p>
            <p><strong>Offensive Line:</strong> ${team.olTeam}</p>
            <p><strong>Defensive Line:</strong> ${team.dlTeam}</p>
        `;
    }

    displayTeam();
});

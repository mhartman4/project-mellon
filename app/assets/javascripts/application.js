// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery

//= require turbolinks
//= require_tree .

this.round = function(num) {
  return Math.round(num * 100) / 100;
};

this.zip = function(arrayA, arrayB) {
  var length, n, result;
  length = Math.min(arrayA.length, arrayB.length);
  result = [];
  n = 0;
  while (n < length) {
    result.push([arrayA[n], arrayB[n]]);
    n++;
  }
  return result;
};


var substringMatcher = function(strs) {
    return function findMatches(q, cb) {
      var matches, substringRegex;

      // an array that will be populated with substring matches
      matches = [];

      // regex used to determine if a string contains the substring `q`
      substrRegex = new RegExp(q, 'i');

      // iterate through the pool of strings and for any string that
      // contains the substring `q`, add it to the `matches` array
      $.each(strs, function(i, str) {
        if (substrRegex.test(str)) {
          // the typeahead jQuery plugin expects suggestions to a
          // JavaScript object, refer to typeahead docs for more info
          matches.push({ value: str });
        }
      });

      cb(matches);
    };
  };

  var players =
    ["Jason Maxiell", "Earl Clark", "Jeff Green", "Nick Collison", "Kosta Koufos", "Ognjen Kuzmic", "Kevin Seraphin", "Caron Butler", "J.J. Hickson", "Manu Ginobili", "Jimmy Butler", "Derrick Williams", "Will Barton", "O.J. Mayo", "Justin Hamilton", "Greivis Vasquez", "Mike Harris", "Tobias Harris", "Solomon Jones", "Mike Dunleavy", "Lance Thomas", "Dwyane Wade", "Jeremy Tyler", "Jeff Ayres", "D.J. Stephens", "Stephen Curry", "Derrick Rose", "Danny Green", "Richard Jefferson", "Victor Oladipo", "Brandon Bass", "Udonis Haslem", "DeMarcus Cousins", "Chandler Parsons", "Wilson Chandler", "Marvin Williams", "Xavier Henry", "Louis Amundson", "Jeremy Lin", "C.J. McCollum", "Jose Barea", "Garrett Temple", "Nikola Vucevic", "Carrick Felix", "Elliot Williams", "Trevor Ariza", "Jared Sullinger", "Royce White", "Eric Maynor", "Jonas Valanciunas", "Aaron Gray", "Patrick Beverley", "Dionte Christmas", "Amir Johnson", "Greg Oden", "Darius Morris", "Trevor Booker", "JaVale McGee", "Alonzo Gee", "Marquis Teague", "Ray Allen", "Gustavo Ayon", "Steve Blake", "Anthony Tolliver", "E'Twaun Moore", "Thaddeus Young", "Kemba Walker", "Vander Blue", "Jared Dudley", "Blake Griffin", "George Hill", "Paul Millsap", "Chris Douglas-Roberts", "Scotty Hopson", "Isaiah Canaan", "Mustafa Shakur", "Hollis Thompson", "C.J. Miles", "Timofey Mozgov", "Tyshawn Taylor", "Diante Garrett", "Marco Belinelli", "Chris Copeland", "Ian Clark", "Mike Conley", "Dennis Schroeder", "Sasha Vujacic", "Earl Watson", "Steve Nash", "Shannon Brown", "Jon Leuer", "James Jones", "Ryan Kelly", "Mike Scott", "Gary Neal", "Ty Lawson", "Lance Stephenson", "Rodney Stuckey", "Kenneth Faried", "Eric Gordon", "Leandro Barbosa", "Anthony Randolph", "Kyle Singler", "Nick Young", "Jordan Farmar", "Ersan Ilyasova", "Pero Antic", "Antawn Jamison", "John Jenkins", "Andrei Kirilenko", "Austin Daye", "Kobe Bryant", "Jason Thompson", "Tyler Zeller", "Casper Ware", "J.R. Smith", "Nate Robinson", "Zach Randolph", "Ronny Turiaf", "Robert Covington", "Donatas Motiejunas", "Gerald Wallace", "Ben McLemore", "Dion Waiters", "Andrew Nicholson", "Josh McRoberts", "Khris Middleton", "Luke Babbitt", "Kyle Korver", "Ben Gordon", "Doron Lamb", "Joakim Noah", "Luigi Datome", "Thomas Robinson", "John Henson", "Brian Roberts", "Chris Kaman", "Arron Afflalo", "Jermaine O'Neal", "Tim Hardaway", "Enes Kanter", "MarShon Brooks", "Alexey Shved", "Kris Humphries", "Kentavious Caldwell-Pope", "DeAndre Liggins", "Toure' Murry", "Julyan Stone", "Gerald Green", "Hedo Turkoglu", "Kyrie Irving", "Avery Bradley", "D.J. Augustin", "Jason Smith", "Adonis Thomas", "Chris Johnson", "Chuck Hayes", "Tony Snell", "Wesley Johnson", "Tony Wroten", "Quincy Acy", "Kevin Durant", "Othyus Jeffers", "Cartier Martin", "Sergey Karasev", "Zaza Pachulia", "Kyle Lowry", "Seth Curry", "Chris Paul", "Paul Pierce", "Aaron Brooks", "Quincy Miller", "Royal Ivey", "Stephen Jackson", "James Southerland", "Trey Burke", "Louis Williams", "Tyler Hansbrough", "Darius Johnson-Odom", "Arnett Moultrie", "Gerald Henderson", "Brandon Jennings", "Chris Wright", "Marcus Thornton", "Luke Ridnour", "Manny Harris", "Jason Terry", "Omri Casspi", "DeJuan Blair", "Josh Smith", "Otto Porter", "Monta Ellis", "Amar'e Stoudemire", "Joel Freeland", "Alec Burks", "Alexis Ajinca", "Reggie Bullock", "Troy Daniels", "Quincy Pondexter", "Kawhi Leonard", "Jamaal Franklin", "Shane Edwards", "Wayne Ellington", "Ricky Ledo", "Lavoy Allen", "Nene Hilario", "Damion James", "Reggie Williams", "Bernard James", "Kevin Garnett", "Anthony Bennett", "Kirk Hinrich", "Mike James", "Russell Westbrook", "Marcin Gortat", "Eric Bledsoe", "James Harden", "Tiago Splitter", "Ryan Anderson", "Hamady N'Diaye", "Luis Scola", "Mike Muscala", "Luol Deng", "P.J. Tucker", "Serge Ibaka", "Rasual Butler", "C.J. Watson", "Dorell Wright", "James Johnson", "Archie Goodwin", "Robin Lopez", "Dirk Nowitzki", "Andre Iguodala", "Gal Mekel", "Henry Sims", "LaMarcus Aldridge", "Jared Cunningham", "Greg Monroe", "Chris Andersen", "Roy Hibbert", "Andre Miller", "Metta World Peace", "Jeffery Taylor", "Jamal Crawford", "Hasheem Thabeet", "John Salmons", "Aron Baynes", "Matthew Dellavedova", "Jonas Jerebko", "Miroslav Raduljica", "Ricky Rubio", "Roger Mason", "Joe Johnson", "Nazr Mohammed", "Maurice Harkless", "Daniel Orton", "Francisco Garcia", "Landry Fields", "Damian Lillard", "Kyle O'Quinn", "Anthony Morrow", "Steven Adams", "Nicolas Batum", "Channing Frye", "Phil Pressey", "Maalik Wayns", "Deron Williams", "Markieff Morris", "Jae Crowder", "Andrea Bargnani", "Al Horford", "D.J. White", "Brook Lopez", "Evan Fournier", "Reggie Evans", "Thabo Sefolosha", "Steve Novak", "Ian Mahinmi", "Reggie Jackson", "Kendrick Perkins", "J.J. Redick", "Peyton Siva", "Elton Brand", "Michael Kidd-Gilchrist", "Arinze Onuaku", "Hilton Armstrong", "Spencer Hawes", "Tayshaun Prince", "Gorgui Dieng", "DeMar DeRozan", "Dexter Pittman", "Jeremy Evans", "Evan Turner", "Malcolm Thomas", "Nemanja Nedovic", "Lorenzo Brown", "Dwight Buycks", "Jeff Adrien", "Al Jefferson", "Jordan Crawford", "Kenyon Martin", "Willie Green", "Goran Dragic", "Anderson Varejao", "Kevin Love", "Robbie Hummel", "LeBron James", "Orlando Johnson", "Mason Plumlee", "Omer Asik", "Robert Sacre", "Derek Fisher", "Rudy Gay", "Jamaal Tinsley", "Andrew Bynum", "David Lee", "Darren Collison", "Iman Shumpert", "Devin Harris", "Kendall Marshall", "Greg Stiemsma", "Al Harrington", "Michael Beasley", "Jarvis Varnado", "Austin Rivers", "Ed Davis", "Ryan Gomes", "Miles Plumlee", "Viacheslav Kravtsov", "Al-Farouq Aminu", "DeAndre Jordan", "Nikola Pekovic", "Jordan Hamilton", "Jan Vesely", "Tim Duncan", "Martell Webster", "Toney Douglas", "Rashard Lewis", "Michael Carter-Williams", "Danny Granger", "Drew Gooden", "Nando De Colo", "Jannero Pargo", "Rajon Rondo", "Jeremy Lamb", "Kelly Olynyk", "James Anderson", "Jrue Holiday", "Paul George", "Andris Biedrins", "Nate Wolters", "Isaiah Thomas", "Mike Miller", "Byron Mullens", "Brandan Wright", "Carlos Boozer", "Alex Len", "Pablo Prigioni", "Cole Aldrich", "Matt Barnes", "Marcus Morris", "Samuel Dalembert", "Jeff Withey", "Chase Budinger", "Jodie Meeks", "Tyson Chandler", "Kevin Martin", "Darrell Arthur", "Andre Roberson", "Matt Bonner", "Alan Anderson", "Solomon Hill", "Jeff Teague", "Corey Brewer", "Andrew Bogut", "Patrick Patterson", "Jose Calderon", "Mario Chalmers", "Vitor Faverani", "David West", "A.J. Price", "Dewayne Dedmon", "DeMarre Carroll", "Patrick Mills", "Mo Williams", "John Wall", "Carmelo Anthony", "Draymond Green", "Ray McCallum", "Beno Udrih", "Josh Harrellson", "John Lucas", "Bismack Biyombo", "Andre Drummond", "Ronnie Brewer", "Luc Mbah a Moute", "Ryan Hollins", "Larry Sanders", "Ekpe Udoh", "Tony Parker", "Randy Foye", "Jarrett Jack", "Bradley Beal", "Harrison Barnes", "Will Bynum", "Greg Smith", "Allen Crabbe", "Erik Murphy", "Glen Davis", "Dwight Howard", "Boris Diaw", "Jason Collins", "Mirza Teletovic", "Carl Landry", "Cory Joseph", "Brandon Davies", "Shawn Marion", "Keith Bogans", "Rudy Gobert", "Darius Miller", "Derrick Favors", "Anthony Davis", "Brandon Knight", "Glen Rice", "Klay Thompson", "Pau Gasol", "Giannis Antetokounmpo", "Victor Claver", "Jordan Hill", "Tyreke Evans", "Gordon Hayward", "Shane Larkin", "Shane Battier", "Chris Bosh", "Meyers Leonard", "Perry Jones", "Shaun Livingston", "Donald Sloan", "Chris Singleton", "Andray Blatche", "Shabazz Muhammad", "Tristan Thompson", "Chris Babb", "Chris Smith", "Raymond Felton", "Tornike Shengelia", "Ramon Sessions", "Nick Calathes", "Jerryd Bayless", "Terrence Jones", "Kent Bazemore", "Josh Childress", "Charlie Villanueva", "Courtney Lee", "Ronnie Price", "Tony Allen", "Shawne Williams", "Shelvin Mack", "Vince Carter", "Jimmer Fredette", "Cody Zeller", "Wesley Matthews", "Shavlik Randolph", "Jameer Nelson", "Marreese Speights", "Marc Gasol", "Dante Cunningham", "Brandon Rush", "Norris Cole", "Travis Outlaw", "Elias Harris", "Chauncey Billups", "Terrence Ross", "Taj Gibson", "Ishmael Smith", "Joel Anthony", "James Nunnally", "Tony Mitchell", "Jorge Gutierrez"];



  $('#the-basics .typeahead').typeahead({
    hint: true,
    highlight: true,
    minLength: 1
  },
  {
    name: 'players',
    displayKey: 'value',
    source: substringMatcher(players)
  });

/** @format */
// array for movies 
let movies = [
    {
      name: "Napolean Dynamite",
      actors: "Starring: Jon Heder, Efren Ramirez, John Gries, Jon Gries, Aaron Ruell, Tina Majorino",
      age: "Rated PG",
      about: "In small-town Preston, Idaho, awkward teen Napoleon Dynamite has trouble fitting in. After his grandmother is injured in an accident, his life is made even worse when his strangely nostalgic uncle, Rico, shows up to keep an eye on him",
    },
    {
      name: "Creed",
      actors: "Michael B. Jordan, Sylvester Stallone, Tessa Thompson, Phylicia Rashad, Tony Bellew, Wood Harris. ",
      age: "Rated R",
      about: "Adonis Johnson never knew his famous father, boxing champion Apollo Creed, who died before Adonis was born. However, boxing is in his blood, so he seeks out Rocky Balboa and asks the retired champ to be his trainer.",
    },
    {
      name: "Encanto",
      actors: "Stephanie Beatriz, Wilmer Valderrama, Sarah-Nicole Robles, John Leguizamo, Alan Tudyk, Jessica Darrow. ",
      age: "Rated G",
      about: "The Madrigals are an extraordinary family who live hidden in the mountains of Colombia in a charmed place called the Encanto. The magic of the Encanto has blessed every child in the family with a unique gift -- every child except Mirabel.",
    },

    {
        name: "Toy Story",
        actors: "Tom Hanks, Erik Von Detten, Nathan Lane, Jim Varney, John Ratzenberger, Laurie Metcalf, Don Rickles.",
        age: "Rated G",
        about: "Woody, a good-hearted cowboy doll who belongs to a young boy named Andy, sees his position as Andy's favorite toy jeopardized when his parents buy him a Buzz Lightyear action figure. Even worse, the arrogant Buzz thinks he's a real spaceman on a mission to return to his home planet",
      },

      {
        name: "Avengers", 
        actors: "Robert Downey Jr., Joshn Brolin, Chris Hemsworth, Scarlett Johansson, Chris Evans, Tom Holland.",
        age: "Rated R",
        about: "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
      },

      {
        name: "Akira",
        actors: "Staring: Johnny Yong, Joshua Seth, Michelle Ruff, Sandy Fox, James Lyon, Robert Wicks.",
        age: "Rated R",
        about: "In 1988 the Japanese government drops an atomic bomb on Tokyo after ESP experiments on children go awry. In 2019, 31 years after the nuking of the city,Kaneda, a bike gang leader, tries to save his friend Tetsuo from a secret government project.",
      },

      {
        name: "Shrek",
        actors: "Starring: Mike Myers, Eddie Murphy, Chris Miller, Conrad Vernon, John Lithgow.",
        age: "Rated G",
        about: "Once upon a time, in a far away swamp, there lived an ogre named Shrek whose precious solitude is suddenly shattered by an invasion of annoying fairy tale characters. They were all banished from their kingdom by the evil Lord Farquaad. Determined to save their home Shrek cuts a deal with Farquaad and sets out to rescue Princess Fiona.",
      },

      {
        name: "Hercules",
        actors: "Starring: James Woods, Tate Donovan, Rip Torn, Danny Devito, Susan Egan, Roger Bart.",
        age: "Rated G",
        about: "Hercules, a son of gods, was snatched as a baby by Hades and forced to live among mortals as a half-man, half-god. Now a teenager, Hercules needs to perform a rite of passage on Earth to prove himself worthy of living with the gods on Mount Olympus.",
      },

      {
        name: "The Lion King",
        actors: "Starring: James Earl Jones, Matthew Broderick, Jeremy Irons, Nathan Lane, Robert Guillaume, Rowan Atkinson.",
        age: "Rated G",
        about: "Simba, the heir of his father, Mufasa. Simba's wicked uncle, Scar, plots to usurp Mufasa's throne by luring father and son into a stampede of wildebeests. But Simba escapes, and only Mufasa is killed.",
      },

      {
        name: "Coco",
        actors: "Starring: Anthony Gonzalez, Gael Garcia Bernal, Benjamin Bratt, Gabriel Iglesias, Jamie Camil.",
        age: "Rated G",
        about: "Despite his family's generations-old ban on music, young Miguel dreams of becoming an accomplished musician like his idol Ernesto de la Cruz. Desperate to prove his talent, Miguel finds himself in the stunning and colorful Land of the Dead..",
      },

      {
        name: "Moana",
        actors: "Starring: Auli'i Cravahlho, Dwayne Johnson, Alan Tudyk, Jermaine Clement, Temuera Morrison.",
        age: "Rated G",
        about: "An adventurous teenager sails out on a daring mission to save her people. During her journey, Moana meets the once-mighty demigod Maui, who guides her in her quest to become a master way-finder.",
      },

      {
        name: "Spider-Man",
        actors: "Starring: Tobey Maguire, Kristen Dunst, Willem Dafoe, James Franco, J.K. Simmons, Joe Manganiello.",
        age: "Rated PG-13",
        about: "Spider-Man centers on student Peter Parker who, after being bitten by a genetically-altered spider, gains superhuman strength and thespider-like ability to cling to any surface. He vows to use his abilities to fight crime.",
      },
  ];

  const nameOfMovie = (index) => {
    // console.log(movies[index].name);
    $(".care").eq(index).text(movies[index].name + "      |      " + movies[index].actors);
  };
  
  const showInformation = () => {
// Display the movie names for each movie
    jQuery.each($(".card"), nameOfMovie);

// Add an event handler 
    $(".card").on("click", function () {
// Find the box clicked using the index method
      let indexOfMovie = $(".card").index(this);
// Find the paragraph of class p and set the text
      $(this).find("p.care").text(movies[indexOfMovie].age + "      |      " + movies[indexOfMovie].about);
    });
// mouseout event that when user moves from paragraph text it will return to base information
    $(".card").on("mouseout", function () {
      let indexOfMovie = $(".card").index(this);
    $(this).find("p.care").text(movies[indexOfMovie].name +  "      |      " + movies[indexOfMovie].actors);
    });
  }
  
  // input from user to update the movies in the array 
  const choice = () => {
    let choice = document.querySelector("#choice").value;
    console.log(choice)
     if(choice === "U"){
      console.log("update");
      updateObject();
  }
    else{
      alert("Something went wrong or invalid input")
  }
  };

  // alert boxes to let user input the updates for the movies
const updateObject = function(){
  let updateChoice = prompt("Enter the movie name from the list that you want to update its information (case sensitive):  ")
  let selectedUpdate = movies.findIndex((element => element.name === updateChoice))
  movies[selectedUpdate].name = prompt("Enter what you would like the name to change to? ");
  movies[selectedUpdate].actors = prompt("What would you like to change the actors to? ");
  movies[selectedUpdate].age = prompt("Wat you would like to change the age rating to? ");
  movies[selectedUpdate].about = prompt("Enter what you would like to change the description to: ");
  showInformation()
}

$(document).ready(showInformation);


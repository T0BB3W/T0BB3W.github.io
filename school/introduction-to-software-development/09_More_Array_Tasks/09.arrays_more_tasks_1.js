
var aphorisms = [];	        // Creates an empty array

aphorisms.push("A great flame follows a little spark");

aphorisms.push("Laugh, and the world laughs with you; weep, and you weep alone.");     

aphorisms.push("Life isn't about finding yourself. Life is about creating yourself.");	        

aphorisms.push("We do not remember days, we remember moments.");

aphorisms.push("He who has a why to live can bear almost any how.");

var aphNum = Math.floor(Math.random() * 5);

document.getElementById("divOutput").innerHTML = aphorisms[aphNum];

// End
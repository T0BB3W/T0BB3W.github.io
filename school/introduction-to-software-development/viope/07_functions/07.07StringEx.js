function processName() {
    let name = document.getElementById("name").value;

    let upperCase = name.toUpperCase();

    let lowerCase = name.toLowerCase();

    let length = name.length;

    let contains = name.indexOf("muumi");

    if (contains < 0) {
        contains = "Doesn't contain the text muumi.";
    } else {
        contains = "Does contain the text muumi.";
    }

    let firstChar = name.charAt(0);

    let firstThree = name.substring(0, 3);

    document.getElementById("upperCase").innerHTML = "With upper case letters: " + upperCase;
    document.getElementById("lowerCase").innerHTML = "With lower case letters: " + lowerCase;
    document.getElementById("length").innerHTML = "Character count: " + length;
    document.getElementById("contains").innerHTML = contains;
    document.getElementById("firstCharacter").innerHTML = "First character: " + firstChar;
    document.getElementById("manyCharacters").innerHTML = "First three characters: " + firstThree;
    // read value of name from the input field
   

    // show it with "ALL CAPS" using toUpperCase()
   

    // show it with  "all small letters" using toLowerCase()
 

    //tell how many characters are there (length, includes also all spaces) 
   

    // tell, whether the input string contains the word 'muumi'
    
    // tell the first character using charAt()
    

    // tell which ones are the first three characters using substring().
   
}
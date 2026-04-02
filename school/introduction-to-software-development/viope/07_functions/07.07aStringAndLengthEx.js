function processName() {
    let name = document.getElementById("name").value;

    let upperCase = name.toUpperCase();

    let lowerCase = name.toLowerCase();

    let length = name.length;

    document.getElementById("upperCase").innerHTML = "With upper case letters: " + upperCase;
    document.getElementById("lowerCase").innerHTML = "With lower case letters: " + lowerCase;
    document.getElementById("length").innerHTML = "Character count: " + length;

    // read value of name from the input field
   

    // show it with "ALL CAPS" using toUpperCase()
   

    // show it with  "all small letters" using toLowerCase()
 

    //tell how many characters are there (length, includes also all spaces) 
   
   
}
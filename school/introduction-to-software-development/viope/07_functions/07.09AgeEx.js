function tellAge() {
    let yearOfBirth = Number(document.getElementById("yearOfBirth").value);

    let today = new Date();

    today = today.getFullYear();

    let age = today - yearOfBirth;

    if (age < 0) {
        age = "error";
    }

    document.getElementById("answer").innerHTML = "You are now " + age + " years old.<br>(Current year is " + today + ".)";

    // Read value of yearOfBirth from the input field 
   

    // Figure out the current date into today variable 
  

    // Use getFullYear() method to get the current year out from the today variable
   

    // Calculate the (rough estimate of the) age
    

    // If age is less than zero
 
        //  Show an error message
        
    // otherwise tell the age
   
}
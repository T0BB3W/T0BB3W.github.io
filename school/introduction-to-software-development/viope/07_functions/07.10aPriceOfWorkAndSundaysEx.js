

function calculate() {
    var dateText = document.getElementById("date").value;

    let hourly;
    let sunday;

    if (isSunday(dateText)) {
        hourly = 72;
        sunday = "(Sunday)";
    } else {
        hourly = 48;
        sunday = "(work day)";
    }

    document.getElementById("answer").innerHTML = "<p>Date " + dateText + " " + sunday + ".<br>The price of this repair work is " + hourly + " euros per hour.</p>";
    // Read date text from the input field

    // If it is not Sunday  (Call isSunday() function with a date text as a parameter)
        //Show price of the repair work per hour during the workdays
    //otherwise			
        //Show price of the repair work per hour on Sundays

}

 // The function gets the date text in the format "dd.MM.yyyy". 
 // The function returns Boolean value true if the date is for a Sunday, otherwise false.
function isSunday(dateText) {
	let day = parseInt(dateText.substr(0, 2));

    let month = parseInt(dateText.substr(3, 2)) - 1;

    let year = parseInt(dateText.substr(6, 4));

    let currentDate = new Date(year, month, day);

    let dayOfWeek = currentDate.getDay();

    return dayOfWeek === 0;
    // Split the given dateText into day, month and year parts using the substr() method
	

	// Create a new Date object to a variable 
	

	// Get the day of the week with its getDay() method. Sunday is number 0 .
	

	// If day of the week is Sunday 
	
		// return Boolean value true
		
	// otherwise	
	
       // return Boolean value false		
	
}



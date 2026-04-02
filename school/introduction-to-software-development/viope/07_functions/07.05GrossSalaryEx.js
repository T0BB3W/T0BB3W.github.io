function calculateSalary(hours, hourlySalary) {

	let grossSalary = "Gross salary is " + (hours * hourlySalary).toFixed(2) + " euros.";

	return grossSalary;
		// calculate salary

		// return the gross salary with the return statement
		
}

function showGrossSalary() {

	var hours = document.getElementById("hours").value;
	var hourlySalary = document.getElementById("hourlySalary").value;

	document.getElementById("answer").innerHTML = calculateSalary.call(this, hours, hourlySalary);
		// assign the input field value to the variable hours
		// assign the second input field value to the variable hourlySalary
		// call the calculateSalary function
		// write the answer on the html page

}


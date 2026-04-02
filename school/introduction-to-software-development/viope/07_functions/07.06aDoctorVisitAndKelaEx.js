// Define a function (1.) which gets the length of the doctor's 
// visit as a parameter and returns the maximum Kela reimbursement.
function doctorsFee(length) {
	if (length <= 10) {
		return 8
	} else if (length <= 20) {
		return 11
	} else if (length <= 30) {
		return 13.5
	} else if (length <= 45) {
		return 16.5
	} else if (length > 45) {
		return 21
	}
}
// Define a function  
function calculate() {

	var length = parseInt(document.getElementById("length").value);

	var doctorsfee = document.getElementById("doctorsFee").value;

	var kelaReimbursement = doctorsFee.call(this, length).toFixed(2);
	
	document.getElementById("answer").innerHTML = "Length of visit is " + length + 
	" minutes.<br>Kela reimbursement is " + kelaReimbursement + " euros.";
		// Read values from the input fields
		
		// Call the function (1.) which calculates and returns Kela reimbursement 

		
		// Write the answer on the page, to the answer div, as content of the div
		
}
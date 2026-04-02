// Defne a function (1.) 

// Defne a function (2.) 
	
	
// Define a function (3.) 

		// Read values from the input fields
		
		// Call the function (1.) which calculates Kela reimbursement 
		
		// Call the function (2.) which calculates amount left for the customer to pay
		
		// Write the answer on the page, to the answer div, as content of the div



function reimbursement(length) {
	if (length <= 10) {
		return 8;
	} else if (length <= 20) {
		return 11;
	} else if (length <= 30) {
		return 13.5;
	} else if (length <= 45) {
		return 16.5;
	} else if (length > 45) {
		return 21;
	}
}
// Define a function  

function customerPay(doctorsFee, length) {
    return Number(doctorsFee - reimbursement(length)).toFixed(2);
}

function calculate() {

	var length = parseInt(document.getElementById("length").value);
    var doctorsFee = Number(document.getElementById("doctorsFee").value);
    var kelaReimbursement = Number(reimbursement(length));
    var officeFee = Number(15.90);
    var customerPays = Number(officeFee) + Number(customerPay(doctorsFee, length));
	
	

	document.getElementById("answer").innerHTML = "Doctor's Fee is " + doctorsFee.toFixed(2) + 
	" euros.<br>Kela reimbursement is " + kelaReimbursement.toFixed(2) + " euros.<br>Office Fee is " 
	+ officeFee.toFixed(2) + " euros.<br>Customer needs to pay " + customerPays.toFixed(2) + " euros.";




		// Read values from the input fields
		
		// Call the function (1.) which calculates and returns Kela reimbursement 

		
		// Write the answer on the page, to the answer div, as content of the div
		
}
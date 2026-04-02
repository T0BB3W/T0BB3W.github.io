
function play() {

	let bet = Number(document.getElementById("bet").value);

	let pips = Math.floor(Math.random() * 6) + 1;

	if ([1, 3, 5].includes(pips)) {
		document.getElementById("answer").innerHTML = "Pips was " + pips + " - no pay";
	} else if ([2, 4].includes(pips)) {
		document.getElementById("answer").innerHTML = "Pips was " + pips + " - Paid back: " + (bet * 1.25).toFixed(2) + " euros";
	} else if (pips === 6) {
		document.getElementById("answer").innerHTML = "Pips was " + pips + " - Paid back: " + (bet * 1.5).toFixed(2) + " euros";
	}


		// Read value from the input field
		
		// Randomize dice pips between 1-6

		// Calculate win base on pips
		
		// Write the answer on the page, to the answer div, as content of the div

}

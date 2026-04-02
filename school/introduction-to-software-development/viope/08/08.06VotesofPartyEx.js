function showComparisonScores() {
	let votes = Number(document.getElementById("votes").value);

	let candidates = Number(document.getElementById("candidates").value);

	let str = "";

	for (var i = 1; i <= candidates; i++) {

		let score = votes / i;

		str += i + ". candidate: " + score.toFixed(0) + "<br>";

	}

	document.getElementById("answer").innerHTML = str;

		// For each candidates
			// Calculate comparison score for candidate
			
		// Show scores
		
}
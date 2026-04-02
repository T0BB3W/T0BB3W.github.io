	// The array variable names is declared inside the script element, but NOT inside the function. 
	// The array is availabe for both functions to read from or write to.
	let names = [];

	function addName() {
		// Assign name from the input field to the array (use push())
		names.push(document.getElementById("name").value);

		let namesText = "";
		// Go through the array in a for loop adding each name at the end of the namesText
		for (let i = 0; i < names.length; i++) {
			namesText = namesText + names[i] + " ";
		}

		document.getElementById("nameList").innerHTML = "Inserted names: " + namesText;

		document.getElementById("name").value = "";

		document.getElementById("answer").value = "";
		// Write the names on the page, to the names div, as content of the div
		

		// Empty the input field of name as that name was just put in the array


		// Empty the answer text
	}

	function makeDraw() {
		let winningIndex = Math.floor(Math.random() * names.length);

		document.getElementById("answer").innerHTML = "Winner is " + names[winningIndex];
		// Randomize the index of the winner
		
		
		// Write the answer on the page, to the answer div, as content of the div
		

	}

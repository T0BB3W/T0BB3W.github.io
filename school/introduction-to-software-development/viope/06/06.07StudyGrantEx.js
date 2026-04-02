function showStudyGrant() {

    let age = Number(document.getElementById("age").value);

	let withParents = document.getElementById("withParents").value;

	if (age >= 20 && withParents === "y") {
  		document.getElementById("answer").innerHTML = "The study grant is 87.23 - 196.27 euros.";
	} else if (age >= 20 && withParents === "n") {
		document.getElementById("answer").innerHTML = "The study grant is 268.23 euros.";
	} else if (age < 20 && withParents === "y") {
		document.getElementById("answer").innerHTML = "Ask Kela.";
	}

}
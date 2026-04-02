function checkAge() {
		let age = Number(document.getElementById("age").value);

		if (age < 18) {
			document.getElementById("answer").innerHTML = "Adolescents are not allowed to play.";
		} else if (age >= 18) {
			document.getElementById("answer").innerHTML = "Old enough to play.";
		}
}
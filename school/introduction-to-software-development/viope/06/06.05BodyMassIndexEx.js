function calculateBMI() {

	let weight = Number(document.getElementById("weight").value);

	let height = Number(document.getElementById("height").value);

	let bmi = weight / (height / 100.0 * height / 100.0);

	bmi = bmi.toFixed(2);

	if (bmi < 18.4) {
  		document.getElementById("answer").innerHTML = "Body Mass Index (BMI) is " + bmi + " (Underweight)";
	} else if (bmi > 18.4 && bmi < 24.9) {
		document.getElementById("answer").innerHTML = "Body Mass Index (BMI) is " + bmi + " (Normal Weight)";
	} else if (bmi > 25.0) {
		document.getElementById("answer").innerHTML = "Body Mass Index (BMI) is " + bmi + " (Overweight)";
	}

}
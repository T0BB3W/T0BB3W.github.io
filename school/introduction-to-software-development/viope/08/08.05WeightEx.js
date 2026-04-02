
function showWeightGoals() {
	let weight = Number(document.getElementById("weight").value);

	let lighterWeekly = weight * 0.1 / 7;

	let str = "";

	for (var i = 1; i <= 7; i++) {
		weight = weight - lighterWeekly;
		str += "After " + i + "." + " week " + weight.toFixed(1) + "<br>";
	
	}

	document.getElementById("answer").innerHTML = str;

}
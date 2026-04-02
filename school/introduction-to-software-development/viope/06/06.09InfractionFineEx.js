function tellInfractionFine() {
		
	let drivingSpeed = Number(document.getElementById("drivingSpeed").value);

	let speedLimit = Number(document.getElementById("speedLimit").value);



	if (drivingSpeed <= speedLimit) {
		document.getElementById("answer").innerHTML = "No speeding, no fine";
	} else if (drivingSpeed >= (speedLimit + 15) && speedLimit >= 10 && speedLimit <= 60) {
		document.getElementById("answer").innerHTML = "Infraction fine is 115 euros.";
	} else if (drivingSpeed <= (speedLimit + 15) && drivingSpeed > speedLimit && speedLimit <= 60 && speedLimit >= 10) {
		document.getElementById("answer").innerHTML = "Infraction fine is 85 euros.";
	} else if (drivingSpeed >= (speedLimit + 15) && speedLimit >= 70 && speedLimit <= 120 && drivingSpeed <= (speedLimit + 20)) {
		document.getElementById("answer").innerHTML = "Infraction fine is 100 euros.";
	} else if (drivingSpeed <= (speedLimit + 15) && speedLimit >= 70 && speedLimit <= 120) {
		document.getElementById("answer").innerHTML = "Infraction fine is 70 euros.";
	} else if (drivingSpeed > (speedLimit + 20) && speedLimit >= 70 && speedLimit <= 120) {
		document.getElementById("answer").innerHTML = "Income-based unit fines.";
	}
	
}


         

function comparePackages() {
	
		let txtMsg = Number(document.getElementById("textMessages").value);

		let callTime = Number(document.getElementById("callTime").value);

		let specialPackage = "(" + (19.9 + txtMsg * 0.069 + callTime * 0.069).toFixed(2) + ")";

		let fullPackage =  "(" + 29.9 + ")";

		if (specialPackage < fullPackage) {
			document.getElementById("answer").innerHTML = "The Special package " + specialPackage + " is cheaper than the All-inclusive package " + fullPackage;
		} else if (specialPackage > fullPackage) {
			document.getElementById("answer").innerHTML = "The All-inclusive package " + fullPackage + " is cheaper than the Special package " + specialPackage;
		} 
		
}
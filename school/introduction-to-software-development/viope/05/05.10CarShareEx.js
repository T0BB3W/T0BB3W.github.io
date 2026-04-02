function calculateCosts() {

    let km = Number(document.getElementById("kilometers").value);

    let consumption = Number(document.getElementById("consumption").value);

	let price = Number(document.getElementById("price").value);

	let participants = Number(document.getElementById("participants").value);

    let getCost = "Fuel costs per participant is " + (consumption / 100 * price * km / participants).toFixed(2) + " euros.";

    document.getElementById("answerId").innerHTML = getCost;

}
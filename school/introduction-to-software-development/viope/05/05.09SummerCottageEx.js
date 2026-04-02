function calculateRent() {

    let rent = Number(document.getElementById("rent").value);

    let participants = Number(document.getElementById("participants").value);

    let getRent = "Rent per participants is " + (rent / participants).toFixed(2) + " euros.";

    document.getElementById("answerDiv").innerHTML = getRent;
}

function getRandomInteger(min, max) {
    let randomizedNumber = Math.floor((Math.random() * max) + min);
    return randomizedNumber;
}

function rollTheDice() {
    let diceRoll = getRandomInteger.call(this, 1, 6);
    document.getElementById("dice").innerHTML = diceRoll;
}
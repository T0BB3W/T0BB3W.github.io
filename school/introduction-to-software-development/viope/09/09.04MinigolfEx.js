let minigolf = [23, 19, 37, 20, 21, 30, 26, 24];

function showResults() {
    minigolf.sort();
    let smallestResult = minigolf[0];
    let biggestResult = minigolf[7];
    let answer = "The smallest result is " + smallestResult + " (winner).<br>The biggest result is " + biggestResult + ".";
    document.getElementById("answer").innerHTML = answer;
}
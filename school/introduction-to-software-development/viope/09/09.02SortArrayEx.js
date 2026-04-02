let array = ["Milk", "Bread", "Juice", "Eggs", "Butter", "Salt", "Oranges", "Apples"];

function sortArray() {
    array.sort();
    array.reverse();
    for(var n = 0; n <= 7; n = n + 1) {
        console.log(array[n]);
    }
}
// 09.array_example_2.js JavasScript code

var bloodTypes = ["A+", "O-", "AB+", "O+", "AB+", "AB+", "O-", "AB+", "O-", "AB+"];

function showBloodType() {

    var txtValue = document.getElementById("txtValue").value.toUpperCase();

    var calc = 0;

    for (var i = 0; i < bloodTypes.length; i++) {
        if (bloodTypes[i] == txtValue) {
            calc++;
        }
    }

    var percentage = (calc / bloodTypes.length) * 100;

    var outputText = txtValue + " " + percentage.toFixed(2) + "percent";

    document.getElementById("divOutput").innerHTML = outputText;
}

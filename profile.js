
function textTo(nextButton, text, previousD1, nextD1, output) {
    document.getElementById(nextButton).onclick = function () {

        var enteredName = document.getElementById(text).value;
        if (enteredName == "") {
            alert("Please enter your name!")
        }
        else {
            document.getElementById(previousD1).style.display = "none";
            document.getElementById(nextD1).style.display = "block";


            document.getElementById(output).innerHTML = enteredName;

        }


    }
}


function radioButton() {
    document.getElementById("next4").onclick = function () {
        // Get all radio buttons with the name 'myRadio'
        var radios = document.getElementsByName('myRadio');
        var selectedValue = null;

        // Loop through the radio buttons to find the selected one
        for (var i = 0; i < radios.length; i++) {
            if (radios[i].checked) {
                selectedValue = radios[i].value;
                break;
            }
        }

        // Check if a value is selected and show an alert
        if (selectedValue) {
            document.getElementById('outputGender').innerHTML = selectedValue;
        } else {
            alert('No option selected');
        }
    }
}







textTo('next1', 'name', 'div1Name', 'div1Surname', 'outputName');

textTo('next2', 'surname', 'div1Surname', 'div1Age', 'outputSurname');

textTo('next3', 'age', 'div1Age', 'div1Gender', 'outputAge');

radioButton();



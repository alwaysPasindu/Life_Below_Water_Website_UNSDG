
function textTo(nextButton, text, previousD1, nextD1, output, entered) {
    document.getElementById(nextButton).onclick = function () {

        var enteredName = document.getElementById(text).value;
        if (enteredName == "") {
            alert("Please enter your name!")
        }
        else {
            document.getElementById('outputDiv').style.display = "block";

            document.getElementById(previousD1).style.display = "none";
            document.getElementById(nextD1).style.display = "block";

            document.getElementById(output).style.display = "block";
            document.getElementById(entered).innerHTML = enteredName;


        }


    }
}

function skipbuttn() {
    document.getElementById('skip1').onclick = function () {
        document.getElementById('div1Name').style.display = "none";
        document.getElementById('div1Surname').style.display = "block";
        document.getElementById('outputDiv').style.display = "block";
        document.getElementById('outputName').style.display = "block";
    }
}



function next4BttnClick() {
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
            document.getElementById("outputGnder").style.display = "block";
            document.getElementById('enteredGender').innerHTML = selectedValue;
        } else {
            alert('No option selected');
        }

        document.getElementById('div1Gender').style.display = "none";
        document.getElementById('div1PrivacyTerms').style.display = "block"
    }
}

function next5BttnClick() {
    document.getElementById("next5").onclick = function () {
        var checkName = document.getElementsByName('privacyTerms');
        var selectedCheck = null;
        for (var i = 0; i < checkName.length; i++) {
            if (checkName[i].checked) {
                selectedCheck = checkName[i].value;
                break;
            }
        }
        if (selectedCheck) {
            document.getElementById("outputPrivacyTerms").style.display = "block";
            document.getElementById('enteredPrivacyTerms').innerHTML = selectedCheck;
        } else {
            alert('No option selected');
        }
    }
}






skipbuttn();
textTo('next1', 'name', 'div1Name', 'div1Surname', 'outputName', 'enteredName');

textTo('next2', 'surname', 'div1Surname', 'div1Age', 'outputSurname', 'enteredSurname',);

textTo('next3', 'age', 'div1Age', 'div1Gender', 'outputAge', 'enteredAge');

next4BttnClick();

next5BttnClick();


let progress = 0;

function updateProgress(step) {
    switch (step) {
        case 5:
            progress = 25;
            break;
        case 9:
            progress = 50;
            break;
        case 12:
            progress = 75;
            break;
        case 15:
            progress = 100;
            break;
        default:
            return;
    }

    document.getElementById('fillProgress').style.width = progress + '%';
    document.getElementById('progressText').innerText = `Profile completed ${progress}%`;
}


document.getElementById('start').onclick = function () {
    document.getElementById('start').style.display = "none";
    document.getElementById('div1Name').style.display = "block";
}


function textTo(nextButton, text, previousD1, nextD1, output, entered) {
    document.getElementById(nextButton).onclick = function () {

        var enteredName = document.getElementById(text).value;
        if (enteredName == "") {
            alert("Please enter your " + text)
        }
        else {
            document.getElementById('outputDiv').style.display = "block";

            document.getElementById(previousD1).style.display = "none";
            document.getElementById(nextD1).style.display = "block";

            document.getElementById(output).style.display = "block";
            document.getElementById(entered).innerHTML = enteredName;



            if (nextButton == 'next5') {
                document.getElementById('line1').style.display = "block";
                updateProgress(5);
            }

            if (nextButton == 'next9') {
                document.getElementById('line2').style.display = "block";
                updateProgress(9);
            }

            if (nextButton == 'next12') {
                document.getElementById('line3').style.display = "block";
                updateProgress(12);
            }

            if (nextButton == 'next15') {
                updateProgress(15);
            }


        }


    }
}

function skipbuttn(skip, previousdiv, nextdiv, previousoutput, nextoutput) {
    document.getElementById(skip).onclick = function () {
        document.getElementById(previousdiv).style.display = "none";
        document.getElementById(nextdiv).style.display = "block";
        document.getElementById(previousoutput).style.display = "block";
        document.getElementById(nextoutput).style.display = "block";

        if (skip == 'skip5') {
            updateProgress(5);
            document.getElementById('line1').style.display = "block";
        }

        if (skip == 'skip9') {
            updateProgress(9);
            document.getElementById('line1').style.display = "block";
        }

        if (skip == 'skip12') {
            updateProgress(12);
            document.getElementById('line1').style.display = "block";
        }
    }
}



function next3BttnClick() {
    document.getElementById("next3").onclick = function () {
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

            document.getElementById('div1Gender').style.display = "none";
            document.getElementById('div1PrivacyTerms').style.display = "block";
        } else {
            alert('No option selected');
            return;
        }


    }
}

function next4BttnClick() {
    document.getElementById("next4").onclick = function () {
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

            document.getElementById('div1PrivacyTerms').style.display = "none";
            document.getElementById('div1Age').style.display = "block";

        } else {
            alert('No option selected');
            return;
        }

    }
}

function next15Clicked() {
    document.getElementById('next15').onclick = function () {
        document.getElementById('outputDiv').classList.add('center');
        document.getElementById('div1Contact').style.display = "none";
        document.getElementById('edit').style.display = "block";
        document.getElementById('submit').style.display = "block";
        updateProgress(15);

    }
}



document.getElementById('edit').onclick = function () {
    document.getElementById('start').click();
    document.getElementById('outputDiv').style.display = "none";
    document.getElementById('edit').style.display = "none";
    document.getElementById('submit').style.display = "none";
    document.getElementById('outputDiv').classList.remove('center');


    // Hide all skip buttons
    // var skipButtons = document.querySelectorAll('.skip');
    // skipButtons.forEach(function (button) {
    //     button.style.display = "none";
    // });

    updateProgress(5);

}
document.getElementById('submit').onclick = function () {
    document.getElementById('edit').style.display = "none";
    document.getElementById('submit').style.display = "none";
    document.getElementById('outputDiv').style.display = "none";
    document.getElementById('successful').style.display = "block";
    document.getElementById('backHome').style.display = "block";

}

document.getElementById('backHome').addEventListener('click', function () {
    window.location.href = 'index.html';
});




textTo('next1', 'name', 'div1Name', 'div1Surname', 'outputName', 'enteredName');

textTo('next2', 'surname', 'div1Surname', 'div1Gender', 'outputSurname', 'enteredSurname',);

next3BttnClick();

next4BttnClick();

textTo('next5', 'age', 'div1Age', 'div1InspiredCause', 'outputAge', 'enteredAge');

textTo('next6', 'inspiredCause', 'div1InspiredCause', 'div1PreviousExperience', 'outputCourse', 'enterCourse')

textTo('next7', 'previousExperience', 'div1PreviousExperience', 'div1Skill', 'outputExperience', 'enterExperience')

textTo('next8', 'skill', 'div1Skill', 'div1WorkPreference', 'outputSkill', 'enterSkill')

textTo('next9', 'workPreference', 'div1WorkPreference', 'div1Education', 'outWorkPreference', 'enterWorkPreference')

textTo('next10', 'education', 'div1Education', 'div1Degree', 'outputEducation', 'enteredEducation')

textTo('next11', 'degrees', 'div1Degree', 'div1MarineConservation', 'outputDgree', 'enteredDegree')

textTo('next12', 'marineConservation', 'div1MarineConservation', 'div1Week', 'outputMarineConservation', 'enteredMarineConservation')

textTo('next13', 'week', 'div1Week', 'div1Days', 'outputWeek', 'enteredWeek')

textTo('next14', 'days', 'div1Days', 'div1Contact', 'outputDays', 'enteredDays')

textTo('next15', 'contact', 'div1Contact', 'outputDiv', 'outputContact', 'enteredContact')

next15Clicked();


skipbuttn('skip1', 'div1Name', 'div1Surname', 'outputName', 'outputSurname');
skipbuttn('skip2', 'div1Surname', 'div1Gender', 'outputSurname', 'outputGnder');
skipbuttn('skip3', 'div1Gender', 'div1PrivacyTerms', 'outputGnder', 'outputPrivacyTerms');
skipbuttn('skip4', 'div1PrivacyTerms', 'div1Age', 'outputPrivacyTerms', 'outputAge');
skipbuttn('skip5', 'div1Age', 'div1InspiredCause', 'outputPrivacyTerms', 'outputAge');

skipbuttn('skip6', 'div1InspiredCause', 'div1PreviousExperience', 'outputAge', 'outputCourse');
skipbuttn('skip7', 'div1PreviousExperience', 'div1Skill', 'outputCourse', 'outputExperience');
skipbuttn('skip8', 'div1Skill', 'div1WorkPreference', 'outputExperience', 'outputSkill');
skipbuttn('skip9', 'div1WorkPreference', 'div1Education', 'outputSkill', 'outWorkPreference');

skipbuttn('skip10', 'div1Education', 'div1Degree', 'outWorkPreference', 'outputEducation');
skipbuttn('skip11', 'div1Degree', 'div1MarineConservation', 'outputEducation', 'outputDgree');
skipbuttn('skip12', 'div1MarineConservation', 'div1Week', 'outputDgree', 'outputMarineConservation');

skipbuttn('skip13', 'div1Week', 'div1Days', 'outputDgree', 'outputMarineConservation');
skipbuttn('skip14', 'div1Days', 'div1Contact', 'outputDgree', 'outputMarineConservation');
skipbuttn('skip15', 'div1Contact', 'div1Week', 'outputDgree', 'outputMarineConservation');






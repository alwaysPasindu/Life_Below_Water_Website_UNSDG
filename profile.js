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



            if (nextButton == 'next3') {
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

            document.getElementById('div1Gender').style.display = "none";
            document.getElementById('div1PrivacyTerms').style.display = "block";
        } else {
            alert('No option selected');
            return;
        }


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

            document.getElementById('div1PrivacyTerms').style.display = "none";
            document.getElementById('div1InspiredCause').style.display = "block";

        } else {
            alert('No option selected');
            return;
        }

    }
}






textTo('next1', 'name', 'div1Name', 'div1Surname', 'outputName', 'enteredName');

textTo('next2', 'surname', 'div1Surname', 'div1Age', 'outputSurname', 'enteredSurname',);

textTo('next3', 'age', 'div1Age', 'div1Gender', 'outputAge', 'enteredAge');

next4BttnClick();

next5BttnClick();

textTo('next6', 'inspiredCause', 'div1InspiredCause', 'div1PreviousExperience', 'outputCourse', 'enterCourse')

textTo('next7', 'previousExperience', 'div1PreviousExperience', 'div1Skill', 'outputExperience', 'enterExperience')

textTo('next8', 'skill', 'div1Skill', 'div1WorkPreference', 'outputSkill', 'enterSkill')

textTo('next9', 'workPreference', 'div1WorkPreference', 'div1Education', 'outputEducation', 'enteredEducation')

textTo('next10', 'education', 'div1Education', 'div1Degree', 'outputDgree', 'enteredDegree')

textTo('next11', 'degrees', 'div1Degree', 'div1MarineConservation', 'outputMarineConservation', 'enteredMarineConservation')

textTo('next12', 'marineConservation', 'div1MarineConservation', 'div1Week', 'outputWeek', 'enteredWeek')

textTo('next13', 'week', 'div1Week', 'div1Days', 'outputDays', 'enteredDays')

textTo('next14', 'days', 'div1Days', 'div1Contact', 'outputContact', 'enteredContact')

textTo('next15', 'contact', 'div1Contact', 'outputDiv', 'outputContact', 'enteredContact')
skipbuttn();



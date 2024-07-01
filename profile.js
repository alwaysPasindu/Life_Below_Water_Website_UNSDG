
function textTo(nextButton, text, previousD1, nextD1) {
    document.getElementById(nextButton).onclick = function () {

        var enteredName = document.getElementById(text).value;
        if (enteredName == "") {
            alert("Please enter your name!")
        }
        else {
            document.getElementById(previousD1).style.display = "none";
            document.getElementById(nextD1).style.display = "block";
        }


    }
}

textTo('next1', 'name', 'div1Name', 'div1Surname');

textTo('next2', 'surname', 'div1Surname', 'div1Age');

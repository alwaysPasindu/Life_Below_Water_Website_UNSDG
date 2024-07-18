document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form");
    const nameInput = document.getElementById("username");
    const emailInput = document.getElementById("email");
    const ratingInput = document.getElementById("ratingInput");
    const opinionInput = document.getElementById("opinion");
    const previewButton = document.createElement("button");
    const confirmationMessage = document.createElement("div");

   

    form.addEventListener("submit", function (event) {
        if (!validateForm()) {
            event.preventDefault();
        } else {
            confirmationMessage.innerHTML = "<p>Thank you for your feedback!</p>";
            confirmationMessage.style.color = "aqua";
        }
    });

    function validateForm() {
        let isValid = true;
        confirmationMessage.innerHTML = "";

        // Clear previous error messages
        clearErrors();

        // Name validation
        if (nameInput.value.trim() === "") {
            showError(nameInput, "Name is required");
            isValid = false;
        }

        // Email validation
        if (emailInput.value.trim() !== "") {
            if (!validateEmail(emailInput.value)) {
                showError(emailInput, "Email is not in the correct format");
                isValid = false;
            }
        }

        // Rating validation
        if (!ratingInput.value) {
            showError(ratingInput, "Rating is required");
            isValid = false;
        }

        // Opinion validation
        if (opinionInput.value.trim() === "") {
            showError(opinionInput, "Please provide your feedback");
            isValid = false;
        }

        return isValid;
    }

    function validateEmail(email) {
        const re = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        return re.test(String(email).toLowerCase());
    }

    function showError(input, message) {
        const error = document.createElement("div");
        error.className = "error-message";
        error.innerText = message;
        error.style.color = "yellow";
        input.classList.add("error");  // Add error class for styling
        input.parentNode.appendChild(error);
    }

    function clearErrors() {
        const errors = document.querySelectorAll(".error-message");
        errors.forEach(error => error.remove());
        const errorInputs = document.querySelectorAll(".error");
        errorInputs.forEach(input => input.classList.remove("error"));
    }

    function previewForm() {
        const previewContainer = document.createElement("div");
        previewContainer.innerHTML = `
            <h2>Preview</h2>
            <p><strong>Name:</strong> ${nameInput.value}</p>
            <p><strong>Email:</strong> ${emailInput.value}</p>
            <p><strong>Rating:</strong> ${ratingInput.value}</p>
            <p><strong>Feedback:</strong> ${opinionInput.value}</p>
            <button id="edit">Edit</button>
            <button id="confirm">Confirm</button>
        `;
        form.style.display = "none";
        document.body.appendChild(previewContainer);

        document.getElementById("edit").addEventListener("click", function () {
            previewContainer.remove();
            form.style.display = "block";
        });

        document.getElementById("confirm").addEventListener("click", function () {
            previewContainer.remove();
            form.submit();
        });
    }
});

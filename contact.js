/* =========================================================
  SIDE NAVBAR 
========================================================= */
const menu = document.getElementById("menuBtn")
const canclebtn = document.getElementById("side_cancle")

menu.addEventListener("click", function () {
    var sidebar = document.querySelector(".side_navbar")
    sidebar.style.left = "0px"
})

canclebtn.addEventListener("click", function () {
    var sidebar = document.querySelector(".side_navbar")
    sidebar.style.left = "-75%"
})

const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const message = document.getElementById("message");
const terms = document.getElementById("terms");

const sendButton = document.getElementById("sendButton");
const successMessage = document.getElementById("successMessage");


sendButton.addEventListener("click", function () {

    // Clear previous errors
    clearErrors();


    let valid = true;


    // First Name
    if (firstName.value.trim() === "") {

        showError(
            "firstNameError",
            "Please enter your first name"
        );

        valid = false;
    }


    // Last Name
    if (lastName.value.trim() === "") {

        showError(
            "lastNameError",
            "Please enter your last name"
        );

        valid = false;
    }


    // Email
    if (email.value.trim() === "") {

        showError(
            "emailError",
            "Please enter your email address"
        );

        valid = false;

    } else if (!validateEmail(email.value.trim())) {

        showError(
            "emailError",
            "Please enter a valid email"
        );

        valid = false;
    }


    // Phone
    if (phone.value.trim() === "") {

        showError(
            "phoneError",
            "Please enter your phone number"
        );

        valid = false;

    } else if (phone.value.trim().length < 10) {

        showError(
            "phoneError",
            "Please enter a valid phone number"
        );

        valid = false;
    }


    // Subject
    if (subject.value === "") {

        showError(
            "subjectError",
            "Please select a subject"
        );

        valid = false;
    }


    // Message
    if (message.value.trim() === "") {

        showError(
            "messageError",
            "Please enter your message"
        );

        valid = false;
    }


    // Terms
    if (!terms.checked) {

        showError(
            "termsError",
            "Please accept the terms"
        );

        valid = false;
    }


    // If form is valid
    if (valid) {

        successMessage.classList.add("show");

        sendButton.innerHTML = `
            <i class="fa-solid fa-check"></i>
            <span>SENT SUCCESSFULLY</span>
        `;


        // Clear form
        firstName.value = "";
        lastName.value = "";
        email.value = "";
        phone.value = "";
        subject.value = "";
        message.value = "";
        terms.checked = false;


        // Reset button after 3 seconds
        setTimeout(function () {

            successMessage.classList.remove("show");

            sendButton.innerHTML = `
                <i class="fa-solid fa-paper-plane"></i>
                <span>SEND MESSAGE</span>
            `;

        }, 3000);

    }

});


/* Show error */

function showError(id, text) {

    document.getElementById(id).textContent = text;

}


/* Clear errors */

function clearErrors() {

    const errors = document.querySelectorAll(".error");

    errors.forEach(function (error) {

        error.textContent = "";

    });

}


/* Email validation */

function validateEmail(email) {

    const pattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return pattern.test(email);

}

const menuBtn = document.getElementById("menuBtn");
const desktopNav = document.getElementById("desktopNav");

menuBtn.addEventListener("click", function () {

    desktopNav.classList.toggle("active");

    // Change menu icon
    const icon = menuBtn.querySelector("i");

    if (desktopNav.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }

});
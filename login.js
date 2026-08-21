
var container1 = document.querySelector(".container-1");
var container2 = document.querySelector(".container-2");
var signupclick = document.querySelector(".signup-btn");
var loginclick = document.querySelector(".login-click");
var password = document.getElementById("password");
var toggle = document.getElementById("togglepassword");
var names = document.getElementById("name");
var password = document.getElementById("password");
var loginbtn = document.querySelector(".login-btns");
var error = document.getElementById("error");
var remember = document.getElementById("confirm");


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


signupclick.addEventListener("click", function () {
    container1.style.display = "none";
    container2.style.display = "block";
})


loginclick.addEventListener("click", function () {
    container1.style.display = "block";
    container2.style.display = "none";
})


toggle.addEventListener("click", function () {
    if (password.type === "password") {
        password.type = "text";
        toggle.classList.remove("fa-eye-slash");
        toggle.classList.add("fa-eye");
    }
    else {
        password.type = "password";
        toggle.classList.remove("fa-eye");
        toggle.classList.add("fa-eye-slash");
    }
})

var savedname = localStorage.getItem("email");
var savedpassword = localStorage.getItem("passwords")

loginbtn.addEventListener("click", function () {

    if (names.value === "" || password.value === "") {

        error.textContent = "Please fill in all fields";
        error.style.color = "red";

    }
    else if (names.value.trim() === savedname && password.value.trim() === savedpassword) {

        error.textContent = "Login Successfully";
        error.style.color = "green";
        error.style.fontWeight = "700";
        if (remember.checked) {
            localStorage.getItem("remembereduser", name.value);
        }
        else {
            localStorage.removeItem("remembereduser");
        }
        setTimeout(function () {
            window.location.href = "index.html";
        }, 1500);



    }
    else {

        error.textContent = "Invalid username or password";
        error.style.color = "red";
    }
});

names.addEventListener("input", function () {
    error.textContent = "";
    error.style.color = "";
});

password.addEventListener("input", function () {
    error.textContent = "";
    error.style.color = "";
});


//signup page

var fullname = document.getElementById("full name");
var email = document.getElementById("email address");
var number = document.getElementById("phone number");
var passwords = document.getElementById("passwords");
var confirmpassword = document.getElementById("confirm password");
var error2 = document.getElementById("error2");
var agree = document.getElementById("agree");
var signupbtns = document.querySelector(".signup-btns");
var toggleSignupPassword = document.getElementById("toggleSignupPassword");
var toggleConfirmPassword = document.getElementById("toggleConfirmPassword");


signupbtns.addEventListener("click", function (event) {

    if (fullname.value === "" || email.value === "" || number.value === "" || passwords.value === "" || confirmpassword.value === "") {
        error2.textContent = "Please fill in all field";
        error2.style.color = "red";
    }

    else if (!email.value.includes("@gmail.com")) {
        error2.textContent = "Please enter a valid email";
        error2.style.color = "red";
    }

    else if (!/^\d{10}$/.test(number.value)) {
        error2.textContent = "Please enter 10 digit number"
        error2.style.color = "red";
    }

    else if (!/\d/.test(passwords.value)) {
        error2.textContent = "Password must contain atleast 8 character";
        error2.style.color = "red";
    }

    else if (passwords.value !== confirmpassword.value) {

        error2.textContent = "Passwords do not match";
        error2.style.color = "red";
    }
    else {
        error2.textContent = "SignUp successfully";
        error2.style.color = "green";

        setTimeout(function () {
            window.location.href = "login.html";
        }, 1500);

        localStorage.setItem("fullname", fullname.value);
        localStorage.setItem("email", email.value);
        localStorage.setItem("number", number.value);
        localStorage.setItem("passwords", passwords.value);
        localStorage.setItem("confirmpassword", confirmpassword.value);

    }
})

toggleSignupPassword.addEventListener("click", function () {
    if (passwords.type === "password") {
        passwords.type = "text";
        toggleSignupPassword.classList.remove("fa-eye-slash");
        toggleSignupPassword.classList.add("fa-eye");
    }
    else {
        passwords.type = "password";
        toggleSignupPassword.classList.remove("fa-eye");
        toggleSignupPassword.classList.add("fa-eye-slash");
    }
})

toggleConfirmPassword.addEventListener("click", function () {
    if (confirmpassword.type === "password") {
        confirmpassword.type = "text";
        toggleConfirmPassword.classList.remove("fa-eye-slash");
        toggleConfirmPassword.classList.add("fa-eye");
    }
    else {
        confirmpassword.type = "password";
        toggleConfirmPassword.classList.remove("fa-eye");
        toggleConfirmPassword.classList.add("fa-eye-slash");
    }
})

agree.addEventListener("change", function () {
    signupbtns.disabled = !agree.checked;
})







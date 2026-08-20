/* =========================================
   MOBILE MENU
========================================= */

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", function () {

    hamburger.classList.toggle("active");

    navMenu.classList.toggle("active");

});


/* =========================================
   CLOSE MOBILE MENU WHEN LINK CLICKED
========================================= */

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        hamburger.classList.remove("active");

        navMenu.classList.remove("active");

    });

});


/* =========================================
   BOOK NOW BUTTONS
========================================= */

const bookButtons = document.querySelectorAll(".book-btn");

bookButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const offerName =
            button.getAttribute("data-offer");

        alert(
            "You selected: " +
            offerName +
            "\n\nRedirecting to ticket booking..."
        );

    });

});


/* =========================================
   TOP BOOK TICKETS
========================================= */

const topTicketBtn =
    document.getElementById("topTicketBtn");

if (topTicketBtn) {

    topTicketBtn.addEventListener("click", function () {

        alert(
            "Welcome to CSK Ticket Booking!\n\n" +
            "Select your match and continue."
        );

    });

}


/* =========================================
   VIEW ALL MATCHES
========================================= */

const matchesBtn =
    document.getElementById("matchesBtn");

if (matchesBtn) {

    matchesBtn.addEventListener("click", function () {

        alert(
            "Opening all CSK matches..."
        );

    });

}


/* =========================================
   CARD CLICK ANIMATION
========================================= */

const offerCards =
    document.querySelectorAll(".offer-card");

offerCards.forEach(function (card) {

    card.addEventListener("click", function (event) {

        /*
         Prevent animation when clicking
         directly on Book Now button.
        */

        if (
            event.target.closest(".book-btn")
        ) {
            return;
        }

        card.classList.add("selected-card");

        setTimeout(function () {

            card.classList.remove("selected-card");

        }, 400);

    });

});


/* =========================================
   CLOSE MENU WHEN CLICKING OUTSIDE
========================================= */

document.addEventListener("click", function (event) {

    if (
        !event.target.closest(".navbar")
    ) {

        hamburger.classList.remove("active");

        navMenu.classList.remove("active");

    }

});


/* =========================================
   PREVENT EMPTY LINKS
========================================= */

const allLinks =
    document.querySelectorAll("a[href='#']");

allLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        event.preventDefault();

    });

});
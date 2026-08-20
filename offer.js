document.addEventListener("DOMContentLoaded", function () {

    /* ==========================================
       MOBILE MENU
    ========================================== */

    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("navMenu");

    if (hamburger && navMenu) {

        hamburger.addEventListener("click", function (event) {

            event.stopPropagation();

            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");

        });

    }



    /* ==========================================
       NAVIGATION LINKS
    ========================================== */

    const navLinks = document.querySelectorAll(".nav-menu a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            if (hamburger) {
                hamburger.classList.remove("active");
            }

            if (navMenu) {
                navMenu.classList.remove("active");
            }

        });

    });


    /* ==========================================
       BOOK NOW BUTTONS
    ========================================== */

    const bookButtons =
        document.querySelectorAll(".book-btn");

    bookButtons.forEach(function (button) {

        button.addEventListener("click", function (event) {

            event.preventDefault();

            const offerName =
                button.getAttribute("data-offer") ||
                "Selected Offer";

            alert(
                "You selected:\n\n" +
                offerName +
                "\n\n" +
                "Redirecting to CSK Ticket Booking..."
            );

        });

    });


    /* ==========================================
       TOP BOOK TICKETS BUTTON
    ========================================== */

    const topTicketBtn =
        document.getElementById("topTicketBtn");

    if (topTicketBtn) {

        topTicketBtn.addEventListener("click", function () {

            alert(
                "CSK Ticket Booking\n\n" +
                "Please select your match to continue."
            );

        });

    }


    /* ==========================================
       VIEW ALL MATCHES BUTTON
    ========================================== */

    const matchesBtn =
        document.getElementById("matchesBtn");

    if (matchesBtn) {

        matchesBtn.addEventListener("click", function () {

            alert(
                "Opening All CSK Matches..."
            );

        });

    }


    /* ==========================================
       OFFER CARD CLICK
    ========================================== */

    const offerCards =
        document.querySelectorAll(".offer-card");

    offerCards.forEach(function (card) {

        card.addEventListener("click", function (event) {

            // Don't run when Book Now is clicked
            if (event.target.closest(".book-btn")) {
                return;
            }

            card.style.transform = "translateY(-8px)";

            setTimeout(function () {

                card.style.transform = "";

            }, 300);

        });

    });


    /* ==========================================
       CLOSE MOBILE MENU OUTSIDE
    ========================================== */

    document.addEventListener("click", function (event) {

        if (
            hamburger &&
            navMenu &&
            !event.target.closest(".navbar")
        ) {

            hamburger.classList.remove("active");

            navMenu.classList.remove("active");

        }

    });


    /* ==========================================
       SEARCH BUTTON
    ========================================== */

    const searchButton =
        document.querySelector(".search-icon");

    if (searchButton) {

        searchButton.addEventListener("click", function () {

            alert("Search feature opened.");

        });

    }


    /* ==========================================
       USER / ACCOUNT BUTTON
    ========================================== */

    const userButton =
        document.querySelector(".user-icon");

    if (userButton) {

        userButton.addEventListener("click", function () {

            alert(
                "Login / Sign Up\n\n" +
                "Please login to continue."
            );

        });

    }


    /* ==========================================
       SMOOTH SCROLL
    ========================================== */

    const internalLinks =
        document.querySelectorAll('a[href^="#"]');

    internalLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId =
                link.getAttribute("href");

            if (
                !targetId ||
                targetId === "#"
            ) {
                return;
            }

            const target =
                document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


    /* ==========================================
       CONSOLE MESSAGE
    ========================================== */

    console.log(
        "CSK Offers Page JavaScript Loaded Successfully."
    );

});
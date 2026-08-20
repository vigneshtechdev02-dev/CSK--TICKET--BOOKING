/* =========================================================
   CSK MEMBERSHIP PAGE
   Complete JavaScript
========================================================= */


/* =========================================================
   HELPER FUNCTION
========================================================= */

const $ = (selector) => {
    return document.querySelector(selector);
};

const $$ = (selector) => {
    return [...document.querySelectorAll(selector)];
};


/* =========================================================
   TOAST MESSAGE
========================================================= */

const toast = (message) => {

    const toastElement = $("#toast");

    if (!toastElement) return;

    toastElement.textContent = message;

    toastElement.classList.add("show");

    clearTimeout(window.toastTimer);

    window.toastTimer = setTimeout(() => {

        toastElement.classList.remove("show");

    }, 2200);

};


/* =========================================================
  SIDE NAVBAR
========================================================= */
const menu = document.getElementById("menuBtn")
const canclebtn = document.getElementById("side_cancle")

if (menu && canclebtn) {

    menu.addEventListener("click", function () {
        var sidebar = document.querySelector(".side_navbar")
        sidebar.style.left = "0px"
    })

    canclebtn.addEventListener("click", function () {
        var sidebar = document.querySelector(".side_navbar")
        sidebar.style.left = "-75%"
    })

}


/* =========================================================
   SEARCH
========================================================= */

const searchButton = $(".search-btn");
const searchPanel = $("#searchPanel");
const searchInput = $("#searchInput");
const searchClose = $("#searchClose");


/* Open Search */

if (searchButton) {

    searchButton.addEventListener("click", () => {

        searchPanel.classList.add("open");

        setTimeout(() => {

            searchInput.focus();

        }, 100);

    });

}


/* Close Search */

if (searchClose) {

    searchClose.addEventListener("click", () => {

        searchPanel.classList.remove("open");

    });

}


/* Search */

if (searchInput) {

    searchInput.addEventListener("keydown", (event) => {

        if (event.key === "Enter") {

            const searchValue =
                searchInput.value.trim();

            if (searchValue === "") {

                toast("Please enter something to search.");

                return;

            }

            toast(`Searching for "${searchValue}"...`);

        }

    });

}


/* =========================================================
   LOGIN / SIGN UP
========================================================= */

const loginButton = $("#loginBtn");

if (loginButton) {

    loginButton.addEventListener("click", () => {

        toast("Login / Sign Up selected");

    });

}


/* =========================================================
   SHOPPING CART
========================================================= */

let cartCount = 0;

const cartCountElement = $("#cartCount");

const cartButton = $(".cart-btn");

if (cartButton) {

    cartButton.addEventListener("click", () => {

        if (cartCount === 0) {

            toast("Your cart is empty");

        } else {

            toast(
                `${cartCount} ticket${cartCount > 1 ? "s" : ""} in your cart`
            );

        }

    });

}


/* =========================================================
   MEMBERSHIP PLANS - JOIN NOW
========================================================= */

$$(".join-btn").forEach((button) => {

    button.addEventListener("click", () => {

        const plan = button.dataset.plan || "Membership";

        toast(`${plan} plan selected`);

    });

});


/* =========================================================
   FOOTER LINKS
========================================================= */

$$(".footer a, .socials a").forEach((link) => {

    link.addEventListener("click", (event) => {

        const href =
            link.getAttribute("href");

        if (href === "#") {

            event.preventDefault();

            toast(
                "This demo link is ready for your page URL"
            );

        }

    });

});


/* =========================================================
   ESC KEY
========================================================= */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        if (searchPanel) {

            searchPanel.classList.remove("open");

        }

    }

});


/* =========================================================
   CLOSE SEARCH WHEN CLICKING OUTSIDE
========================================================= */

document.addEventListener("click", (event) => {

    if (!searchPanel || !searchButton) return;

    const clickedInsideSearch =
        searchPanel.contains(event.target);

    const clickedSearchButton =
        searchButton.contains(event.target);

    if (
        searchPanel.classList.contains("open") &&
        !clickedInsideSearch &&
        !clickedSearchButton
    ) {

        searchPanel.classList.remove("open");

    }

});


/* =========================================================
   PREVENT EMPTY SEARCH FORM
========================================================= */

if (searchInput) {

    searchInput.addEventListener(
        "input",
        () => {

            searchInput.value =
                searchInput.value.replace(
                    /^\s+/,
                    ""
                );

        }
    );

}


/* =========================================================
   PAGE LOAD
========================================================= */

window.addEventListener("load", () => {

    document.body.classList.add(
        "page-loaded"
    );

});

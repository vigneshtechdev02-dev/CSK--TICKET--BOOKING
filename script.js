/* =========================================================
   CSK TICKET BOOKING WEBSITE
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

menu.addEventListener("click",function(){
    var sidebar = document.querySelector(".side_navbar")
    sidebar.style.left = "0px"
})

canclebtn.addEventListener("click",function(){
    var sidebar = document.querySelector(".side_navbar")
    sidebar.style.left = "-75%"
})


/* =========================================================
   HERO BUTTON SCROLL
========================================================= */

$$("[data-scroll]").forEach((button) => {

    button.addEventListener("click", () => {

        const target = button.dataset.scroll;

        const section = document.querySelector(target);

        if (section) {

            section.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


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


/* Book Now Buttons */

$$(".book-btn").forEach((button) => {

    button.addEventListener("click", () => {

        cartCount++;

        if (cartCountElement) {

            cartCountElement.textContent =
                cartCount;

        }

        toast("Ticket added to cart");

    });

});


/* =========================================================
   CART BUTTON
========================================================= */

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
   COUPON CODE
========================================================= */

const couponButton = $("#couponBtn");

if (couponButton) {

    couponButton.addEventListener("click", async () => {

        const coupon = "WHISTLEPODU";

        try {

            await navigator.clipboard.writeText(coupon);

            toast(
                "Coupon code WHISTLEPODU copied"
            );

        } catch (error) {

            toast(
                "Coupon Code: WHISTLEPODU"
            );

        }

    });

}


/* =========================================================
   VIEW ALL MATCHES
========================================================= */

const viewAllButton = $("#viewAllBtn");

if (viewAllButton) {

    viewAllButton.addEventListener("click", () => {

        toast("Showing all upcoming matches");

    });

}


/* =========================================================
   MATCH SLIDER
========================================================= */

const matchTrack = $("#matchTrack");

const nextMatchButton = $("#nextMatch");

const previousMatchButton = $("#prevMatch");


/* Next */

if (nextMatchButton && matchTrack) {

    nextMatchButton.addEventListener("click", () => {

        matchTrack.scrollBy({

            left: matchTrack.clientWidth * 0.78,

            behavior: "smooth"

        });

    });

}


/* Previous */

if (previousMatchButton && matchTrack) {

    previousMatchButton.addEventListener("click", () => {

        matchTrack.scrollBy({

            left: -matchTrack.clientWidth * 0.78,

            behavior: "smooth"

        });

    });

}


/* =========================================================
   NEWSLETTER
========================================================= */

const newsletterForm =
    $("#newsletterForm");

const emailInput =
    $("#emailInput");


if (newsletterForm) {

    newsletterForm.addEventListener(
        "submit",
        (event) => {

            event.preventDefault();

            const email =
                emailInput.value.trim();

            if (email === "") {

                toast("Please enter your email.");

                return;

            }

            toast("Subscribed successfully!");

            newsletterForm.reset();

        }
    );

}


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

        if (mobileMenu) {

            mobileMenu.classList.remove("open");

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
   ACTIVE NAVIGATION
========================================================= */

const sections = $$("main section[id]");

const navLinks = $$(".desktop-nav a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop =
            section.offsetTop - 120;

        if (
            window.scrollY >= sectionTop
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navLinks.forEach((link) => {

        link.classList.remove("active");

        const href =
            link.getAttribute("href");

        if (
            href === `#${currentSection}`
        ) {

            link.classList.add("active");

        }

    });

});


/* =========================================================
   RESPONSIVE MATCH SLIDER
========================================================= */

let touchStartX = 0;
let touchEndX = 0;

if (matchTrack) {

    matchTrack.addEventListener(
        "touchstart",
        (event) => {

            touchStartX =
                event.changedTouches[0].screenX;

        },
        { passive: true }
    );


    matchTrack.addEventListener(
        "touchend",
        (event) => {

            touchEndX =
                event.changedTouches[0].screenX;

            const difference =
                touchStartX - touchEndX;


            if (Math.abs(difference) < 50) {

                return;

            }


            if (difference > 0) {

                matchTrack.scrollBy({

                    left: matchTrack.clientWidth * 0.78,

                    behavior: "smooth"

                });

            } else {

                matchTrack.scrollBy({

                    left: -matchTrack.clientWidth * 0.78,

                    behavior: "smooth"

                });

            }

        },
        { passive: true }
    );

}


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
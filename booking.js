/* =========================================================
   CSK TICKET BOOKING - JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       VARIABLES
    ===================================================== */

    var seats = document.querySelectorAll(".seat");
    var selectedSeats = [];

    var selectedSeatsElement = document.getElementById("selectedSeats");
    var selectedCategoryElement = document.getElementById("selectedCategory");
    var pricePerTicketElement = document.getElementById("pricePerTicket");
    var ticketQuantityElement = document.getElementById("ticketQuantity");
    var convenienceFeeElement = document.getElementById("convenienceFee");
    var totalAmountElement = document.getElementById("totalAmount");
    var selectedBadge = document.getElementById("selectedBadge");

    var plusBtn = document.getElementById("plusBtn");
    var minusBtn = document.getElementById("minusBtn");

    var cartCount = document.getElementById("cartCount");
    var continueBtn = document.getElementById("continueBtn");

    var toast = document.getElementById("toast");

    var stadium = document.getElementById("stadium");
    var zoomIn = document.getElementById("zoomIn");
    var zoomOut = document.getElementById("zoomOut");

    var searchBtn = document.querySelector(".search-btn");
    var searchPanel = document.getElementById("searchPanel");
    var searchClose = document.getElementById("searchClose");
    var searchInput = document.getElementById("searchInput");

    var menuBtn = document.getElementById("menuBtn");
    var sideNavbar = document.querySelector(".side_navbar");
    var sideCancel = document.getElementById("side_cancle");

    var loginBtn = document.getElementById("loginBtn");


    /* =====================================================
       BOOKING SETTINGS
    ===================================================== */

    var convenienceFee = 50;

    var zoomLevel = 1;

    var maxZoom = 1.4;
    var minZoom = 0.7;
    var zoomStep = 0.1;


    /* =====================================================
       TOAST MESSAGE
    ===================================================== */

    function showToast(message) {

        if (!toast) {
            return;
        }

        toast.textContent = message;

        toast.classList.add("show");

        setTimeout(function () {
            toast.classList.remove("show");
        }, 2500);
    }


    /* =====================================================
       SEAT SELECTION
    ===================================================== */

    seats.forEach(function (seat) {

        seat.addEventListener("click", function () {

            /* Sold seat cannot be selected */

            if (seat.classList.contains("sold")) {

                showToast("This seat is already sold out.");

                return;
            }


            var seatNumber = seat.dataset.seat;
            var category = seat.dataset.category;
            var price = Number(seat.dataset.price);
            


            /* Check if seat already selected */

            var existingSeat = selectedSeats.find(function (item) {
                return item.seat === seatNumber;
            });


            /* Remove seat */

            if (existingSeat) {

                selectedSeats = selectedSeats.filter(function (item) {
                    return item.seat !== seatNumber;
                });

                seat.classList.remove("selected");

                showToast(seatNumber + " removed.");

            }

            /* Select seat */

            else {

                selectedSeats.push({
                    seat: seatNumber,
                    category: category,
                    price: price
                });

                seat.classList.add("selected");

                showToast(seatNumber + " selected.");

            }


            updateBooking();

        });

    });


    /* =====================================================
       UPDATE BOOKING SUMMARY
    ===================================================== */

    function updateBooking() {

        var quantity = selectedSeats.length;


        /* No seats selected */

        if (quantity === 0) {

            selectedSeatsElement.textContent = "—";

            selectedCategoryElement.textContent = "—";

            pricePerTicketElement.textContent = "₹0";

            ticketQuantityElement.textContent = "0";

            convenienceFeeElement.textContent = "₹0";

            totalAmountElement.textContent = "₹0";

            selectedBadge.textContent = "0 Seats Selected ✓";

            cartCount.textContent = "0";

            return;
        }


        /* Seat numbers */

        var seatNames = selectedSeats.map(function (item) {
            return item.seat;
        });

        selectedSeatsElement.textContent = seatNames.join(", ");


        /* Categories */

        var categories = selectedSeats.map(function (item) {
            return item.category;
        });

        var uniqueCategories = [...new Set(categories)];

        if (uniqueCategories.length === 1) {

            selectedCategoryElement.textContent =
                uniqueCategories[0];

        } else {

            selectedCategoryElement.textContent =
                "Multiple";

        }


        /* Price */

        var totalTicketPrice = selectedSeats.reduce(
            function (total, item) {
                return total + item.price;
            },
            0
        );


        /* Average price per ticket */

        var averagePrice =
            Math.round(totalTicketPrice / quantity);


        pricePerTicketElement.textContent =
            "₹" + averagePrice.toLocaleString("en-IN");


        /* Quantity */

        ticketQuantityElement.textContent = quantity;


        /* Convenience fee */

        var totalConvenienceFee =
            convenienceFee * quantity;

        convenienceFeeElement.textContent =
            "₹" + totalConvenienceFee.toLocaleString("en-IN");


        /* Final total */

        var finalTotal =
            totalTicketPrice + totalConvenienceFee;


        totalAmountElement.textContent =
            "₹" + finalTotal.toLocaleString("en-IN");


        /* Badge */

        selectedBadge.textContent =
            quantity + " Seat" +
            (quantity > 1 ? "s" : "") +
            " Selected ✓";


        /* Cart */

        cartCount.textContent = quantity;

    }


    /* =====================================================
       PLUS BUTTON
    ===================================================== */

    plusBtn.addEventListener("click", function () {

        showToast("Please select a seat from the stadium.");

    });


    /* =====================================================
       MINUS BUTTON
    ===================================================== */

    minusBtn.addEventListener("click", function () {

        if (selectedSeats.length === 0) {

            showToast("No seats selected.");

            return;
        }


        /* Remove the last selected seat */

        var lastSeat =
            selectedSeats[selectedSeats.length - 1];


        selectedSeats.pop();


        var seatButton =
            document.querySelector(
                '[data-seat="' + lastSeat.seat + '"]'
            );


        if (seatButton) {
            seatButton.classList.remove("selected");
        }


        showToast(lastSeat.seat + " removed.");

        updateBooking();

    });


    /* =====================================================
       ZOOM IN
    ===================================================== */

    zoomIn.addEventListener("click", function () {

        if (zoomLevel < maxZoom) {

            zoomLevel += zoomStep;

            stadium.style.transform =
                "scale(" + zoomLevel + ")";

        }

    });


    /* =====================================================
       ZOOM OUT
    ===================================================== */

    zoomOut.addEventListener("click", function () {

        if (zoomLevel > minZoom) {

            zoomLevel -= zoomStep;

            stadium.style.transform =
                "scale(" + zoomLevel + ")";

        }

    });


    /* =====================================================
       SEARCH OPEN
    ===================================================== */

    searchBtn.addEventListener("click", function () {

        searchPanel.classList.add("open");

        searchInput.focus();

    });


    /* =====================================================
       SEARCH CLOSE
    ===================================================== */

    searchClose.addEventListener("click", function () {

        searchPanel.classList.remove("open");

        searchInput.value = "";

    });


    /* =====================================================
       SEARCH FUNCTION
    ===================================================== */

    searchInput.addEventListener("keyup", function () {

        var searchValue =
            searchInput.value.toLowerCase().trim();


        if (searchValue === "") {
            return;
        }


        if (
            searchValue.includes("vip") ||
            searchValue.includes("premium") ||
            searchValue.includes("grand") ||
            searchValue.includes("family") ||
            searchValue.includes("general") ||
            searchValue.includes("seat")
        ) {

            showToast("Seat categories are available below.");

        }

        else if (
            searchValue.includes("ticket") ||
            searchValue.includes("match")
        ) {

            showToast("CSK vs MI ticket booking available.");

        }

        else if (
            searchValue.includes("offer")
        ) {

            showToast("Check our latest ticket offers.");

        }

        else {

            showToast("No matching result found.");

        }

    });


    /* =====================================================
       MOBILE SIDE NAVBAR OPEN
    ===================================================== */

    menuBtn.addEventListener("click", function () {

        sideNavbar.style.left = "0";

    });


    /* =====================================================
       MOBILE SIDE NAVBAR CLOSE
    ===================================================== */

    sideCancel.addEventListener("click", function () {

        sideNavbar.style.left = "-75%";

    });


    /* =====================================================
       CLOSE SIDEBAR WHEN LINK CLICKED
    ===================================================== */

    var sideLinks =
        document.querySelectorAll(".side_navbar_para a");


    sideLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            sideNavbar.style.left = "-75%";

        });

    });


    /* =====================================================
       LOGIN BUTTON
    ===================================================== */

    loginBtn.addEventListener("click", function () {

        showToast("Login / Sign Up page coming soon.");

    });


    /* =====================================================
       CONTINUE BUTTON
    ===================================================== */

    continueBtn.addEventListener("click", function () {

        if (selectedSeats.length === 0) {

            showToast("Please select at least one seat.");

            return;
        }


        var seatNames = selectedSeats.map(function (item) {
            return item.seat;
        });


        var total = selectedSeats.reduce(
            function (sum, item) {
                return sum + item.price;
            },
            0
        );


        total += convenienceFee * selectedSeats.length;


        showToast(
            "Seats " +
            seatNames.join(", ") +
            " selected. Total ₹" +
            total.toLocaleString("en-IN")
        );


        /* You can redirect to ticket-details.html later */

        setTimeout(function () {

            // window.location.href = "ticket-details.html";

        }, 1000);

    });


    /* =====================================================
       CART BUTTON
    ===================================================== */

    var cartBtn =
        document.querySelector(".cart-btn");


    cartBtn.addEventListener("click", function () {

        if (selectedSeats.length === 0) {

            showToast("Your cart is empty.");

            return;
        }


        var seatNames = selectedSeats.map(function (item) {
            return item.seat;
        });


        showToast(
            seatNames.length +
            " ticket(s) in your cart."
        );

    });


    /* =====================================================
       ESCAPE KEY
    ===================================================== */

    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {

            searchPanel.classList.remove("open");

            sideNavbar.style.left = "-75%";

        }

    });


    /* =====================================================
       INITIAL UPDATE
    ===================================================== */

    updateBooking();

});
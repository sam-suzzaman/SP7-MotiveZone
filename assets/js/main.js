// =======================================
// JQUERY READY FUNCTION WITH STRICT MODE
// ========================================
(function ($) {
    "use strict";
    // all jquery codes are written from below=========


    //  for media partner
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    })

})(jQuery);


//  for responsive menu
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})
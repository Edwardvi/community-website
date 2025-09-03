document.addEventListener('DOMContentLoaded', function() {

    // Smooth scroll for the CTA button
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }

    // Parallax effect for the background
    const background = document.querySelector('.background-container');
    if (background) {
        window.addEventListener('scroll', function() {
            const scrollPosition = window.pageYOffset;
            // The '0.5' value can be adjusted to change the speed of the parallax effect
            background.style.transform = 'translateY(' + scrollPosition * 0.5 + 'px)';
        });
    }

});

    // Accordion functionality for FAQ
    const detailsElements = document.querySelectorAll('.faq-container details');
    if (detailsElements.length > 0) {
        detailsElements.forEach((details) => {
            details.addEventListener('toggle', (event) => {
                if (details.open) {
                    detailsElements.forEach((otherDetails) => {
                        if (otherDetails !== details && otherDetails.open) {
                            otherDetails.open = false;
                        }
                    });
                }
            });
        });
    }
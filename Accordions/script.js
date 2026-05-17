const itemHeaders = document.querySelectorAll('.accordion-item-header');

itemHeaders.forEach((accordion) => {
    accordion.addEventListener("click", collapseAccordions);

    function collapseAccordions() {
        const activeAccordions = document.querySelector(".active");

        if (activeAccordions && activeAccordions !== accordion) {
            activeAccordions.classList.toggle('active');
            activeAccordions.nextElementSibling.style.maxHeight = 0;
        }

        accordion.classList.toggle('active');
        const accordionItemBody = accordion.nextElementSibling;

        if (accordion.classList.contains('active')) {
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
        } else {
            accordionItemBody.style.maxHeight = 0;
        }
    }
});
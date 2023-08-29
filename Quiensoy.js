function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

function animateElementsOnScroll() {
    var columna3 = document.querySelector('.columna3');
    var columna4 = document.querySelector('.columna4');

    if (isElementInViewport(columna3)) {
        columna3.classList.add('animate');
    }
    if (isElementInViewport(columna4)) {
        columna4.classList.add('animate');
    }
}

window.addEventListener('scroll', animateElementsOnScroll);

document.addEventListener('DOMContentLoaded', () => {
    const isElementInViewport = (element) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    const handleScroll = () => {
        const fadeInElements = document.querySelectorAll('.fade-in');
        fadeInElements.forEach((element) => {
            if (isElementInViewport(element)) {
                element.classList.add('visible');
            }
        });
    };

    // Initial check
    handleScroll();

    // Event listener for scroll
    window.addEventListener('scroll', handleScroll);
});

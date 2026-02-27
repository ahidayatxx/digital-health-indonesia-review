// Initialize Lucide Icons
lucide.createIcons();

document.addEventListener('DOMContentLoaded', () => {
    // Scroll Animations
    const animatedElements = document.querySelectorAll('[data-animate]');
    
    // Create the observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Once the element is visible
            if (entry.isIntersecting) {
                // Add the animation class
                entry.target.classList.add('is-visible');
                // Unobserve the element so animation only happens once
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,   // Trigger when 10% of element is visible
        rootMargin: "0px" // Add margin if needed
    });
    
    // Observer all elements with [data-animate] attribute
    animatedElements.forEach(element => {
        observer.observe(element);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
                observer.unobserve(entry.target); // Stop observing once animation is triggered
            }
        });
    }, {
        threshold: 0.4, // Trigger when 40% of the element is visible
        rootMargin: '0px' // No margin
    });

    // Observe all tech stack icons
    document.querySelectorAll('.tech-stack-item').forEach(item => {
        observer.observe(item);
    });
}); 
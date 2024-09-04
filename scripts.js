document.addEventListener('DOMContentLoaded', () => {
    // Testimonial Carousel
    const testimonials = document.querySelectorAll('.testimonial-item');
    let currentIndex = 0;

    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            testimonial.style.transform = `translateX(${(i - index) * 100}%)`;
        });
    }

    setInterval(() => {
        currentIndex = (currentIndex + 1) % testimonials.length;
        showTestimonial(currentIndex);
    }, 3000);

    // Initialize Google Map
    function initMap() {
        const mapOptions = {
            center: { lat: 37.7749, lng: -122.4194 }, // Example coordinates
            zoom: 12
        };
        const map = new google.maps.Map(document.getElementById('map'), mapOptions);
    }

    initMap();
});

document.addEventListener('DOMContentLoaded', () => {
    // Intersection Observer for fade-in animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible', 'scale-in');
                entry.target.style.opacity = '1';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '50px'
    });

    document.querySelectorAll('.airdrop-card').forEach(card => {
        card.style.opacity = '0';
        observer.observe(card);
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Auto-scroll for recent airdrops with smooth transition
    const scrollContainer = document.querySelector('.scroll-container');
    if (scrollContainer) {
        let scrollInterval;
        let isHovered = false;

        scrollContainer.addEventListener('mouseenter', () => {
            isHovered = true;
            clearInterval(scrollInterval);
        });

        const scrollContainer = document.querySelector('.scroll-container');

    scrollContainer.setAttribute('tabindex', '0');

    scrollContainer.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
        scrollContainer.scrollBy({ left: 100, behavior: 'smooth' });
    } else if (event.key === 'ArrowLeft') {
        scrollContainer.scrollBy({ left: -100, behavior: 'smooth' });
    }
    });

        function startAutoScroll() {
            scrollInterval = setInterval(() => {
                if (!isHovered) {
                    const scrollAmount = scrollContainer.scrollLeft + 300;
                    if (scrollAmount >= scrollContainer.scrollWidth) {
                        scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
                    } else {
                        scrollContainer.scrollTo({ left: scrollAmount, behavior: 'smooth' });
                    }
                }
            }, 5000);
        }

        startAutoScroll();
    }

    // Search functionality
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            document.querySelectorAll('.airdrop-card').forEach(card => {
                const name = card.querySelector('.airdrop-name').textContent.toLowerCase();
                const description = card.querySelector('.airdrop-description').textContent.toLowerCase();
                
                if (name.includes(searchTerm) || description.includes(searchTerm)) {
                    card.style.display = 'block';
                    card.classList.add('scale-in');
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }
});
document.addEventListener('DOMContentLoaded', () => {
    // Nav active state based on scroll
    const sections = document.querySelectorAll('.section');
    const navItems = document.querySelectorAll('.nav-item');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (scrollY >= sectionTop - 150) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}` || item.getAttribute('href') === `/#${current}`) {
                item.classList.add('active');
            }
        });
    });
});

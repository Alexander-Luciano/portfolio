document.addEventListener('DOMContentLoaded', () => {
    // 1. Fetch content.json and populate the UI
    fetch('content.json')
        .then(response => response.json())
        .then(data => {
            // Hero Section
            document.getElementById('hero-name').textContent = data.hero_name || '';
            document.getElementById('hero-title').textContent = data.hero_title || '';
            document.getElementById('hero-subtitle').textContent = data.hero_subtitle || '';

            // About Section
            document.getElementById('about-text').innerHTML = data.about_text || '';

            // Experience Section
            const expContainer = document.getElementById('experience-timeline');
            if (data.experience && Array.isArray(data.experience)) {
                expContainer.innerHTML = data.experience.map(exp => `
                    <div class="timeline-item glass-card">
                        <div class="timeline-date">${exp.date || ''}</div>
                        <h3 class="timeline-title">${exp.title || ''}</h3>
                        <h4 class="timeline-company">${exp.company || ''}</h4>
                        <ul class="timeline-list">
                            ${(exp.items || []).map(item => `<li>${item}</li>`).join('')}
                        </ul>
                    </div>
                `).join('');
            }

            // Projects Section
            const projContainer = document.getElementById('projects-grid');
            if (data.projects && Array.isArray(data.projects)) {
                projContainer.innerHTML = data.projects.map(proj => `
                    <div class="project-card glass-card">
                        <h3 class="project-title">${proj.title || ''}</h3>
                        <p class="project-tech">${proj.tech || ''}</p>
                        <p class="project-desc">${proj.desc || ''}</p>
                    </div>
                `).join('');
            }

            // Skills Section
            const skillsContainer = document.getElementById('core-competencies');
            if (data.core_competencies && Array.isArray(data.core_competencies)) {
                skillsContainer.innerHTML = data.core_competencies.map(skill => `
                    <span class="tag">${skill}</span>
                `).join('');
            }

            // Re-trigger reveal animation logic for new dynamic content
            revealOnScroll();
        })
        .catch(error => console.error("Error loading content:", error));

    // 2. Scroll Reveal Animation
    const reveals = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 100;

        reveals.forEach(reveal => {
            const elementTop = reveal.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Trigger on load

    // 3. Sticky Nav Styling on Scroll
    const nav = document.querySelector('.glass-nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.padding = '0.5rem 0';
            nav.style.background = 'rgba(5, 5, 5, 0.85)';
        } else {
            nav.style.padding = '0';
            nav.style.background = 'rgba(5, 5, 5, 0.6)';
        }
    });
});

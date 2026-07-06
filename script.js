document.addEventListener('DOMContentLoaded', () => {
    // Fetch content.json and populate the UI
    fetch('content.json')
        .then(response => response.json())
        .then(data => {
            // Header
            if (data.profile_pic) {
                const img = document.getElementById('profile-pic');
                img.src = data.profile_pic;
                img.style.display = 'block';
            }
            document.getElementById('availability-text').textContent = data.availability || 'Available';
            document.getElementById('location-text').textContent = data.location || '';

            // Hero Section
            document.getElementById('hero-name').textContent = data.hero_name || '';
            document.getElementById('hero-subtitle').textContent = data.hero_subtitle || '';

            // About Section
            document.getElementById('about-text').innerHTML = data.about_text || '';

            // Projects Section
            const projContainer = document.getElementById('projects-container');
            if (data.projects && Array.isArray(data.projects)) {
                projContainer.innerHTML = data.projects.map(proj => `
                    <div class="project-row">
                        <div class="project-info">
                            <h3 class="project-title">${proj.title || ''}</h3>
                            <div class="project-tech">${proj.tech || ''}</div>
                            <p class="project-desc">${proj.desc || ''}</p>
                        </div>
                        <div class="project-image">
                            ${proj.image ? `<img src="${proj.image}" alt="${proj.title}">` : '<div style="padding: 4rem; text-align: center; color: #555;">No Image</div>'}
                        </div>
                    </div>
                `).join('');
            }

            // Experience Section
            const expContainer = document.getElementById('experience-container');
            if (data.experience && Array.isArray(data.experience)) {
                expContainer.innerHTML = data.experience.map(exp => `
                    <div class="exp-item">
                        <div class="exp-date">${exp.date || ''}</div>
                        <div class="exp-content">
                            <h3 class="exp-title">${exp.title || ''}</h3>
                            <h4 class="exp-company">${exp.company || ''}</h4>
                            <ul>
                                ${(exp.items || []).map(item => `<li>${item}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                `).join('');
            }

            // Skills Section
            const skillsContainer = document.getElementById('skills-container');
            if (data.core_competencies && Array.isArray(data.core_competencies)) {
                skillsContainer.innerHTML = data.core_competencies.map(skill => `
                    <div class="skill-tag">${skill}</div>
                `).join('');
            }
        })
        .catch(error => console.error("Error loading content:", error));

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
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    });
});

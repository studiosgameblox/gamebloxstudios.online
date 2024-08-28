// script.js

// Smooth Scrolling for Navigation Links
document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('nav a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        });
    });
});

// Dynamic Content Loading
document.addEventListener('DOMContentLoaded', function () {
    const loadMoreButton = document.getElementById('load-more');

    if (loadMoreButton) {
        loadMoreButton.addEventListener('click', function () {
            fetch('projects.json')
                .then(response => response.json())
                .then(data => {
                    const projectsContainer = document.getElementById('projects');
                    data.projects.forEach(project => {
                        const projectElement = document.createElement('div');
                        projectElement.classList.add('project');
                        projectElement.innerHTML = `
                            <h3>${project.title}</h3>
                            <p>${project.description}</p>
                            <a href="${project.link}" class="btn-buy">${project.buttonText}</a>
                        `;
                        projectsContainer.appendChild(projectElement);
                    });
                });
        });
    }
});

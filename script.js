// Select the scroll-left and scroll-right elements
const scrollLeft = document.querySelector('.scroll-left');
const scrollRight = document.querySelector('.scroll-right');

// Select the projects container
const projectsContainer = document.querySelector('.projects-container');

// Add event listener to the scroll-right arrow
scrollRight.addEventListener('click', () => {
    projectsContainer.scrollBy({
        left: 300,  // Scroll to the right by 300 pixels
        behavior: 'smooth'
    });
});

// Add event listener to the scroll-left arrow
scrollLeft.addEventListener('click', () => {
    projectsContainer.scrollBy({
        left: -300,  // Scroll to the left by 300 pixels
        behavior: 'smooth'
    });
});


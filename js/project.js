document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = parseInt(urlParams.get('id'), 10);
    const projectTitle = document.getElementById('project-title');
    const projectName = document.getElementById('project-name');
    const projectDescription = document.getElementById('project-description');
    const projectTechnologies = document.getElementById('project-technologies');
    const carouselContainer = document.getElementById('carousel-container');
    const prevBtn = document.querySelector('.carousel-button.prev');
    const nextBtn = document.querySelector('.carousel-button.next');

    let currentIndex = 0;
    let projectImages = [];

    // Fetch the projects and find the one with the given ID
    fetch('../data/projects.json')
        .then(res => res.json())
        .then(data => {
            const project = data.find(p => p.id === projectId);
            if (project) {
                projectTitle.textContent = project.name;
                projectName.textContent = project.name;
                projectDescription.textContent = project.description;
                projectTechnologies.textContent = project.technologies.join(', ');
                projectImages = project.images;

                // Initialize carousel
                loadCarouselImage(currentIndex);
            } else {
                // Handle no project found scenario
                projectName.textContent = "Project not found";
            }
        });

    function loadCarouselImage(index) {
        carouselContainer.innerHTML = `<img src="../${projectImages[index]}" alt="Project Image" class="carousel-image" />`;
    }

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + projectImages.length) % projectImages.length;
        loadCarouselImage(currentIndex);
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % projectImages.length;
        loadCarouselImage(currentIndex);
    });
});
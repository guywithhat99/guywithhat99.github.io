document.addEventListener('DOMContentLoaded', () => {
    const projectList = document.getElementById('project-list');
    const filterButtons = document.querySelectorAll('.filter-button');
    let allProjects = [];

    // Fetch projects from JSON
    fetch('data/projects.json')
        .then(res => res.json())
        .then(data => {
            allProjects = data;
            displayProjects(allProjects);
        });

    // Display projects on the page
    function displayProjects(projects) {
        projectList.innerHTML = '';
        projects.forEach(project => {
            const projectItem = document.createElement('div');
            projectItem.classList.add('project-item');

            projectItem.innerHTML = `
                <a href="HTML/project.html?id=${project.id}">
                    <div class="project-thumb">
                        <img src="${project.images[0]}" alt="${project.name}" />
                    </div>
                    <h3>${project.name}</h3>
                    <p>${project.description}</p>
                </a>
            `;

            projectList.appendChild(projectItem);
        });
    }

    // Filter functionality
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            if (filter === 'all') {
                displayProjects(allProjects);
            } else {
                const filtered = allProjects.filter(project => project.technologies.includes(filter));
                displayProjects(filtered);
            }
        });
    });
});
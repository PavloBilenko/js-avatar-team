document.addEventListener("DOMContentLoaded", function () {
    const projects = document.querySelectorAll(".my-projects-link");
    const loadMoreBtn = document.getElementById("load-more-btn");
    const projectsPerPage = 3;
    let currentIndex = 0;

    function showProjects() {
        const totalProjects = projects.length;
        for (let i = currentIndex; i < currentIndex + projectsPerPage; i++) {
            if (i < totalProjects) {
                projects[i].style.display = "block"; 
            }
        }
        currentIndex += projectsPerPage;

        if (currentIndex >= totalProjects) {
            loadMoreBtn.style.display = "none";
        }
        loadMoreBtn.blur();
        loadMoreBtn.classList.remove("hover", "focus");
    }

    projects.forEach((project) => {
        project.style.display = "none";
    });

    showProjects();

    loadMoreBtn.addEventListener("click", showProjects);
});
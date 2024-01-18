function showProjectDetails(projectId) {
    var projectDetailsOverlay = document.getElementById('projectDetailsOverlay');
    var projectDetails = document.getElementById('projectDetails');
    var projectImage = projectDetails.querySelector('img');
    var projectTitle = projectDetails.querySelector('h3');

    if (projectId === 1) {
        projectImage.src = 'project1-details.jpg';
        projectTitle.innerText = 'Project 1 Details';
    } else if (projectId === 2) {
        projectImage.src = 'project2';
    }
}
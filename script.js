document.getElementById("projectsIcon").addEventListener("click", function() {
    document.getElementById("projects").classList.toggle("hidden");
    document.getElementById("contact").classList.add("hidden"); // Hide contact when opening projects
});

document.getElementById("contactIcon").addEventListener("click", function() {
    document.getElementById("contact").classList.toggle("hidden");
    document.getElementById("projects").classList.add("hidden"); // Hide projects when opening contact
});

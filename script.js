document.getElementById("darkModeToggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});

document.getElementById("projectsBtn").addEventListener("click", function() {
    document.getElementById("projects").classList.toggle("hidden");
});

document.getElementById("contactBtn").addEventListener("click", function() {
    document.getElementById("contact").classList.toggle("hidden");
});

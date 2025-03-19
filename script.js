document.getElementById("projectsBtn").addEventListener("click", function() {
    document.getElementById("projects").classList.remove("hidden");
    document.getElementById("contact").classList.add("hidden");
    document.getElementById("default").classList.add("hidden");
});

document.getElementById("contactsBtn").addEventListener("click", function() {
    document.getElementById("contact").classList.remove("hidden");
    document.getElementById("projects").classList.add("hidden");
    document.getElementById("default").classList.add("hidden");
});

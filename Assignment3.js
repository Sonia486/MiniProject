// USER WELCOME
let user = localStorage.getItem("username");

if (document.getElementById("userWelcome") && user) {
    document.getElementById("userWelcome").innerText =
    "👤 Welcome " + user;
}

// THEME TOGGLE
function toggleTheme() {
    document.body.classList.toggle("dark-mode");

    let btn = document.getElementById("themeBtn");

    if (btn) {
        btn.innerText = document.body.classList.contains("dark-mode")
            ? "☀ Light Mode"
            : "🌙 Dark Mode";
    }
}
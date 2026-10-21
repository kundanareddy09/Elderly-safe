import { auth } from "./firebase-config.js";
import {
    onAuthStateChanged,
    signOut
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Send people to the login page if they are not signed in
onAuthStateChanged(auth, function (user) {
    if (!user) {
        window.location.href = "login.html";
        return;
    }

    // Show the user's name on the dashboard
    const welcome = document.querySelector(".welcome p");
    if (welcome && user.displayName) {
        welcome.textContent =
            "Welcome, " + user.displayName + "! Your safety and well-being matter to us.";
    }
});

// Make every Logout link really sign the user out
document.querySelectorAll("nav a").forEach(function (link) {
    if (link.textContent.trim() === "Logout") {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            signOut(auth).then(function () {
                window.location.href = "login.html";
            });
        });
    }
});
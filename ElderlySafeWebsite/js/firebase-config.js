import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyB4P9qZG6FfiqjXqVyZ6cJRZ2USL0WZ2mU",
    authDomain: "elderlysafe-557e7.firebaseapp.com",
    projectId: "elderlysafe-557e7",
    storageBucket: "elderlysafe-557e7.firebasestorage.app",
    messagingSenderId: "599271859819",
    appId: "1:599271859819:web:a5e9d68763de987fd5732e"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
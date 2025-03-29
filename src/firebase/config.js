// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCjSk9QV35SI29h0cqPa3RNLiZbGR5zaCc",
    authDomain: "react-cursos-f3601.firebaseapp.com",
    projectId: "react-cursos-f3601",
    storageBucket: "react-cursos-f3601.firebasestorage.app",
    messagingSenderId: "769453879185",
    appId: "1:769453879185:web:5ae23674c9da55e234b430"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
export const firebaseDB = getFirestore(firebaseApp); 
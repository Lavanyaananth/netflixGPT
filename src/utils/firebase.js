// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUAmIMHhUvDkFJpU6VeQcl0K55VQl05WQ",
  authDomain: "netflixgpt-59413.firebaseapp.com",
  projectId: "netflixgpt-59413",
  storageBucket: "netflixgpt-59413.firebasestorage.app",
  messagingSenderId: "448887420474",
  appId: "1:448887420474:web:f155861b79ac985209a703",
  measurementId: "G-J3PMHVBE7B",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();

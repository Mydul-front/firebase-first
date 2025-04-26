// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD42mzO_7c-s8qK738A-c7_9bhn6ZrIr-A",
  authDomain: "github-project-ab563.firebaseapp.com",
  projectId: "github-project-ab563",
  storageBucket: "github-project-ab563.firebasestorage.app",
  messagingSenderId: "807960372767",
  appId: "1:807960372767:web:6cfca6ef305a48b50dd72a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
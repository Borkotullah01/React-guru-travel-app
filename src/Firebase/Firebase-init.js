// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBUYT8oN38618Sf8k83FYSw4IhHK8hsM8",
  authDomain: "guru-travel-app.firebaseapp.com",
  projectId: "guru-travel-app",
  storageBucket: "guru-travel-app.appspot.com",
  messagingSenderId: "632917999463",
  appId: "1:632917999463:web:5a0837639c475c678839c2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
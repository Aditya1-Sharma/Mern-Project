// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-c73e4.firebaseapp.com",
  projectId: "mern-estate-c73e4",
  storageBucket: "mern-estate-c73e4.appspot.com",
  messagingSenderId: "1001838017771",
  appId: "1:1001838017771:web:0930de2281d384b47552ae"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
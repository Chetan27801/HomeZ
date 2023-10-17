// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-homez.firebaseapp.com",
  projectId: "mern-homez",
  storageBucket: "mern-homez.appspot.com",
  messagingSenderId: "77032177711",
  appId: "1:77032177711:web:262742951ec7ec25bd46da"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "cars-27863.firebaseapp.com",
  projectId: "cars-27863",
  storageBucket: "cars-27863.appspot.com",
  messagingSenderId: "48622357503",
  appId: "1:48622357503:web:7707a3f1870c67a10cb5ca",
  measurementId: "G-M98DBDBFLQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
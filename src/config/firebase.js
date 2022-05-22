// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBsrCzLdB-6L0YhC-sveZT3AzKfQRH10rE",
  authDomain: "e-commerce-68638.firebaseapp.com",
  projectId: "e-commerce-68638",
  storageBucket: "e-commerce-68638.appspot.com",
  messagingSenderId: "958282923223",
  appId: "1:958282923223:web:a6b0890a45dbba04e64492",
  measurementId: "G-Q9XK9SE5VP"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIPe-Bg5sk0JLmlj7c_Hx0VuhBbEw13jg",
  authDomain: "gadget-burst-93990.firebaseapp.com",
  projectId: "gadget-burst-93990",
  storageBucket: "gadget-burst-93990.appspot.com",
  messagingSenderId: "347436735223",
  appId: "1:347436735223:web:5bac6768eea9b70e8291f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

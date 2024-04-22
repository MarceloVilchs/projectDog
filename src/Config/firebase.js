// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCE-RywB3jDYp5RuR2cJrUHn2JcvnxazDI",
  authDomain: "projectdog-e5c97.firebaseapp.com",
  projectId: "projectdog-e5c97",
  storageBucket: "projectdog-e5c97.appspot.com",
  messagingSenderId: "45524930143",
  appId: "1:45524930143:web:78dfc608a6f63bf65495ea"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase
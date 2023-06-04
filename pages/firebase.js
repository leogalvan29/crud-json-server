// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1ldba5fNpwS3tSYbSJOddVK7SX-oLnfo",
  authDomain: "auth-next-ee357.firebaseapp.com",
  projectId: "auth-next-ee357",
  storageBucket: "auth-next-ee357.appspot.com",
  messagingSenderId: "382990254358",
  appId: "1:382990254358:web:d09865b7d59cc537335037"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
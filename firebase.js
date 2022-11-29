// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzDYCBnJdsr3BB_eb9Y6MX9jSnig82Z6s",
  authDomain: "finder-19949.firebaseapp.com",
  projectId: "finder-19949",
  storageBucket: "finder-19949.appspot.com",
  messagingSenderId: "260342939260",
  appId: "1:260342939260:web:5219b29aa24d8abb3813f9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app
// src/authentication/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDo0Je9F9lJKLGOnOPUMTTVI_QMwfmbJxk",
  authDomain: "fotographiya-login.firebaseapp.com",
  projectId: "fotographiya-login",
  storageBucket: "fotographiya-login.firebasestorage.app",
  messagingSenderId: "754854869545",
  appId: "1:754854869545:web:80903d6fa9baf763ef3a38"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Exporting auth as the default export
export default auth;

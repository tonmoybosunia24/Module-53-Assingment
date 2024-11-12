// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmtZUaXjrvtJdBByRSKNTMsPguzkIYkkI",
  authDomain: "module-53-assingment.firebaseapp.com",
  projectId: "module-53-assingment",
  storageBucket: "module-53-assingment.firebasestorage.app",
  messagingSenderId: "146546816524",
  appId: "1:146546816524:web:6a0577534f1e9881792029"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
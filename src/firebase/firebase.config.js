// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUGF1dLtOwRKKdUuCAeEOl6TO5W_FwCtk",
  authDomain: "social-event-management-14cfd.firebaseapp.com",
  projectId: "social-event-management-14cfd",
  storageBucket: "social-event-management-14cfd.appspot.com",
  messagingSenderId: "435542595167",
  appId: "1:435542595167:web:43b597aca9140430a32dea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
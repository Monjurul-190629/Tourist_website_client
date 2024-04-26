// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzReEw6iDrO-CPoyQCcwq8Q2qQilKiS94",
  authDomain: "assignment-10-3798d.firebaseapp.com",
  projectId: "assignment-10-3798d",
  storageBucket: "assignment-10-3798d.appspot.com",
  messagingSenderId: "33345532421",
  appId: "1:33345532421:web:daddcca47fc06a7c20a26c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

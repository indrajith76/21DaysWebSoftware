// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfj46V3skSgnOfLJVJajDF14l4TjlTT1w",
  authDomain: "days-46745.firebaseapp.com",
  databaseURL: "https://days-46745-default-rtdb.firebaseio.com",
  projectId: "days-46745",
  storageBucket: "days-46745.appspot.com",
  messagingSenderId: "696569437747",
  appId: "1:696569437747:web:7916adb43339e94b0fcd46",
  measurementId: "G-D4QH4L9P3G",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { auth, db };

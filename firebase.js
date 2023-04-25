// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvIG5ACx5IQuPpjX7NFq9RdLYo3esQL8g",
  authDomain: "stayfit-98b00.firebaseapp.com",
  projectId: "stayfit-98b00",
  storageBucket: "stayfit-98b00.appspot.com",
  messagingSenderId: "727794949542",
  appId: "1:727794949542:web:cce46bba49ea75c68a4367",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore();

export { auth, db };
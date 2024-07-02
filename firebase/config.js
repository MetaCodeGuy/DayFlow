// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCn7FSchDRaIFQb8yaXf9eGVQPGaWly45g",
  authDomain: "dayflow876.firebaseapp.com",
  projectId: "dayflow876",
  storageBucket: "dayflow876.appspot.com",
  messagingSenderId: "476681554925",
  appId: "1:476681554925:web:36d23966ef9968fa13f5e4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const DB = getFirestore(app)
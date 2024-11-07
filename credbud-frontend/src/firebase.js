// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmGR_h5b4ohkuqjqnMysh6m1j5oSBUKrw",
  authDomain: "credbud-updated.firebaseapp.com",
  projectId: "credbud-updated ",
  storageBucket: "credbud-updated.firebasestorage.app",
  messagingSenderId: "650321045059",
  appId: "1:650321045059:web:d1523ba5e43937a65b96f6",
  measurementId: "G-77S7REVCPP"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth(app);
export default app;
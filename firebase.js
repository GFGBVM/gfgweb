// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEdsD1CUFaAYPJM1z4qlheiz8p5FLSCQk",
  authDomain: "gfgbvm-2cf60.firebaseapp.com",
  projectId: "gfgbvm-2cf60",
  storageBucket: "gfgbvm-2cf60.appspot.com",
  messagingSenderId: "722733915124",
  appId: "1:722733915124:web:ea5ff899201244865d37a1",
  measurementId: "G-24MDXD7CDY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


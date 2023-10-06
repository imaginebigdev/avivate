// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1MoiqqQr2wBCkf021DNToukZha-gs2cc",
  authDomain: "avivate-alumnos.firebaseapp.com",
  projectId: "avivate-alumnos",
  storageBucket: "avivate-alumnos.appspot.com",
  messagingSenderId: "390328883208",
  appId: "1:390328883208:web:b87275a728ddcc276119bd",
};

// Initialize Firebase
const clasesApp = initializeApp(firebaseConfig);

export default clasesApp;

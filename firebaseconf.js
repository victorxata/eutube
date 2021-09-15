// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmqbxnDX5wCqrDV_1iTOENrusp5zUTihc",
  authDomain: "eutube-92c19.firebaseapp.com",
  projectId: "eutube-92c19",
  storageBucket: "eutube-92c19.appspot.com",
  messagingSenderId: "51339294693",
  appId: "1:51339294693:web:b6e52341e6752746c7610c",
  measurementId: "G-WN3BRT3LR4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPjkZNKTquT42OzsXjcgtyMyat03q_Qks",
  authDomain: "mini1-movie.firebaseapp.com",
  projectId: "mini1-movie",
  storageBucket: "mini1-movie.appspot.com",
  messagingSenderId: "1013416595046",
  appId: "1:1013416595046:web:34a711cd9ba9c61fc367a7",
  measurementId: "G-65JWC2VW09"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;
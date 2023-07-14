import { initializeApp } from 'firebase/app';
import { getAnalytics, logEvent } from "firebase/analytics";

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyB0xSUchRoE8Nd7Sfn9zpai7xilNt-so7E",
    authDomain: "jamieportfoliowebsite.firebaseapp.com",
    databaseURL: "https://jamieportfoliowebsite-default-rtdb.firebaseio.com",
    projectId: "jamieportfoliowebsite",
    storageBucket: "jamieportfoliowebsite.appspot.com",
    messagingSenderId: "208907145871",
    appId: "1:208907145871:web:3da021de71119d0c3696fa",
    measurementId: "G-4DNYH4BB65"
  };
  
export const FirebaseApp = initializeApp(firebaseConfig);
export const FBAalytics = getAnalytics(FirebaseApp); 
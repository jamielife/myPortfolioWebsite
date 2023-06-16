import { initializeApp } from 'firebase/app';
import { getFirestore, initializeFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB0xSUchRoE8Nd7Sfn9zpai7xilNt-so7E",
    authDomain: "jamieportfoliowebsite.firebaseapp.com",
    projectId: "jamieportfoliowebsite",
    storageBucket: "jamieportfoliowebsite.appspot.com",
    messagingSenderId: "208907145871",
    appId: "1:208907145871:web:3da021de71119d0c3696fa",
    measurementId: "G-4DNYH4BB65"
};

const app = initializeApp(firebaseConfig);
const db = initializeFirestore(app, {
    experimentalForceLongPolling: true,
});

export {db};
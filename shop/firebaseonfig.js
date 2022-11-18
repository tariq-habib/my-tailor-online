import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyARQMPPC0Je6Kp0UDWPKjR8YVY1AWPnYjQ",
    authDomain: "mytailors-5bdf6.firebaseapp.com",
    projectId: "mytailors-5bdf6",
    storageBucket: "mytailors-5bdf6.appspot.com",
    messagingSenderId: "860147208968",
    appId: "1:860147208968:web:85864b9cc34f07566fd2bd",
    measurementId: "G-9W2J6T394L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
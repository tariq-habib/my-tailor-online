import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, RecaptchaVerifier } from "firebase/auth";

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
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
// export const verify = new RecaptchaVerifier('recaptcha-container', {}, auth);
const googleProvider = new GoogleAuthProvider();
export const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider).then((res) => {
        console.log(res.user)
    }).catch((error) => {
        console.log(error.message)
    })
}
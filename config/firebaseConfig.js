// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore"
import { getAuth,signInWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCKt7UExQpDfZqj6j1DXvIu89NYBk7zUe0",
    authDomain: "iris-5be5a.firebaseapp.com",
    projectId: "iris-5be5a",
    storageBucket: "iris-5be5a.firebasestorage.app",
    messagingSenderId: "908690975404",
    appId: "1:908690975404:web:c9c28365e7b58b36034d09",
    measurementId: "G-9N9FF07PST"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app)
const newsCollection = collection(db, "latest-news")


export {
    addDoc,
    getDocs,
    db,
    auth,
    newsCollection,
    signInWithEmailAndPassword
}
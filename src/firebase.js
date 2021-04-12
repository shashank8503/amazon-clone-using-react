// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyB4dtzr4SJ1Lc35J9XAlxa80y6JfDnwoWY",
  authDomain: "clone-5edaa.firebaseapp.com",
  projectId: "clone-5edaa",
  storageBucket: "clone-5edaa.appspot.com",
  messagingSenderId: "1006722376630",
  appId: "1:1006722376630:web:3203e9972ef942a3fd9717",
  measurementId: "G-MXDV1H4SZ9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth =  firebase.auth();
export {db ,auth};
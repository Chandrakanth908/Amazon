import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD9fJbjeMLo3K67f74OGeuUPEUli1-Lwb8",
    authDomain: "clone-6856f.firebaseapp.com",
    projectId: "clone-6856f",
    storageBucket: "clone-6856f.appspot.com",
    messagingSenderId: "513546747964",
    appId: "1:513546747964:web:096ae6057043d79f2f0339",
    measurementId: "G-85FPZJLPT2"
  };

  const firebaseapp=firebase.initializeApp(firebaseConfig);
  const auth=firebase.auth();
  const db=firebaseapp.firestore();

  export {auth,db}
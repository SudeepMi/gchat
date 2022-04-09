// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyB3uvt2I__w_pbHFH1Bo_JoWLuyu7KoM6A",
    authDomain: "softexpo-5ea72.firebaseapp.com",
    projectId: "softexpo-5ea72",
    storageBucket: "softexpo-5ea72.appspot.com",
    messagingSenderId: "268279456744",
    appId: "1:268279456744:web:b02eb06545a59c0d61fa5d",
    measurementId: "G-P4M6XPF8VV"
  };



const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider }

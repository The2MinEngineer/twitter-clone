// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDiJGzkiTM_cCJl59MJhQ0u0jz2DNJs-Eo",
  authDomain: "twitter-clone-d89ae.firebaseapp.com",
  projectId: "twitter-clone-d89ae",
  storageBucket: "twitter-clone-d89ae.appspot.com",
  messagingSenderId: "2700925906",
  appId: "1:2700925906:web:d4391283b6a59968ac860b",
  measurementId: "G-P1H56BBJ6S"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
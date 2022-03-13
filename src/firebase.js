import firebase from 'firebase/app';
import 'firebase/auth';

export const auth = firebase.initializeApp({
  apiKey: "AIzaSyC9uz6ymjSu8wS6L8gr2-9q4paUoP-pRAI",
  authDomain: "chatnow-27279.firebaseapp.com",
  projectId: "chatnow-27279",
  storageBucket: "chatnow-27279.appspot.com",
  messagingSenderId: "155099391587",
  appId: "1:155099391587:web:e454b28cb52a4b0e663a56"
}).auth();
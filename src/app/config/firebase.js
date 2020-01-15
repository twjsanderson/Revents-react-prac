import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCdcnNbZHwSUXFFMfZq5YABjfySSzzgURI",
    authDomain: "revents-645fe.firebaseapp.com",
    databaseURL: "https://revents-645fe.firebaseio.com",
    projectId: "revents-645fe",
    storageBucket: "revents-645fe.appspot.com",
    messagingSenderId: "1057267851718",
    appId: "1:1057267851718:web:83984f7616ac4d4ed812c7",
    measurementId: "G-F53JRKG6KN"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore();

  export default firebase;


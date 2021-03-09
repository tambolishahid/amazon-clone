import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBNi8XK2va3gnxZYcxIMoJags25dtjLGSY',
  authDomain: 'clone-3ef5a.firebaseapp.com',
  projectId: 'clone-3ef5a',
  storageBucket: 'clone-3ef5a.appspot.com',
  messagingSenderId: '1071832974568',
  appId: '1:1071832974568:web:1db51a183be782c000f55d',
  measurementId: 'G-VYK8BMCPPM',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

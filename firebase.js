import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyB7mrW0vW7Xq8X0V6Abeko7MIsC_xFSuTY",
  authDomain: "fb-clone-1bb8d.firebaseapp.com",
  projectId: "fb-clone-1bb8d",
  storageBucket: "fb-clone-1bb8d.appspot.com",
  messagingSenderId: "414030031219",
  appId: "1:414030031219:web:4073a118aa64795e4dfd06",
  measurementId: "G-9YFBFK733R"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDfQA-i2tIgmFXvvhGGLJyMxbiwK2ZVULU",
  authDomain: "whatsapp-clone-30ac6.firebaseapp.com",
  projectId: "whatsapp-clone-30ac6",
  storageBucket: "whatsapp-clone-30ac6.appspot.com",
  messagingSenderId: "512079461823",
  appId: "1:512079461823:web:8647c60473c239fbcc350a",
  measurementId: "G-5EEQ83V5ER"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;
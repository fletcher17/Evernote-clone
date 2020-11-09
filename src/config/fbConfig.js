import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyB0D6-QsM3Gzrj60dJGsvTXsb_BIlAMNq8",
    authDomain: "evernote-clone-1df4e.firebaseapp.com",
    databaseURL: "https://evernote-clone-1df4e.firebaseio.com",
    projectId: "evernote-clone-1df4e",
    storageBucket: "evernote-clone-1df4e.appspot.com",
    messagingSenderId: "583088117598",
    appId: "1:583088117598:web:895750d28442f8d42fa1cf"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;
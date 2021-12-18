import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyDwnAj-G810uuXsYrjmaCanJ9pIiAZ_blk",
    authDomain: "react-crud-firebase-355c8.firebaseapp.com",
    projectId: "react-crud-firebase-355c8",
    storageBucket: "react-crud-firebase-355c8.appspot.com",
    messagingSenderId: "835704787603",
    appId: "1:835704787603:web:10f4a8adac57c88c083366"
};
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;
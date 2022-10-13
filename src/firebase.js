import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyBoTBtRQw1uG1Ywzif39cWfA-RxBqMa3ek",
    authDomain: "clone-e3e42.firebaseapp.com",
    projectId: "clone-e3e42",
    storageBucket: "clone-e3e42.appspot.com",
    messagingSenderId: "776120787548",
    appId: "1:776120787548:web:ea10cb3b5e2b795bc4bc99",
    measurementId: "G-Q4TL1QH48B"
  };

  const firebaseApp = initializeApp(firebaseConfig);
  const db = getFirestore(firebaseApp);
  const auth = getAuth();
  export {db, auth};
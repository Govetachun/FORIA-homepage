// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyD0kidWWOO-69XCxyGnpqOZg5PfOUvkUXw",
  authDomain: "foria-85d7d.firebaseapp.com",
  databaseURL: "https://foria-85d7d-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "foria-85d7d",
  storageBucket: "foria-85d7d.appspot.com",
  messagingSenderId: "505299204042",
  appId: "1:505299204042:web:3c022b66e35115a5b94133",
  measurementId: "G-SBNTJCDFBF"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export {db,auth};
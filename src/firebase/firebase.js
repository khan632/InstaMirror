import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBSEYMWvyH3FBpXqvkEuIHaxfL2T2Ts-MI",
  authDomain: "instamirror-bf1a7.firebaseapp.com",
  projectId: "instamirror-bf1a7",
  storageBucket: "instamirror-bf1a7.appspot.com",
  messagingSenderId: "873598091012",
  appId: "1:873598091012:web:15fd8ad6e414998189da51",
  measurementId: "G-PRV756NJM2"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
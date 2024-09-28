
import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore"
import "firebase/compat/auth"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALkhsjg66Q2pmNsxjRy0xsQc18uRPPY_k",
  authDomain: "clone-47800.firebaseapp.com",
  projectId: "clone-47800",
  storageBucket: "clone-47800.appspot.com",
  messagingSenderId: "482122102320",
  appId: "1:482122102320:web:e694b92774744928d61ff5",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db= app.firestore()
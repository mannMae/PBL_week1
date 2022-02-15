import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAYCw-DvdzHsSyXGshhos0RgdouCDr1ti0",
  authDomain: "gorabopseo.firebaseapp.com",
  projectId: "gorabopseo",
  storageBucket: "gorabopseo.appspot.com",
  messagingSenderId: "31690249180",
  appId: "1:31690249180:web:c97cc69063caf2db543519",
  measurementId: "G-GEYX59R9GK"
};

initializeApp(firebaseConfig)

export const db = getFirestore();

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCeRSYVDVZS2H0qpVWsrnOM-todovqk-IY",
  authDomain: "cyberlove-2b8fe.firebaseapp.com",
  projectId: "cyberlove-2b8fe",
  storageBucket: "cyberlove-2b8fe.appspot.com",
  messagingSenderId: "99456447177",
  appId: "1:99456447177:web:fb26e8e36a6d4c3b0a1318"
};


initializeApp(firebaseConfig);

const db = getFirestore()

export default db;
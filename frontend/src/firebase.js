import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database"; 
import { GoogleAuthProvider,getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCaaqdaXfjWFTOHzl3LSsTXav4d_u73BnE",
  authDomain: "clone-bf324.firebaseapp.com",
  projectId: "clone-bf324",
  storageBucket: "clone-bf324.appspot.com",
  messagingSenderId: "568635893217",
  appId: "1:568635893217:web:c99e9c45d1c2142f661ea0",
  measurementId: "G-RWPQDVBBK9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
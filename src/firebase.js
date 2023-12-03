import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAxsruR665MvvvZfmaVLgLaNY_q8xvGH6Q",
  authDomain: "fir-auth-92892.firebaseapp.com",
  projectId: "fir-auth-92892",
  storageBucket: "fir-auth-92892.appspot.com",
  messagingSenderId: "341064525368",
  appId: "1:341064525368:web:64149c019d2a84410068cd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

export { app, analytics, auth, createUserWithEmailAndPassword, updateProfile };

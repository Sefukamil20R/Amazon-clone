import firebase from "firebase/compat/app";
// auth
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDd-oFl5joN7VQy0hHisnal_MsCkJpJnuw",
  authDomain: "clone-1d334.firebaseapp.com",
  projectId: "clone-1d334",
  storageBucket: "clone-1d334.appspot.com",
  messagingSenderId: "49279087897",
  appId: "1:49279087897:web:85b4f59a6e884226594188"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = app.firestore();
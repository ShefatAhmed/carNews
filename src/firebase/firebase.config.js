// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLo6ID9882S6mLHptbgGVNQDm6GGIERM4",
  authDomain: "bistro-boss-cf4b2.firebaseapp.com",
  projectId: "bistro-boss-cf4b2",
  storageBucket: "bistro-boss-cf4b2.appspot.com",
  messagingSenderId: "477715789240",
  appId: "1:477715789240:web:cff4170ec9548ef7b6cb4d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
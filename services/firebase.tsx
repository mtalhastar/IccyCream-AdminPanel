// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth ,onAuthStateChanged} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZ2Cs1Q-xD2LYAZnjhGM9UkM2aq7lBx14",
  authDomain: "ice-cream-7deb3.firebaseapp.com",
  projectId: "ice-cream-7deb3",
  storageBucket: "ice-cream-7deb3.appspot.com",
  messagingSenderId: "362141200844",
  appId: "1:362141200844:web:5541f6854ff19e5578ad69"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db= getFirestore(app);
export const storage = getStorage(app);
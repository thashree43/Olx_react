import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage' 


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEXNaGKzkoEp5HoISYEwXJ4hC0lMeq_gw",
  authDomain: "reacty-olx-yt.firebaseapp.com",
  projectId: "reacty-olx-yt",
  storageBucket: "reacty-olx-yt.appspot.com",
  messagingSenderId: "85835333600",
  appId: "1:85835333600:web:fed17ae3c5d636bcca3585"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app) 
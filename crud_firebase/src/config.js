import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBQAo3mtlgd7e0e8E8drh801Wa-IKrTm-w",
  authDomain: "fir-yt-1cec8.firebaseapp.com",
  projectId: "fir-yt-1cec8",
  storageBucket: "fir-yt-1cec8.appspot.com",
  messagingSenderId: "147448546079",
  appId: "1:147448546079:web:abf2d338a08eb6c0c1a62a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database= getFirestore(app); 

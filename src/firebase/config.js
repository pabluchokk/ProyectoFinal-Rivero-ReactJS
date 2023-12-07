import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBUTVwLR6r7a00G-yNWAZyuGLfxW8kmjA8",
    authDomain: "gear-now.firebaseapp.com",
    projectId: "gear-now",
    storageBucket: "gear-now.appspot.com",
    messagingSenderId: "723031675179",
    appId: "1:723031675179:web:ebfd4c72de13c62cc9756e"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
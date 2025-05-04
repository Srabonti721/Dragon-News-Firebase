// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQfw8P26h8nWpbuVtl80YmpQ96666_Wew",
  authDomain: "dragon-news-51f08.firebaseapp.com",
  projectId: "dragon-news-51f08",
  storageBucket: "dragon-news-51f08.firebasestorage.app",
  messagingSenderId: "719568919758",
  appId: "1:719568919758:web:09c2830fb84c77b141849f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
// Initialize Firebase Authentication and get a reference to the service
 export const auth = getAuth(app);
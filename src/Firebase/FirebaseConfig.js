// Import the functions you need from the SDKs you need
import { getFirestore } from 'firebase/firestore';
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASjeyL1d6Fkp5ujUotI_bado-T8K_m5P4",
  authDomain: "e-commerce-coder-mm.firebaseapp.com",
  projectId: "e-commerce-coder-mm",
  storageBucket: "e-commerce-coder-mm.appspot.com",
  messagingSenderId: "674599273178",
  appId: "1:674599273178:web:69e3220819c8964097dbe3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const DB = getFirestore(app);
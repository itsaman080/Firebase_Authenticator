// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// I have altered the firebaseConfig; 
//Below config will not run
const firebaseConfig = {
  apiKey: "AIzaSyD3mRfU-6_Abs2bGN0EEC",
  authDomain: "authenticationapp-b3e.firebaseapp.com",
  projectId: "authenticationapp-b3e",
  storageBucket: "authenticationapp-b3e.appspot.com",
  messagingSenderId: "7540802",
  appId: "1:7540866702:web:f714960755fe5f5f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;

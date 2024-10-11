// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3CmRfU-6_Abs2bGN0EEC359JDBf8bJdk",
  authDomain: "authenticationapp-b301e.firebaseapp.com",
  projectId: "authenticationapp-b301e",
  storageBucket: "authenticationapp-b301e.appspot.com",
  messagingSenderId: "754088466702",
  appId: "1:754088466702:web:f714960bff24b755fe5f5f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;
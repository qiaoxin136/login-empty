// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7CuqQPNMdKFw2Sa-TVDqx3sRXqw_Yc74",
  authDomain: "test-01-project-f75f6.firebaseapp.com",
  projectId: "test-01-project-f75f6",
  storageBucket: "test-01-project-f75f6.appspot.com",
  messagingSenderId: "690231960278",
  appId: "1:690231960278:web:28c3e496c2fc321359df77",
  measurementId: "G-QM1QSH10JS"
};




const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
export const auth = getAuth(app);
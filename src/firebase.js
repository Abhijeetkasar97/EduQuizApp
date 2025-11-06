import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDHznYyKf7Sa1Zj6cFk0RZaQuxMuVv3PY8",
  authDomain: "eduquizapp-a73cd.firebaseapp.com",
  databaseURL: "https://eduquizapp-a73cd-default-rtdb.firebaseio.com",
  projectId: "eduquizapp-a73cd",
  storageBucket: "eduquizapp-a73cd.firebasestorage.app",
  messagingSenderId: "370867321587",
  appId: "1:370867321587:web:826ea486e47770d6a01586",
  measurementId: "G-08PBVGMKST"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);
export const analytics = getAnalytics(app);
export default app;

import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyB5fDro4GOmPryU2S-l0GZK1HiJMo0T_Ig",
  authDomain: "kamper-ce6d2.firebaseapp.com",
  databaseURL: "https://kamper-ce6d2-default-rtdb.firebaseio.com",
  projectId: "kamper-ce6d2",
  storageBucket: "kamper-ce6d2.appspot.com",
  messagingSenderId: "31107709102",
  appId: "1:31107709102:web:56f6668db9e0664cd2153f",
};

initializeApp(firebaseConfig);
export default getDatabase();

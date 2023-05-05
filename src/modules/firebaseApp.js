import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAZz0uxCjCVsimv9LC1FJXr0dv4tC7QTZU",
  authDomain: "react-shop-45c8b.firebaseapp.com",
  databaseURL: "https://react-shop-45c8b-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "react-shop-45c8b",
  storageBucket: "react-shop-45c8b.appspot.com",
  messagingSenderId: "388969009761",
  appId: "1:388969009761:web:1439c7887e1c10d1329020",
  measurementId: "G-MQKSVHV6VN"
};

const app = initializeApp(firebaseConfig);

export default function getFirebaseApp() {
  return app;
}
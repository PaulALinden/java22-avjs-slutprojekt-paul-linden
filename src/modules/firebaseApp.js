import { initializeApp } from "firebase/app";

const firebaseConfig = {};

const app = initializeApp(firebaseConfig);

export default function getFirebaseApp() {
  return app;
}

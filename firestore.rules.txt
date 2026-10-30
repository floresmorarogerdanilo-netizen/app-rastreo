import { initializeApp } from "firebase/app";
import { getFirestore, enableMultiTabIndexedDbPersistence } from "firebase/firestore";
import { getAuth, signInAnonymously } from "firebase/auth";

const firebaseConfig = {
  apiKey: "TU_API_KEY_AQUI",
  authDomain: "TU_PROYECTO.firebaseapp.com",
  projectId: "TU_PROYECTO_ID",
  storageBucket: "TU_PROYECTO.appspot.com",
  messagingSenderId: "TU_SENDER_ID",
  appId: "TU_APP_ID"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// Persistencia sin conexión para Firestore
enableMultiTabIndexedDbPersistence(db).catch((err) => {
  console.warn("Persistencia offline no disponible:", err.code);
});

// Autenticación Anónima
signInAnonymously(auth).catch((error) => {
  console.error("Error autenticación anónima:", error);
});

export { db, auth };
export const APP_URL = "https://TU_PROYECTO.web.app";
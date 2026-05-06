import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyBnasaDKb5tpAPqfo21UJLgkAd3-M6WdbQ",
  authDomain: "fiap-auth-app-f016c.firebaseapp.com",
  projectId: "fiap-auth-app-f016c",
  storageBucket: "fiap-auth-app-f016c.firebasestorage.app",
  messagingSenderId: "60169441717",
  appId: "1:60169441717:web:0302b6275a2b01a7b289fc"

};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

export { auth, db };

// FIRE BASE URL
// https://console.firebase.google.com/project/fiapapp-d6e0f/database/fiapapp-d6e0f-default-rtdb/data?hl=pt-br
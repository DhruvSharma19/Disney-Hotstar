import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCglvJQMtbNYjOVBiVjv8P-7AUqQ0eu9BU",
  authDomain: "disney-plus-3ecf3.firebaseapp.com",
  projectId: "disney-plus-3ecf3",
  storageBucket: "disney-plus-3ecf3.appspot.com",
  messagingSenderId: "348142753301",
  appId: "1:348142753301:web:aded55f7902f935851a01c"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const storage = getStorage(app);

export {auth, provider, storage};
export default db;
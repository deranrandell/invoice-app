import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import { EmailAuthProvider } from "firebase/auth";
import { getAuth} from "firebase/auth";
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyCtAf7iqFismmI76VtRyLMlC6BM8rrv0Kg",
  authDomain: "deranrandell-invoice.firebaseapp.com",
  projectId: "deranrandell-invoice",
  storageBucket: "deranrandell-invoice.appspot.com",
  messagingSenderId: "425459732133",
  appId: "1:425459732133:web:d8fabb5e4184d1f665474c"
};



const app = initializeApp(firebaseConfig);
const provider = new EmailAuthProvider();
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app)
export {provider, auth, storage}
export default db;
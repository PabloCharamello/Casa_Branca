import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDnuGEQOu4VwIqFVpCv-eNCab77AcCV9Tw",
  authDomain: "casa-branca-82b73.firebaseapp.com",
  databaseURL: "https://casa-branca-82b73-default-rtdb.firebaseio.com",
  projectId: "casa-branca-82b73",
  storageBucket: "casa-branca-82b73.appspot.com",
  messagingSenderId: "805450424689",
  appId: "1:805450424689:web:77e61b14826f09d86596d0",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };

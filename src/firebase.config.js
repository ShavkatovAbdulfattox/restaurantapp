import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmxJTtd5hCqhmeGjPX0KLj9d-ofDmJCAQ",
  authDomain: "restaurantapp-6bc60.firebaseapp.com",
  databaseURL: "https://restaurantapp-6bc60-default-rtdb.firebaseio.com",
  projectId: "restaurantapp-6bc60",
  storageBucket: "restaurantapp-6bc60.appspot.com",
  messagingSenderId: "619241503886",
  appId: "1:619241503886:web:002b035cba7c2caa821ddf",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app)

export {app, firestore, storage}
// import { initializeApp } from 'firebase/app';
import firebase from 'firebase/compat/app';
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

require('dotenv').config();

// ******** firebase real-oficial *******
const firebaseConfig = {
  apiKey: process.env.FIREBASE_APIKEY,
  authDomain: 'sap006-tf-avanade.firebaseapp.com',
  projectId: 'sap006-tf-avanade',
  storageBucket: 'sap006-tf-avanade.appspot.com',
  messagingSenderId: process.env.MESSAGIN_SENDERID,
  appId: process.env.APP_ID,
};

const start = firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export const db = start.firestore;

export default storage;

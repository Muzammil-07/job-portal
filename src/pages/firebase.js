// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDLUa0_XJYWqHmf79q-sg9Smz20NCJLly4",
    authDomain: "job-portal-7dab8.firebaseapp.com",
    projectId: "job-portal-7dab8",
    storageBucket: "job-portal-7dab8.appspot.com",
    messagingSenderId: "826186727661",
    appId: "1:826186727661:web:3ce375291b9fa1a0350ce4"
  };
  

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };

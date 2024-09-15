// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCkZWcw-I8oSJy-gBeXzqrcEZafWv9d2wI',
  authDomain: 'workweek-ba8e7.firebaseapp.com',
  projectId: 'workweek-ba8e7',
  storageBucket: 'workweek-ba8e7.appspot.com',
  messagingSenderId: '800374464873',
  appId: '1:800374464873:web:6060e6170cde7a7c215df8',
  measurementId: 'G-DMX76J84GB',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

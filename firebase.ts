// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAld2jFzj8O0cMLgcx7VpRPfhJBcDviuwY',
  authDomain: 'appture-8964f.firebaseapp.com',
  projectId: 'appture-8964f',
  storageBucket: 'appture-8964f.appspot.com',
  messagingSenderId: '155920706537',
  appId: '1:155920706537:web:7923cde63f26f517abf978',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

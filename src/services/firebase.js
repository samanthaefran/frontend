import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAmRh1WBQ7oDkpp6Q7i3cvmfwaMo3pus2A",
  authDomain: "react-firebase-projects-4565a.firebaseapp.com",
  projectId: "react-firebase-projects-4565a",
  storageBucket: "react-firebase-projects-4565a.appspot.com",
  messagingSenderId: "230037273693",
  appId: "1:230037273693:web:db5b4bf7f6a9f2a54461b4"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

function login() {
  return auth.signInWithPopup(provider);
}

function logout() {
  return auth.signOut();
}

export { auth, login, logout }; 
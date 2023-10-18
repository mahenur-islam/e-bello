// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdnSYyfZYYs_4Ol8oi1wV39glF_GkfuQ0",
  authDomain: "e-bello-cleint-auth.firebaseapp.com",
  projectId: "e-bello-cleint-auth",
  storageBucket: "e-bello-cleint-auth.appspot.com",
  messagingSenderId: "148504425402",
  appId: "1:148504425402:web:9fb848fc5921ef5c2ba383"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
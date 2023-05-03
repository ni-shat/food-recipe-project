// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6vAAm6E44TXZYNnFjngurHhl5KTaGwe4",
  authDomain: "chef-recipes-project-f78a5.firebaseapp.com",
  projectId: "chef-recipes-project-f78a5",
  storageBucket: "chef-recipes-project-f78a5.appspot.com",
  messagingSenderId: "113241965222",
  appId: "1:113241965222:web:71a630b920ba76a371aa67"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
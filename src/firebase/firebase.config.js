// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXww0AMaU6OGakGx8p0DOl5BrQeIdaiwE",
  authDomain: "mybook-9fcef.firebaseapp.com",
  projectId: "mybook-9fcef",
  storageBucket: "mybook-9fcef.appspot.com",
  messagingSenderId: "577827846842",
  appId: "1:577827846842:web:1dae6507f3ac2384d3e083"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
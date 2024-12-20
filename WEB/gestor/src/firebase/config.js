// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgUE8-P2HWsTlxWkZ_gBPrIvVLcKHvnQE",
  authDomain: "proyectofinanzaspersonal-c8619.firebaseapp.com",
  projectId: "proyectofinanzaspersonal-c8619",
  storageBucket: "proyectofinanzaspersonal-c8619.firebasestorage.app",
  messagingSenderId: "289256350776",
  appId: "1:289256350776:web:b0a64ec3c47436e67c32cd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDnbH3MMXL6Q_I8mMlnmC7_cGNQNuGXZUw",
    authDomain: "linkedin-d6423.firebaseapp.com",
    projectId: "linkedin-d6423",
    storageBucket: "linkedin-d6423.appspot.com",
    messagingSenderId: "972730631318",
    appId: "1:972730631318:web:87163c6a068b18a7282eb7"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);
  // initialize services
  const db = getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp);
  const provider = new GoogleAuthProvider();
  const storage = getStorage(firebaseApp);

  export { auth, provider, storage }
  export default db
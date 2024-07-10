import { initializeApp } from 'firebase/app'

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
  const app = initializeApp(firebaseConfig);
  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()
  const storage = firebase.storage()

  export { auth, provider, storage }
  export default db
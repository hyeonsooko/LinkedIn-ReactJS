import { auth, provider } from '../firebase'
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import { SET_USER } from './actionType'
import firebaseApp from '../firebase.jsx'

export const setUser = (result) => ({
  type: SET_USER,
  user: result
})

export function signInAPI() {
    return (dispatch) => {
        signInWithPopup(auth, provider)
          .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // IdP data available using getAdditionalUserInfo(result)
            // ...
            dispatch(setUser(user))
          }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
          });
    }
}

export function getUserAuth() {
  return (dispatch) => {
    auth.onAuthStateChanged(async (user) => {
      if(user) {
        dispatch(setUser(user))
      }
    })
  }
}

export function signOutAPI() {
  return (dispatch) => {
    signOut(auth, provider)
    .then(() => {
      dispatch(setUser(null))
    })
    .catch((error) => {
      console.log(error.message)
    })
  }
}
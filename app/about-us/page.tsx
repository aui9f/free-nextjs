"use client"

import { Metadata } from "next"
import { auth, onAuthStateChanged, signInWithPopup, GoogleAuthProvider } from "../firebase-config";

// export const metadata : Metadata= {
//   title: 'About-us',
//   description: 'Nomad Coders Study -- Next.js',
// }

export default async function AboutUs(){
  
  async function googleLogin () {

const provider = new GoogleAuthProvider();

  await signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
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

    return <div>About-Us
      <button onClick={googleLogin}>google login</button>
    </div>
}
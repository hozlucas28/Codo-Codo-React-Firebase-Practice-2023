import { GoogleAuthProvider, getAuth, signInWithRedirect } from 'firebase/auth'

import { firebaseApp } from '../config/firebase.config.js'

export async function signInWithGoogleRedirect() {
	const auth = getAuth(firebaseApp)
	const googleProvider = new GoogleAuthProvider()

	await signInWithRedirect(auth, googleProvider)
}

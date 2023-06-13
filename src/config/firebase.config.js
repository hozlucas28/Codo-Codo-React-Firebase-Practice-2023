import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

export const firebaseConfig = {
	apiKey: import.meta.env.VITE_FIREBASE_CONFIG_API_KEY,
	authDomain: import.meta.env.VITE_FIREBASE_CONFIG_AUTH_DOMAIN,
	projectId: import.meta.env.VITE_FIREBASE_CONFIG_PROJECT_ID,
	storageBucket: import.meta.env.VITE_FIREBASE_CONFIG_STORAGE_BUCKET,
	messagingSenderId: import.meta.env.VITE_FIREBASE_CONFIG_MESSAGING_SENDER_ID,
	appId: import.meta.env.VITE_FIREBASE_CONFIG_MESSAGING_APP_ID,
	measurementId: import.meta.env.VITE_FIREBASE_CONFIG_MESSAGING_MEASUREMENT_ID,
}

export const firebaseApp = initializeApp(firebaseConfig)
export const auth = getAuth(firebaseApp)

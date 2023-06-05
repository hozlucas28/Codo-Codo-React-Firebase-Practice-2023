import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { GoogleAuthProvider, getRedirectResult } from 'firebase/auth'

import { TEXTS } from '../constants/TEXTS.js'

import { useAuth } from '../../../hooks/useAuth.js'

import { signInWithGoogleRedirect } from '../../../services/signInWithGoogleRedirect.js'

import { ReactComponent as GoogleIcon } from '../../../static/icons/google.svg'

import {
	form,
	formButtons,
	formButtonsDivider,
	formEmail,
	formHeader,
	formHeaderSubtitle,
	formHeaderTitle,
	formPassword,
	formSignIn,
	formSignInWithGoogle,
} from './LoginForm.module.css'

import { auth } from '../../../config/firebase.config.js'

const LoginForm = () => {
	const navigate = useNavigate()
	const { login } = useAuth()

	useEffect(() => {
		async function fetchUserData() {
			const response = await getRedirectResult(auth)

			if (response) {
				const { user } = response
				const { accessToken, displayName, email, photoURL } = user
				const credential = GoogleAuthProvider.credentialFromResult(response)

				login({
					displayName,
					email,
					photoURL,
					accessToken,
					credential,
				})
				navigate('/', {
					replace: true,
				})
			}
		}
		fetchUserData()
	})

	const handleSubmit = (event) => {
		event.preventDefault()

		const form = new FormData(event.target)
		const data = Object.fromEntries(form.entries())

		login({
			email: data.email.toString(),
		})

		navigate('/', {
			replace: true,
		})
	}

	return (
		<form
			className={form}
			onSubmit={handleSubmit}
		>
			<div className={formHeader}>
				<h1 className={formHeaderTitle}>{TEXTS.form.header.title}</h1>
				<h2 className={formHeaderSubtitle}>{TEXTS.form.header.subTitle}</h2>
			</div>
			<label className={formEmail}>
				<input
					type='email'
					name='email'
					placeholder={TEXTS.form.fields.email.placeholder}
					required
				/>
			</label>
			<label className={formPassword}>
				<input
					type='password'
					name='password'
					placeholder={TEXTS.form.fields.password.placeholder}
					required
				/>
			</label>
			<div className={formButtons}>
				<button
					className={formSignIn}
					type='submit'
				>
					{TEXTS.form.buttons.signIn.text}
				</button>
				<small className={formButtonsDivider}>{TEXTS.form.buttons.divider.text}</small>
				<button
					className={`${formSignInWithGoogle} group`}
					onClick={signInWithGoogleRedirect}
				>
					<GoogleIcon className='group-hover:fill-white' />
					<span className='group-hover:text-white'>{TEXTS.form.buttons.signInWithGoogle.text}</span>
				</button>
			</div>
		</form>
	)
}

export default LoginForm

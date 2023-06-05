import { TEXTS } from '../constants/TEXTS.js'

import { useAuth } from '../../../hooks/useAuth.js'

import { ReactComponent as AnonymousTieUser } from '../../../static/icons/anonymous-tie-user.svg'

import { container } from './Profile.module.css'

const Profile = () => {
	const { logout, user } = useAuth()
	const { displayName, email, photoURL } = user

	const handleSignOut = () => {
		logout()
	}

	return (
		<article className={container}>
			{photoURL ? (
				<img
					src={photoURL}
					alt={`${TEXTS.profile.photo.alt} ${displayName}`}
				/>
			) : (
				<AnonymousTieUser alt={`${TEXTS.profile.photo.alt} ${TEXTS.profile.displayName.anonymous}`} />
			)}

			<header>
				<h1>{displayName ?? TEXTS.profile.displayName.anonymous}</h1>
				<h2>{email}</h2>
			</header>
			<footer>
				<button onClick={handleSignOut}>{TEXTS.profile.signOut.text}</button>
			</footer>
		</article>
	)
}

export default Profile

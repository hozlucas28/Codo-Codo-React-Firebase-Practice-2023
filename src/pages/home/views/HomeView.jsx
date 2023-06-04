import Profile from '../components/Profile.jsx'

import { container } from './HomeView.module.css'

const HomeView = () => {
	return (
		<div className={container}>
			<Profile />
		</div>
	)
}

export default HomeView

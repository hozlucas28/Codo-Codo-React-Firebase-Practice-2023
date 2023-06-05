import Profile from '../components/Profile.jsx'

import { ReactComponent as LineWithoutSense01 } from '../../../static/illustrations/line-without-sense-1.svg'
import { ReactComponent as LineWithoutSense02 } from '../../../static/illustrations/line-without-sense-2.svg'

import { container, illustration01, illustration02 } from './HomeView.module.css'

const HomeView = () => {
	return (
		<div className={container}>
			<Profile />
			<LineWithoutSense01 className={illustration01} />
			<LineWithoutSense02 className={illustration02} />
		</div>
	)
}

export default HomeView

import LoginForm from '../components/LoginForm'

import { ReactComponent as LineWithoutSense01 } from '../../../static/illustrations/line-without-sense-1.svg'
import { ReactComponent as LineWithoutSense02 } from '../../../static/illustrations/line-without-sense-2.svg'

import { illustration01, illustration02, view } from './LoginView.module.css'

const LoginView = () => {
	return (
		<div className={view}>
			<LoginForm />
			<LineWithoutSense01 className={illustration01} />
			<LineWithoutSense02 className={illustration02} />
		</div>
	)
}

export default LoginView

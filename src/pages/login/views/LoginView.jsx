import LoginForm from '../components/LoginForm'

import { view } from './LoginView.module.css'

const LoginView = () => {
	return (
		<div className={view}>
			<LoginForm />
		</div>
	)
}

export default LoginView

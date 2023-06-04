import { RouterProvider } from 'react-router-dom'

import { Router } from './routes/app.routes'

import GlobalProvider from './contexts/GlobalProvider.jsx'

import AuthProvider from './auth/context/AuthProvider'

const App = () => {
	return (
		<GlobalProvider>
			<AuthProvider>
				<RouterProvider router={Router} />
			</AuthProvider>
		</GlobalProvider>
	)
}

export default App

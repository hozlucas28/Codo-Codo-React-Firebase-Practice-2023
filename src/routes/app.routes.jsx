import { createBrowserRouter } from 'react-router-dom'

import HomeView from '../pages/home/views/homeView'
import LoginView from '../pages/login/views/loginView'

import ProtectedRoute from './ProtectedRoute'
import PublicRoute from './PublicRoute'

export const Router = createBrowserRouter([
	{
		path: '/',
		element: (
			<ProtectedRoute>
				<HomeView />
			</ProtectedRoute>
		),
	},
	{
		path: '/login',
		element: (
			<PublicRoute>
				<LoginView />
			</PublicRoute>
		),
	},
])

import { createBrowserRouter } from 'react-router-dom'

import HomeView from '../pages/home/views/HomeView'
import LoginView from '../pages/login/views/LoginView'

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

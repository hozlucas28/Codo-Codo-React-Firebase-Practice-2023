import { createBrowserRouter } from 'react-router-dom'

import HomeView from '../pages/Home/views/HomeView'
import LoginView from '../pages/Login/views/LoginView'

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

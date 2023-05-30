import React from 'react'

import { useAuth } from '../../../hooks/useAuth'

const HomeView = () => {
	const { logout, user } = useAuth()

	const handleLogout = () => {
		logout()
	}

	return (
		<div>
			<h1 className='text-4xl'>HOME</h1>
			<h3 className='text-2xl'>Bienvenido {user?.email}</h3>

			<button onClick={handleLogout}>Cerrar Sesión</button>
		</div>
	)
}

export default HomeView

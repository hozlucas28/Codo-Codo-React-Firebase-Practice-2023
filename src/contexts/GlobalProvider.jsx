import { useState } from 'react'

import { GlobalContext } from './GlobalContext.jsx'

const defaultValue = {
	error: {
		errorCode: -1,
		longError: '',
		shortError: '',
		redirectPage: '/',
	},
}

const GlobalProvider = ({ children }) => {
	const [value, setValue] = useState(defaultValue)

	return <GlobalContext.Provider value={{ value, setValue }}>{children}</GlobalContext.Provider>
}

export default GlobalProvider

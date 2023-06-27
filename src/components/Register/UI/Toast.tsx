import { useEffect, useContext } from 'react'
import { AuthCtx } from '../context/Auth'
export const Toast = () => {
	const { listenOnSubmitForm } = useContext(AuthCtx)
	useEffect(() => {
		listenOnSubmitForm()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])
	return null
}

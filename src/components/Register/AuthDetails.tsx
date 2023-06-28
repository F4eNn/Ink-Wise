import React, { useEffect, useState } from 'react'
import { auth } from '../../Config/firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'

export const AuthDetails = () => {
	const [authUser, setAuthUser] = useState<any>(null)
	useEffect(() => {
		const listen = onAuthStateChanged(auth, (user: any) => {
			if (user) {
				setAuthUser(user)
			} else {
				setAuthUser(null)
			}
		})
		return () => {
			listen()
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const userSignOut = async () => {
		try {
			await signOut(auth)
		} catch (err) {
			console.error(err)
		}
	}
	useEffect(() => {
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [authUser])
	return (
		<div>
			{authUser ? (
				<>
					<p>{`Signed In as ${authUser.displayName}`}</p>
					<button onClick={userSignOut}>Sign out button</button>
				</>
			) : (
				<p>Signed out</p>
			)}
		</div>
	)
}

import { collection, db } from '@/config/firebase'
import { getDocs } from 'firebase/firestore'
import React, { useEffect } from 'react'

export const Community = () => {
	useEffect(() => {
		const fetchUsers = async () => {
			const userCollection = collection(db, 'user-profile')
			const snapshot = await getDocs(userCollection)
			snapshot.docs.map(item => console.log(item.data()))
		}
		fetchUsers()
	}, [])

	return <></>
}

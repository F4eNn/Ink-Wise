'use client'
import React, { useEffect, useState } from 'react'
import { Avatar, Button } from '@/lib/chakra'
import { Card } from './ui/Card'
import { doc, onSnapshot, setDoc } from 'firebase/firestore'
import { db } from '@/config/firebase'
import { FormData } from './EditForm'
import { useAuth } from '@/hooks/useAuth'
import { EditForm } from './EditForm'
import { EditContent } from './EditContent'
import { useToggle } from '@/hooks/useToggle'

import { setInitData } from './userHelpers'

export const EditProfile = () => {
	const [isEdit, toggleForm] = useToggle()
	const [dataChanges, setData] = useState<FormData>()
	const { authUser } = useAuth()

	const userId = authUser?.uid

	
	if (userId) {
		const unsub = onSnapshot(doc(db, 'user-profile', userId), doc => {
			const source = doc.metadata.hasPendingWrites ? 'Local' : 'Server'
			if (doc.data() === undefined) return
			setData(doc.data() as FormData)
		})
	}
	useEffect(() => {
		if(userId)
		setInitData(userId)
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])
	return (
		<Card>
			{isEdit ? (
				<EditForm
					onToggle={toggleForm}
					userId={userId}
					valueName={authUser!.displayName!}
					valueBio={dataChanges!.bio}
					valueEmail={authUser!.email!}
				/>
			) : (
				<EditContent
					valueBio={
						dataChanges?.bio.length != 0 ? (dataChanges?.bio as string) : `Hello, I'm ${authUser?.displayName} 👋`
					}
				/>
			)}
			{!isEdit && (
				<Button
					mt='20'
					type='button'
					onClick={toggleForm}>
					Update profile
				</Button>
			)}
		</Card>
	)
}

'use client'
import React, { useEffect, useState } from 'react'
import { Button } from '@/lib/chakra'
import { Card } from './ui/Card'
import { doc, onSnapshot } from 'firebase/firestore'
import { db } from '@/config/firebase'
import { useAuth } from '@/hooks/useAuth'

import { useToggle } from '@/hooks/useToggle'

import { setInitData } from './helpers/editHelpers'
import { usePathname } from 'next/navigation'
import { Content } from './Content'
import { UpdateUserData } from './Forms/UpdateUserData'
import { EditCredential } from './EditCredential'
import { FormData } from './Forms/UpdateUserData'

export const EditProfile = () => {
	const [isEdit, toggleForm] = useToggle()
	const [newBio, setBio] = useState<Pick<FormData, 'bio'>>({ bio: '' })

	const pathname = usePathname()
	const { authUser } = useAuth()

	const userId = authUser?.uid

	useEffect(() => {
		if (userId) {
			const unsub = onSnapshot(doc(db, 'user-profile', userId), doc => {
				const source = doc.metadata.hasPendingWrites ? 'Local' : 'Server'
				if (doc.data() === undefined) return setInitData(userId)
				setBio(doc.data() as FormData)
			})
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [pathname])

	if (!authUser) return
	return (
		<Card>
			{isEdit ? (
				<>
					<UpdateUserData
						onToggle={toggleForm}
						userId={userId}
						valueName={authUser.displayName!}
						valueBio={newBio.bio}
						valueEmail={authUser.email!}
					/>
					<EditCredential />
				</>
			) : (
				<Content
					valueBio={newBio.bio.length != 0 ? newBio.bio : `Hello, I'm ${authUser.displayName} 👋`}
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

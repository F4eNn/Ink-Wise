'use client'
import React, { useEffect, useState } from 'react'
import { Button } from '@/lib/chakra'
import { Card } from './ui/Card'
import { doc, onSnapshot } from 'firebase/firestore'
import { db } from '@/config/firebase'
import { useAuth } from '@/hooks/useAuth'

import { useToggle } from '@/hooks/useToggle'

import { Content } from './Content'
import { UpdateUserData } from './forms/UpdateUserData'
import { EditCredential } from './EditCredential'
import { FormData } from '../../../helpers/editProfile'
import { useDate } from '@/hooks/useDate'
import { Heading } from '@/components/ui/Heading'

export const EditProfile = () => {
	const [isEdit, toggleForm] = useToggle()
	const [newBio, setBio] = useState<Pick<FormData, 'bio'>>({ bio: '' })

	const { authUser } = useAuth()
	const userId = authUser?.uid
	const [created] = useDate(authUser?.metadata.creationTime)

	useEffect(() => {
		if (userId) {
			onSnapshot(doc(db, 'user-profile', userId), doc => {
				doc.metadata.hasPendingWrites ? 'Local' : 'Server'
				setBio(doc.data() as FormData)
			})
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isEdit])

	if (!authUser) return
	return (
		<Card>
			<Heading title='Edit profile' />
			{isEdit ? (
				<>
					<UpdateUserData
						onToggle={toggleForm}
						userId={userId}
						valueName={authUser.displayName!}
						valuePhoto={authUser.photoURL!}
						valueBio={newBio.bio}
					/>
					<EditCredential />
				</>
			) : (
				<Content
					valueBio={newBio.bio}
					created={created}
					name={authUser.displayName!}
					email={authUser.email!}
					photo={authUser.photoURL!}
				/>
			)}
			{!isEdit && (
				<Button
					variant='primary'
					mt='5'
					type='button'
					onClick={toggleForm}>
					Update profile
				</Button>
			)}
		</Card>
	)
}

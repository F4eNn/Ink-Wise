'use client'
import React, { useEffect, useState } from 'react'
import { Button } from '@/lib/chakra'
import { Card } from './ui/Card'
import { doc, onSnapshot } from 'firebase/firestore'
import { db } from '@/config/firebase'
import { FormData } from './EditForm'
import { useAuth } from '@/hooks/useAuth'
import { EditForm } from './EditForm'
import { EditContent } from './EditContent'
import { useToggle } from '@/hooks/useToggle'

import { setInitData } from './userHelpers'
import { LoadingSkeleton } from '@/components/ui/LoadingSkeleton'
import { usePathname } from 'next/navigation'
export const EditProfile = () => {
	const [isEdit, toggleForm] = useToggle()
	const [dataChanges, setData] = useState<FormData>()
	const [isLoading, setIsLoading] = useState(false)

	const pathname = usePathname()
	const { authUser } = useAuth()

	const userId = authUser?.uid

	useEffect(() => {
		if (userId) {
			const unsub = onSnapshot(doc(db, 'user-profile', userId), doc => {
				const source = doc.metadata.hasPendingWrites ? 'Local' : 'Server'
				if (doc.data() === undefined) return setInitData(userId)
				setData(doc.data() as FormData)
			})
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [pathname])

	return (
		<>
			{isLoading && <LoadingSkeleton />}
			<Card>
				{isEdit ? (
					<EditForm
						onToggle={toggleForm}
						userId={userId}
						valueName={authUser!.displayName!}
						valueBio={dataChanges!.bio}
						valueEmail={authUser!.email!}
						onLoading={setIsLoading}
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
		</>
	)
}

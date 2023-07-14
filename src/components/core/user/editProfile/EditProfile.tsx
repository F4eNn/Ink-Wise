'use client'
import React, { useEffect, useState } from 'react'
import { Button } from '@/lib/chakra'
import { Card } from './ui/Card'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '@/config/firebase'
import { FormData } from './ui/SharedTypes'
import { useAuth } from '@/hooks/useAuth'
import { EditForm } from './EditForm'
import { EditContent } from './EditContent'

export const EditProfile = () => {
	const [isEdit, setIsEdit] = useState(false)
	const [dataChanges, setData] = useState<FormData>()
	const { authUser } = useAuth()
	const beginEdit = () => setIsEdit(true)
	const saveChanges = () => setIsEdit(false)

	const userId = authUser?.uid

	useEffect(() => {
		if (!userId) return
		const getProfileInfo = async () => {
			const data = await getDoc(doc(db, 'user-profile', userId))
			if (data.exists()) {
				setData(data.data() as FormData)
			} else {
				console.error('No such document')
			}
		}
		getProfileInfo()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isEdit])

	return (
		<Card>
			{isEdit ? (
				<EditForm
					onSave={saveChanges}
					userId={userId}
					valueBio={dataChanges!.bio}
				/>
			) : (
				<EditContent />
			)}
			{!isEdit && (
				<Button
					mt='20'
					type='button'
					onClick={beginEdit}>
					Update
				</Button>
			)}
		</Card>
	)
}


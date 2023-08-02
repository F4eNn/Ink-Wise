'use client'

import React from 'react'
import { Card } from '../user/ui/Card'
import { useForm } from 'react-hook-form'

import { useAuth } from '@/hooks/useAuth'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '@/config/firebase'
import { useDate } from '@/hooks/useDate'
import { NoteForm } from './NoteForm'
import { Heading } from '@/components/ui/Heading'

export type NoteValues = {
	title: string
	content: string
	category: string
	tag: string
	userId: string
	created: string
}

export type NoteFormValue = {
	title: string
	content: string
	category: string
	tag: string
	id: string
}
export const CreateNote = () => {
	const { authUser } = useAuth()
	const userId = authUser?.uid

	const { reset } = useForm()

	const addNote = async (data: NoteValues) => {
		const noteRef = collection(db, 'notes')
		await addDoc(noteRef, {
			...data,
		})
	}
	const [createTime] = useDate()
	const onSubmit = async (data: NoteFormValue) => {
		if (!authUser || !userId) return
		await addNote({
			...data,
			userId: userId,
			created: createTime,
		})
		reset()
	}

	return (
		<Card>
			<Heading title='Create Your Note' />
			<NoteForm
				onSendForm={onSubmit}
				buttonDesc='Create'
			/>
		</Card>
	)
}

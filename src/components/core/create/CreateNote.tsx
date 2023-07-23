'use client'
import React from 'react'
import { Card } from '../user/ui/Card'
import { NoteInput } from '@/components/core/create/ui/NoteInput'
import { useForm } from 'react-hook-form'
import { Button, Box, Heading } from '@/lib/chakra'
import { TextArea } from '@/components/ui/TextArea'
import { SelectInput } from '@/components/ui/SelectInput'

// import { addNote } from '@/helpers/note'
import { useAuth } from '@/hooks/useAuth'
import { collection, doc, getDoc, setDoc, updateDoc } from 'firebase/firestore'
import { db } from '@/config/firebase'
import { v4 as uniqueId } from 'uuid'

export type NoteValues = {
	[x: string]: {
		category: string
		content: string
		tagOption: string
		title: string
	}
}

export type DashboardData = {
	tasks: NoteValues[]
	column: {
		id: 'column'
		title: 'Important' | 'Urgent' | 'Minor'
		taskIds: string[]
	}
}

export const initialData: DashboardData = {
	tasks: [],
	column: {
		id: 'column',
		title: 'Important',
		taskIds: [],
	},
}

export type NoteFormValue = {
	title: string
	content: string
	categoryOption: string
	tagOption: string
	id: string
}

export const CreateNote = () => {

	const { authUser } = useAuth()
	const userId = authUser?.uid
	
	const { register, formState, handleSubmit, reset } = useForm<NoteFormValue>({
		defaultValues: {
			title: '',
			content: '',
			categoryOption: '',
			tagOption: '',
		},
	})

	const { errors } = formState

	const addNote = async (data: NoteFormValue) => {
		const docRef = doc(db, 'notes', userId!)

		try {
			const docSnap = await getDoc(docRef)

			if (docSnap.exists()) {
				const currentSnap = docSnap.data()

				const newData = {
					tasks: [...currentSnap.tasks, data],
					column: {
						...currentSnap.column,
						taskIds: [...currentSnap.column.taskIds, data.id],
					},
				}
				await updateDoc(docRef, newData)
			} else {
				const newData = {
					...initialData,
					tasks: [data],
					column: {
						...initialData.column,
						taskIds: [data.id],
					},
				}
				await setDoc(docRef, newData)
			}
		} catch (error) {
			console.error(error)
		}
	}
	const onSubmit = async (data: NoteFormValue) => {
		if (!authUser) return
		await addNote({
			...data,
			id: uniqueId(),
		})
		reset()
	}
	return (
		<Card>
			<Heading
				as='h1'
				mb='10'
				textAlign='center'>
				Create your first note!
			</Heading>
			<Box
				w='full'
				as='form'
				onSubmit={handleSubmit(onSubmit)}>
				<NoteInput
					errors={errors.title?.message}
					register={register}
				/>
				<TextArea
					name='content'
					placeholder='Note Content'
					register={register}
					title='Content'
					error={errors.content?.message}
				/>
				<SelectInput
					error={errors.categoryOption?.message}
					name='categoryOption'
					option='personal'
					option2='work'
					option3='study'
					placeholder='Category'
					register={register}
				/>
				<SelectInput
					error={errors.tagOption?.message}
					name='tagOption'
					option='important'
					option2='urgent'
					option3='minor'
					placeholder='Tags'
					register={register}
				/>
				<Button
					mt='5'
					w='full'
					variant='primary'
					type='submit'>
					Submit
				</Button>
			</Box>
		</Card>
	)
}

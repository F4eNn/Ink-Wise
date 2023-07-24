'use client'

import React from 'react'
import { Card } from '../user/ui/Card'
import { NoteInput } from '@/components/core/create/ui/NoteInput'
import { useForm } from 'react-hook-form'
import { Button, Box, Heading } from '@/lib/chakra'
import { TextArea } from '@/components/ui/TextArea'
import { SelectInput } from '@/components/ui/SelectInput'

import { useAuth } from '@/hooks/useAuth'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '@/config/firebase'

export type NoteValues = {
	title: string
	content: string
	category: string
	tagOption: string
	userId: string
}

export type NoteFormValue = {
	title: string
	content: string
	category: string
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
			category: '',
			tagOption: '',
		},
	})

	const { errors } = formState

	const addNote = async (data: NoteValues) => {
		const noteRef = collection(db, 'notes')
		await addDoc(noteRef, {
			...data,
		})
	}
	const onSubmit = async (data: NoteFormValue) => {
		if (!authUser || !userId) return
		await addNote({
			...data,
			userId: userId,
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
					error={errors.category?.message}
					name='category'
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

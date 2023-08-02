import React, { useEffect } from 'react'
import { NoteInput } from './ui/NoteInput'
import { TextArea } from '@/components/ui/inputs/TextArea'
import { SelectInput } from '@/components/ui/inputs/SelectInput'
import { Box, Button } from '@/lib/chakra'
import { useForm } from 'react-hook-form'

export type NoteFormValue = {
	title: string
	content: string
	category: string
	tag: string
	id: string
}

interface NoteFormProps {
	onSendForm: (data: NoteFormValue) => Promise<void>
	title?: string
	content?: string
	tag?: string
	category?: string
	buttonDesc: string
	applyReset?: boolean
}

export const NoteForm = ({
	onSendForm,
	category,
	content,
	tag,
	title,
	buttonDesc,
	applyReset = true,
}: NoteFormProps) => {
	const { register, formState, handleSubmit, setValue, reset } = useForm<NoteFormValue>({
		defaultValues: {
			title: '',
			content: '',
			category: '',
			tag: '',
		},
	})

	const { errors } = formState

	useEffect(() => {
		setValue('title', title!)
		setValue('content', content!)
		setValue('tag', tag!)
		setValue('category', category!)
	}, [setValue, title, content, category, tag])

	const onSubmit = (data: NoteFormValue) => {
		onSendForm(data)
		if (applyReset) {
			reset()
		}
	}

	return (
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
				error={errors.tag?.message}
				name='tag'
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
				{buttonDesc}
			</Button>
		</Box>
	)
}

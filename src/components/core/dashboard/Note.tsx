import React, { Dispatch, SetStateAction } from 'react'
import { Box, Flex, useDisclosure } from '@/lib/chakra'

import { Notes } from './Dashboard'

import { NoteHeading } from './ui/NoteHeading'
import { Content } from './ui/Content'
import { Tag } from './ui/Tag'
import { NoteContainer } from './ui/NoteContainer'
import { Details } from './Details'
import { Button } from './ui/Button'
import { EditNote } from './EditNote'
import { ButtonBox } from './ui/ButtonBox'

interface ContainerProps {
	content: string
	category: string
	tag: string
	title: string
	id: string
	created: string
	userId: string
	setNewNotes: Dispatch<SetStateAction<Notes[] | undefined>>
}

export const Note = ({ tag, category, content, title, id, setNewNotes, userId, created }: ContainerProps) => {
	const { isOpen: isOpenDetails, onClose: onCloseDetails, onOpen: onOpenDetails } = useDisclosure()
	const { isOpen: isOpenEdit, onClose: onCloseEdit, onOpen: onOpenEdit } = useDisclosure()
	const noteValues = { tag, category, title, content, created }

	return (
		<NoteContainer>
			<NoteHeading
				category={category}
				title={title}
			/>
			<Content content={content} />
			<Details
				{...noteValues}
				isOpen={isOpenDetails}
				onClose={onCloseDetails}
			/>
			<EditNote
				{...noteValues}
				setNewNotes={setNewNotes}
				userId={userId}
				noteId={id}
				onClose={onCloseEdit}
				isOpen={isOpenEdit}
			/>
			<Box ml='3'>
				<Tag tag={tag} />
			</Box>
			<ButtonBox
				desc='Edit'
				desc2='Details'
				onHandleClick={onOpenEdit}
				onHandleClick2={onOpenDetails}
			/>
		</NoteContainer>
	)
}

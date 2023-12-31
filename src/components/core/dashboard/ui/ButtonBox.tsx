/* eslint-disable no-unused-vars */
import React from 'react'
import { Flex } from '@/lib/chakra'
import { Button } from './Button'

interface ButtonBox {
	onHandleClick: () => void
	onHandleClick2: () => void
	desc: string
	desc2: string
}

export const ButtonBox = ({ desc, desc2, onHandleClick2, onHandleClick }: ButtonBox) => {
	return (
		<Flex
			justifyContent='flex-end'
			gap='5'
			my='8'>
			<Button onInteraction={onHandleClick}>{desc}</Button>
			<Button onInteraction={onHandleClick2}>{desc2}</Button>
		</Flex>
	)
}

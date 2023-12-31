import React, { ReactNode } from 'react'
import { UnorderedList } from '@/lib/chakra'

const customScrollbarStyle = {
	'&::-webkit-scrollbar': {
		width: '8px',
	},
	'&::-webkit-scrollbar-track': {
		width: '12px',
	},
	'&::-webkit-scrollbar-thumb': {
		background: '#3333335e',
		borderRadius: '25px',
	},
}
export const CardList = ({ children }: { children: ReactNode }) => {
	return (
		<UnorderedList
			pr={['1','6']}
			pl={['1' ,'2']}
			css={customScrollbarStyle}
			display='flex'
			gap='5'
			flexWrap='wrap'
			justifyContent='space-around'
			overflowX='hidden'
			overflowY='auto'>
			{children}
		</UnorderedList>
	)
}

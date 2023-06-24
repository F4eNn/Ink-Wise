import React from 'react'
import styled from 'styled-components'
import { Box } from '../../../lib/chakra'

const StyledCard = styled(Box)`
	border-radius: 15px;
	width: 100%;
	padding-inline: 40px;
	padding-block: 30px;
	font-size: clamp(1em, 2.5vw, 1.2em);
	margin-top: 20px;
`

export const Card = ({ children, mode }: { children: React.ReactNode; mode: string; handleSubmit?: any }) => {
	return (
		<StyledCard
			bg={mode === 'dark' ? '' : 'veryLightBrown'}
			borderWidth={1}
			borderColor={mode === 'dark' ? 'grey' : 'lightBrown'}>
			{children}
		</StyledCard>
	)
}

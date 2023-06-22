'use client'
import React from 'react'
import { Button as ButtonChakra } from '../../lib/chakra'
import styled from 'styled-components'

const StyledButton = styled(ButtonChakra)<{$bg?: string, $radius: string }>`
	width: 100%;
	margin-top: 20px;
	padding: 33px;
	font-size: 1em;
    text-transform: capitalize;
	border-radius: ${props => props.$radius || '30px'};
    background-color: ${props => props.$bg || ''};
`

export const Button = ({ name, children }: { name: string; children?: React.ReactNode }) => {
	return (
		<StyledButton>
			{children}
			{name}
		</StyledButton>
	)
}

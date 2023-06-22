'use client'
import React from 'react'
import { FormLabel, FormErrorMessage, FormHelperText, Stack, Box } from '../../lib/chakra'

import { FormControl } from '../../lib/chakra'
import styled from 'styled-components'
import { Logo } from '../UI/Logo'
import { Input } from './Input'
import { Button } from './Button'
import { GoogleIcon } from '../Icons/GoogleIcon'
import { GithubIcon } from '../Icons/GithubIcon'

export const StyledForm = styled(FormControl)`
	border: 1px solid grey;
	background-color: #00000030;
	border-radius: 15px;
	width: 100%;
	padding-inline: 40px;
	padding-block: 50px;
	margin-inline: auto;
	font-size: 1.4em;
	margin-top: 40px;
`
export const Login = () => {
	return (
		<Stack
			w={'90%'}
			mt={'10vh'}
			maxW={'650px'}>
			<Logo size='100%' />
			<StyledForm>
				<Button name='Created with Google'>
					<Box
						w={10}
						h={10}>
						<GoogleIcon />
					</Box>
				</Button>
				<Button name='Created with Google'>
					<Box
						w={'10'}
						h={'10'}>
						<GithubIcon />
					</Box>
				</Button>
				<FormLabel fontSize={'inherit'}>Name</FormLabel>
				<Input />
				<FormLabel fontSize={'inherit'}>Password</FormLabel>
				<Input />
				<Button name='enter' />
			</StyledForm>
		</Stack>
	)
}

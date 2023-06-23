'use client'
import React from 'react'
import { FormLabel, Stack, Button, useColorMode } from '../../lib/chakra'
import { FormControl } from '../../lib/chakra'
import styled from 'styled-components'
import { Logo } from '../UI/Logo'
import { Input } from './Input'
import { GoogleIcon } from '@/components/Icons/GoogleIcon'
import { GithubIcon } from '../Icons/GithubIcon'

export const StyledForm = styled(FormControl)`
	border-radius: 15px;
	width: 100%;
	padding-inline: 40px;
	padding-block: 30px;
	font-size: clamp(1em, 2.5vw, 1.2em);
	margin-top: 20px;
	
`
export const Login = () => {
	const { colorMode } = useColorMode()

	return (
		<Stack
			w={'90%'}
			mt={'15px'}
			maxW={'550px'}
			mb={20}>
			<Logo size='100%' />
			<StyledForm
				bg={colorMode === 'dark' ? '' : 'veryLightBrown'}
				borderWidth={1}
				borderColor={colorMode === 'dark' ? 'grey' : 'lightBrown'}>
				<Button
					variant={colorMode === 'dark' ? '' : 'outline'}
					leftIcon={<GoogleIcon />}
					bg='white'
					w='full'
					py={7}
					_hover={{
						bg: 'veryLightGrey',
					}}
					fontSize='.8em'
					color='darkBrown'>
					Continue with Google
				</Button>
				<Button
					variant={colorMode === 'dark' ? '' : 'outline'}
					bg='darkBrown'
					color='white'
					py={7}
					mt={3}
					mb={5}
					_hover={{
						bg: 'darkBrownHover',
					}}
					fontSize='.8em'
					leftIcon={<GithubIcon />}
					w='full'>
					Continue with Github
				</Button>
				<FormLabel fontSize={'inherit'}>Name</FormLabel>
				<Input />
				<FormLabel fontSize={'inherit'}>Password</FormLabel>
				<Input />
				<Button
					variant={'outlineDark'}
					bg={colorMode === 'dark' ? 'darkBrown' : 'white'}
					rounded={'3xl'}
					py={7}
					w='full'>
					Enter
				</Button>
			</StyledForm>
		</Stack>
	)
}

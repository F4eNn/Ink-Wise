'use client'
import React from 'react'
import { FormLabel, useColorMode } from '../../lib/chakra'

import { Logo } from '../UI/Logo'
import { Input } from './Input'

import { Card } from './UI/Card'
import { FormContainer } from './UI/FormContainer'
import { Submit } from './UI/Submit'
import { GoogleBtn } from './UI/GoogleBtn'
import { GitHubBtn } from './UI/GitHubBtn'
import { HasAccount } from './UI/HasAccount'

export const Login = () => {
	const { colorMode } = useColorMode()
	return (
		<Card>
			<Logo size='100%' />
			<FormContainer mode={colorMode}>
				<GoogleBtn mode={colorMode} />
				<GitHubBtn mode={colorMode} />
				<FormLabel fontSize={'inherit'}>Name</FormLabel>
				<Input />
				<FormLabel fontSize={'inherit'}>Password</FormLabel>
				<Input />
				<Submit mode={colorMode}>Enter</Submit>
				<HasAccount hasAccount={false}/>
			</FormContainer>
		</Card>
	)
}

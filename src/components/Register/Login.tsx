'use client'
import React from 'react'
import { FormLabel, useColorMode, Input } from '../../lib/chakra'

import { Logo } from '../UI/Logo'
// import { Input } from './UI/Input'
import { Form } from './UI/Form'
import { Card } from './UI/Card'
import { Submit } from './UI/Submit'
import { GoogleBtn } from './UI/GoogleBtn'
import { GitHubBtn } from './UI/GitHubBtn'
import { RegisterLink } from './UI/RegisterLink'

export const Login = () => {
	const { colorMode } = useColorMode()
	return (
		<Form>
			<Logo size='100%' />
			<Card mode={colorMode}>
				<GoogleBtn mode={colorMode} />
				<GitHubBtn mode={colorMode} />
				<FormLabel fontSize={'inherit'}>Username</FormLabel>
				<Input
					type='username'
					placeholder='Name'
				/>
				<FormLabel fontSize={'inherit'}>Password</FormLabel>
				<Input
					type='password'
					placeholder='Password'
				/>
				<Submit mode={colorMode}>Enter</Submit>
				<RegisterLink
					content="Don't have an account?"
					linkDesc='Sign in'
					path='/signup'
				/>
			</Card>
		</Form>
	)
}

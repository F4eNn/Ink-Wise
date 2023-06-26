'use client'
import React, { FormEvent, useContext } from 'react'
import { FormLabel, useColorMode, Input } from '../../lib/chakra'
import { Logo } from '../UI/Logo'
import { Form } from './UI/Form'
import { Card } from './UI/Card'
import { Submit } from './UI/Submit'
import { GoogleBtn } from './UI/GoogleBtn'
import { GitHubBtn } from './UI/GitHubBtn'
import { RegisterLink } from './UI/RegisterLink'
import { userAuthContext } from './context/userAuth'

import { auth } from '../../Config/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'

export const Login = () => {
	const { colorMode } = useColorMode()
	const { userData } = useContext(userAuthContext)

	const signIn = async (e: FormEvent) => {
		e.preventDefault()
		try {
			const login = await signInWithEmailAndPassword(auth, userData?.email, userData?.password)
			console.log(login)
		} catch (err) {
			console.error(err)
		}
	}

	return (
		<Form>
			<Logo size='100%' />
			<Card mode={colorMode}>
				<GoogleBtn mode={colorMode} />
				<GitHubBtn mode={colorMode} />
				<FormLabel fontSize={'inherit'}>Email</FormLabel>
				<Input
					mb={5}
					py={5}
					variant={'flushed'}
					fontSize={'.8em'}
					focusBorderColor='gold'
					type='email'
					placeholder='john.doe@johndoehub.com'
				/>
				<FormLabel fontSize={'inherit'}>Password</FormLabel>
				<Input
					mb={5}
					py={5}
					variant={'flushed'}
					fontSize={'.8em'}
					focusBorderColor='gold'
					type='password'
					placeholder='Password'
				/>
				<Submit
					// onLogin={signIn}
					mode={colorMode}>
					Enter
				</Submit>
				<RegisterLink
					content="Don't have an account?"
					linkDesc='Sign in'
					path='/signup'
				/>
			</Card>
		</Form>
	)
}

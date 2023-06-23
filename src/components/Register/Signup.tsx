'use client'
import React from 'react'
import { Card } from './UI/Card'
import { FormContainer } from './UI/FormContainer'
import { useColorMode, Heading, FormLabel } from '@/lib/chakra'
import { Submit } from './UI/Submit'
import { Input } from './Input'
import { GoogleBtn } from './UI/GoogleBtn'
import { GitHubBtn } from './UI/GitHubBtn'
import { Logo } from '../UI/Logo'
import { HasAccount } from './UI/HasAccount'

export const Signup = () => {
	const { colorMode } = useColorMode()

	return (
		<Card>
      <Logo size='100%'/>
			<FormContainer mode={colorMode}>
				<Heading
					as='h1'
					mb={5}
					fontSize={'1.4em'}
					textAlign={'center'}>
					Your Ink, Your Wisdom, Your Way!
				</Heading>
				<GoogleBtn mode={colorMode} />
				<GitHubBtn mode={colorMode} />
				<FormLabel fontSize={'inherit'}>Username</FormLabel>
				<Input />
				<FormLabel fontSize={'inherit'}>Email</FormLabel>
				<Input />
				<FormLabel fontSize={'inherit'}>Password</FormLabel>
				<Input />
				<Submit mode={colorMode}>Create</Submit>
        <HasAccount hasAccount={true} />
			</FormContainer>
		</Card>
	)
}

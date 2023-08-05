'use client'
import React, { useEffect, useState } from 'react'

import { Logo } from '../ui/Logo'
import { Form } from './ui/Form'
import { Card } from './ui/Card'
import { Submit } from './ui/Submit'
import { GoogleBtn } from './ui/GoogleBtn'
import { GitHubBtn } from './ui/GitHubBtn'
import { RegisterLink } from './ui/RegisterLink'
import { EmailInput } from '../ui/inputs/EmailInput'
import { PasswordInput } from '../ui/inputs/PasswordInput'

import { auth } from '../../config/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'

import { useForm, SubmitHandler, FieldValues } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { Button, Center, useColorMode } from '@/lib/chakra'

import { motion } from '@/lib/motion'
import { pulseAnimation } from '@/animations/GeneralAnimations'

export const Login = () => {
	const { colorMode } = useColorMode()
	const [isTestAccount, setIsTestAccount] = useState(false)
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [InvalidCredentials, setInvalidCredentials] = useState(false)
	const { register, formState, handleSubmit, setValue } = useForm({
		defaultValues: {
			email: '',
			password: '',
		},
	})
	const { errors } = formState
	const router = useRouter()
	const signIn = async (email: string, password: string) => {
		setIsSubmitting(true)
		setInvalidCredentials(false)
		try {
			await signInWithEmailAndPassword(auth, email, password)
			const user = auth.currentUser?.displayName
			router.push(`/${user}`)
			setIsSubmitting(false)
		} catch (err) {
			setInvalidCredentials(true)
			setIsSubmitting(false)
		}
	}

	const onSubmit: SubmitHandler<FieldValues> = user => {
		signIn(user.email, user.password)
	}
	const handleTestAccount = () => {
		setIsTestAccount(true)
	}
	useEffect(() => {
		if (isTestAccount) {
			setValue('email', 'nadia@doe.com')
			setValue('password', 'Minutes1!')
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isTestAccount])

	return (
		<>
			<Form handleSubmit={handleSubmit(onSubmit)}>
				<Logo size='100%' />
				<Card>
					<GoogleBtn mode={colorMode} />
					<GitHubBtn mode={colorMode} />
					<Button
						as={motion.button}
						variants={pulseAnimation}
						variant='primary'
						fontSize='md'
						my='3'
						onClick={handleTestAccount}>
						Test Account
					</Button>
					<Center
						color='error'
						fontSize={'.85em'}
						mb={5}>
						{InvalidCredentials && 'Email or password are Invalid!'}
					</Center>
					<EmailInput
						errors={errors.email?.message}
						register={register}
					/>
					<PasswordInput
						errors={errors.password?.message}
						register={register}
					/>
					<Submit
						loadingText='Entering'
						isLoading={isSubmitting}>
						Enter
					</Submit>
					<RegisterLink
						content="Don't have an account?"
						linkDesc='Sign in'
						path='/signup'
					/>
				</Card>
			</Form>
		</>
	)
}

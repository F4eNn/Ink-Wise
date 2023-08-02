'use client'
import React, { useState } from 'react'
import { Logo } from '../ui/Logo'
import { Form } from './ui/Form'
import { Card } from './ui/Card'
import { Submit } from './ui/Submit'
import { GoogleBtn } from './ui/GoogleBtn'
import { GitHubBtn } from './ui/GitHubBtn'
import { RegisterLink } from './ui/RegisterLink'
import { auth } from '../../config/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { InputControl } from './ui/InputControl'
import { Toast } from './ui/Toast'
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { useProtectedRoute } from '@/hooks/useProtectedRoute'
import { Center, useColorMode } from '@/lib/chakra'
import { EmailInput } from '../ui/inputs/EmailInput'
import { PasswordInput } from '../ui/inputs/PasswordInput'
export const Login = () => {
	const { colorMode } = useColorMode()
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [InvalidCredentials, setInvalidCredentials] = useState(false)
	const { register, formState, handleSubmit } = useForm({
		defaultValues: {
			email: '',
			password: '',
		},
	})
	const { errors } = formState
	const router = useRouter()
	useProtectedRoute()
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

	return (
		<>
			<Form handleSubmit={handleSubmit(onSubmit)}>
				<Logo size='100%' />
				<Toast />
				<Card>
					<GoogleBtn mode={colorMode} />
					<GitHubBtn mode={colorMode} />
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

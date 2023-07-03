'use client'
import React, { useState} from 'react'
import { useColorMode, Center } from '../../lib/chakra'
import { Logo } from '../UI/Logo'
import { Form } from './UI/Form'
import { Card } from './UI/Card'
import { Submit } from './UI/Submit'
import { GoogleBtn } from './UI/GoogleBtn'
import { GitHubBtn } from './UI/GitHubBtn'
import { RegisterLink } from './UI/RegisterLink'
import { auth } from '../../Config/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { InputControl } from './UI/InputControl'
import { Toast } from './UI/Toast'
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { useProtectedRoute } from '@/hooks/useProtectedRoute'
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
				<Card mode={colorMode}>
					<GoogleBtn mode={colorMode} />
					<GitHubBtn mode={colorMode} />
					<Center
						color='error'
						fontSize={'.85em'}
						mb={5}>
						{InvalidCredentials && 'Email or password are Invalid!'}
					</Center>
					<InputControl
						mode={colorMode}
						error={errors.email && errors.email.message}
						isInvalid={!!errors.email}
						name='email'
						palaceholder='john.doe@johndoehub.com'
						register={register}
						registerValue={{
							required: {
								value: true,
								message: 'This field is required',
							},
							validate: email => email.trim().length > 0 || 'This field is required',
						}}
						type='email'
					/>
					<InputControl
						mode={colorMode}
						error={errors.password && errors.password.message}
						isInvalid={!!errors.password}
						name='password'
						palaceholder='Password'
						register={register}
						registerValue={{
							required: {
								value: true,
								message: 'This field is required',
							},
							validate: password => password.trim().length > 0 || 'This field is required',
						}}
						type='password'
					/>
					<Submit
						loadingText='Entering'
						isLoading={isSubmitting}
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
		</>
	)
}

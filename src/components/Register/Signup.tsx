'use client'
import React, { FormEvent, useContext, useState } from 'react'
import { Form } from './UI/Form'
import { Card } from './UI/Card'
import { useColorMode, Heading } from '@/lib/chakra'
import { Submit } from './UI/Submit'
import { GoogleBtn } from './UI/GoogleBtn'
import { GitHubBtn } from './UI/GitHubBtn'
import { Logo } from '../UI/Logo'
import { RegisterLink } from './UI/RegisterLink'
import { useForm, SubmitHandler } from 'react-hook-form'
import { InputControl } from './UI/InputControl'
import { userAuthContext } from './context/userAuth'
import { UserDataProps } from './context/userAuth'
import isEmail from 'validator/lib/isEmail'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../Config/firebase'
import { useRouter } from 'next/navigation'
export const Signup = () => {
	const [emailExist, setEmailExist] = useState(false)
	const containsCapitalLetter = /(?=.*[A-Z])/
	const containsSpecialChar = /(?=.*\W)/
	const { getUserData } = useContext(userAuthContext)
	const { colorMode } = useColorMode()
	const { register, handleSubmit, formState, reset } = useForm({
		defaultValues: {
			username: '',
			email: '',
			password: '',
		},
	})
	const { errors } = formState
	const router = useRouter()

	const signUp = async (email: string, password: string, e?: FormEvent) => {
		e?.preventDefault()
		try {
			await createUserWithEmailAndPassword(auth, email, password)
			setEmailExist(false)
			router.push('/login')
			reset()
		} catch (err: any) {
			console.log(err.code)
			console.error(err)
			if ((err as { code: string }).code == 'auth/email-already-in-use') {
				console.log('true')
				setEmailExist(true)
			} else {
				setEmailExist(false)
			}
		}
	}
	console.log(emailExist)
	const onSubmit: SubmitHandler<UserDataProps> = data => {
		getUserData(data)
		signUp(data.email, data.password)
	}

	return (
		<Form handleSubmit={handleSubmit(onSubmit)}>
			<Logo size='100%' />
			<Card mode={colorMode}>
				<Heading
					as='h1'
					bgGradient={colorMode === 'dark' ? 'linear(to-l, gold, #fff) ' : 'linear(to-l, darkBrown, lightBrown) '}
					bgClip='text'
					mt={3}
					mb={10}
					fontSize={'1.4em'}
					textAlign={'center'}>
					Your Ink, Your Wisdom, Your Way!
				</Heading>
				<GoogleBtn mode={colorMode} />
				<GitHubBtn mode={colorMode} />
				<InputControl
					mode={colorMode}
					error={errors.username && errors.username.message}
					isInvalid={!!errors.username}
					name='username'
					palaceholder='John'
					register={register}
					registerValue={{
						required: {
							value: true,
							message: 'This field is required',
						},
						validate: {
							hasMinLength: username => {
								return username.length >= 3 || 'min. 3 characters'
							},
							hasSpecialChar: username => {
								return !containsSpecialChar.test(username) || "Username can't contain special characters"
							},
						},
					}}
					type='text'
				/>
				<InputControl
					mode={colorMode}
					error={errors.email && errors.email.message}
					isInvalid={!!errors.email}
					name='email'
					palaceholder='john.doe@johondoehub.com'
					register={register}
					registerValue={{
						required: {
							value: true,
							message: 'This field is required',
						},
						validate: email => isEmail(email) || 'Provide valid email',
					}}
					type='email'
				/>
				<InputControl
					mode={colorMode}
					error={errors.password && errors.password.message}
					isInvalid={!!errors.password}
					name='password'
					palaceholder='password'
					register={register}
					registerValue={{
						required: {
							value: true,
							message: 'This field is required',
						},
						validate: {
							isShort: password => {
								return password.length >= 6 || 'min. 6 characters'
							},
							hasBigLetter: password => {
								return containsCapitalLetter.test(password) || 'Atleast one capital letter'
							},
							hasSpecialChar: password => {
								return containsSpecialChar.test(password) || 'Atleast one special char.'
							},
						},
					}}
					type='password'
				/>
				<Submit
					// onLogin={signUp}
					mode={colorMode}>
					Create
				</Submit>
				<RegisterLink
					content='Have an account already?'
					path='/login'
					linkDesc='Log in'
				/>
			</Card>
		</Form>
	)
}

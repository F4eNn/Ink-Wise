'use client'
import React from 'react'
import { Form } from './UI/Form'
import { Card } from './UI/Card'
import { useColorMode, Heading} from '@/lib/chakra'
import { Submit } from './UI/Submit'

import { GoogleBtn } from './UI/GoogleBtn'
import { GitHubBtn } from './UI/GitHubBtn'
// import { Logo } from '../UI/Logo'
import { RegisterLink } from './UI/RegisterLink'

import { useForm, SubmitHandler, FieldValues } from 'react-hook-form'
import { InputControl } from './UI/InputControl'

export const Signup = () => {
	const { colorMode } = useColorMode()
	const { register, handleSubmit, formState, reset } = useForm({
		defaultValues: {
			username: '',
			email: '',
			password: '',
		},
	})
	const { errors } = formState
	const onSubmit: SubmitHandler<FieldValues> = (data: any) => {
		reset()
		console.log(data)
	}
	const containsCapitalLetter = /(?=.*[A-Z])/
	const containsSpecialChar = /(?=.*\W)/
	return (
		<Form handleSubmit={handleSubmit(onSubmit)}>
			{/* <Logo size='100%' /> */}
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
						validate: name => name.length >= 3 || 'min. 3 characters',
					}}
					type='text'
				/>
				<InputControl
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
						// validate: email => isEmail(email) || 'Provide valid email',
					}}
					type='email'
				/>
				<InputControl
					error={errors.password && errors.password.message}
					isInvalid={!!errors.password}
					name='password'
					palaceholder='john.doe@johondoehub.com'
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
								return containsCapitalLetter.test(password) || 'atleast one capital letter'
							},
							hasSpecialSign: password => {
								return containsSpecialChar.test(password) || 'atleast one special char.'
							},
						},
					}}
					type='password'
				/>
				<Submit mode={colorMode}>Create</Submit>
				<RegisterLink
					content='Have an account already?'
					path='/login'
					linkDesc='Log in'
				/>
			</Card>
		</Form>
	)
}

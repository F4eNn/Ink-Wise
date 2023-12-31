'use client'
import React, { useState } from 'react'

import { useColorMode, Heading } from '@/lib/chakra'

import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth } from '../../config/firebase'

import { useForm, SubmitHandler, FieldValues } from 'react-hook-form'

import { Form } from './ui/Form'
import { Card } from './ui/Card'
import { Submit } from './ui/Submit'
import { GoogleBtn } from './ui/GoogleBtn'
import { GitHubBtn } from './ui/GitHubBtn'
import { Logo } from '../ui/Logo'
import { PasswordInput } from '../ui/inputs/PasswordInput'
import { UsernameInput } from '../ui/inputs/UsernameInput'
import { EmailInput } from '../ui/inputs/EmailInput'

import { useRouter } from 'next/navigation'
import { useAuth } from '../../hooks/useAuth'

import { setUserData } from '@/helpers/editProfile'
import { useDate } from '@/hooks/useDate'
import { RegisterLink } from './ui/RegisterLink'

export const Signup = () => {
	const { colorMode } = useColorMode()

	const [emailExist, setEmailExist] = useState(false)

	const { Toast } = useAuth()

	const { register, handleSubmit, formState, reset } = useForm({
		defaultValues: {
			username: '',
			email: '',
			password: '',
		},
	})
	const { errors, isSubmitting } = formState
	const router = useRouter()
	const [joined] = useDate()

	const signUp = async (email: string, password: string, name: string) => {
		try {
			await createUserWithEmailAndPassword(auth, email, password)
			// eslint-disable-next-line no-console
			await updateProfile(auth.currentUser!, { displayName: name }).catch(err => console.error(err))
			await setUserData(auth.currentUser?.uid!, name, joined)

			Toast({ isHeading: true, desc: 'We\'ve created your account for you.', username: name, fontWeight: 'unset' })
			setEmailExist(false)
			router.push(`/${name}`)
			reset()
		} catch (err: any) {
			if ((err as { code: string }).code == 'auth/email-already-in-use') return setEmailExist(true)
		}
	}
	const onSubmit: SubmitHandler<FieldValues> = async data => {
		await signUp(data.email, data.password, data.username)
	}
	return (
		<Form handleSubmit={handleSubmit(onSubmit)}>
			<Logo size='100%' />
			<Card>
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
				<UsernameInput
					errors={errors.username?.message}
					register={register}
				/>
				<EmailInput
					errors={errors.email?.message}
					isExist={emailExist}
					register={register}
				/>
				<PasswordInput
					errors={errors.password?.message}
					register={register}
				/>
				<Submit
					loadingText='Creating'
					isLoading={isSubmitting}>
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

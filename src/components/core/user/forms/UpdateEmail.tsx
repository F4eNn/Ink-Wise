import React, { useState } from 'react'

import { Box, Text } from '@/lib/chakra'
import { UpdateButton } from '../ui/UpdateButton'
import { useAuth } from '@/hooks/useAuth'

import { handleChangeEmail } from '@/helpers/editProfile'
import { useForm } from 'react-hook-form'
import { EmailInput } from '@/components/ui/inputs/EmailInput'
import { CredentialForm } from '../EditCredential'
import { SubmitButton } from '@/components/ui/SubmitButton'

interface UpdateEmailProps {
	setCategoryVisible: React.Dispatch<React.SetStateAction<boolean>>
	setUpdateEmail: React.Dispatch<React.SetStateAction<boolean>>
	updateEmail: boolean
}

export const UpdateEmail = ({ setCategoryVisible, updateEmail, setUpdateEmail }: UpdateEmailProps) => {
	const [isEmailExist, setIsEmailExist] = useState(false)

	const { authUser, logout } = useAuth()

	const { register, formState, handleSubmit } = useForm<CredentialForm>({
		defaultValues: {
			email: '',
		},
	})
	const { errors, isSubmitting } = formState

	const onSubmitEmail = async (data: Pick<CredentialForm, 'email'>) => {
		if (!authUser) return
		try {
			const isAllowChangeEmail = await handleChangeEmail(data.email, authUser)
			if (isAllowChangeEmail) {
				setIsEmailExist(false)
				logout()
			} else {
				setIsEmailExist(true)
			}
		} catch (error) {
			// eslint-disable-next-line no-console
			console.error(error)
		}
	}
	return (
		<>
			{updateEmail && (
				<>
					<UpdateButton
						setCategoryVisible={setCategoryVisible}
						setUpdateCredential={setUpdateEmail}
					/>

					<Box
						as='form'
						w='full'
						pos='relative'
						onSubmit={handleSubmit(onSubmitEmail)}>
						<EmailInput
							errors={errors.email?.message}
							register={register}
							isExist={false}
						/>
						<SubmitButton
							isLoading={isSubmitting}
							loadingText='Updating'
							my='3'>
							Update Email
						</SubmitButton>

						{isEmailExist ? (
							<Text
								position='absolute'
								top={0}
								right={0}
								color='error'
								fontSize={'.8em'}
								as='p'>
								Email already exist
							</Text>
						) : (
							''
						)}
					</Box>
				</>
			)}
		</>
	)
}

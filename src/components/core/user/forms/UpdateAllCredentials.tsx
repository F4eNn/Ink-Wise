import React, { useState } from 'react'

import { Box, Text } from '@/lib/chakra'
import { UpdateButton } from '../ui/UpdateButton'
import { useAuth } from '@/hooks/useAuth'

import { handleChangeEmail, handleChangePassword } from '@/helpers/editProfile'
import { useForm } from 'react-hook-form'
import { EmailInput } from '@/components/ui/inputs/EmailInput'
import { PasswordInput } from '@/components/ui/inputs/PasswordInput'
import { CredentialForm } from '../EditCredential'
import { SubmitButton } from '@/components/ui/SubmitButton'

interface UpdateEmailProps {
	setCategoryVisible: React.Dispatch<React.SetStateAction<boolean>>
	setUpdateBoth: React.Dispatch<React.SetStateAction<boolean>>
	updateBoth: boolean
}

export const UpdateAllCredentials = ({ setCategoryVisible, setUpdateBoth, updateBoth }: UpdateEmailProps) => {
	const [isEmailExist, setIsEmailExist] = useState(false)

	const { authUser, logout } = useAuth()

	const { register, formState, handleSubmit } = useForm<CredentialForm>({
		defaultValues: {
			email: '',
		},
	})

	const { errors, isSubmitting } = formState

	const onSubmitBoth = async (data: CredentialForm) => {
		if (!authUser) return
		await handleChangePassword(data.password, authUser)

		const isAllowChangeEmail = await handleChangeEmail(data.email, authUser)
		if (isAllowChangeEmail) {
			setIsEmailExist(false)
		} else {
			setIsEmailExist(true)
			return
		}
		logout()
	}
	return (
		<>
			{updateBoth && (
				<>
					<UpdateButton
						setCategoryVisible={setCategoryVisible}
						setUpdateCredential={setUpdateBoth}
					/>

					<Box
						onSubmit={handleSubmit(onSubmitBoth)}
						as='form'
						pos={'relative'}
						w='full'>
						<EmailInput
							errors={errors.email?.message}
							register={register}
							isExist={false}
						/>
						<PasswordInput
							errors={errors.password?.message}
							register={register}
						/>
						<SubmitButton
							isLoading={isSubmitting}
							loadingText='Updating'
							my='3'>
							Update Both
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

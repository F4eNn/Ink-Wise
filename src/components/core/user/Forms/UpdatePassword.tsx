import React from 'react'

import { PasswordInput } from '@/components/register/ui/PasswordInput'
import { Box, Button } from '@/lib/chakra'
import { UpdateButton } from '../ui/UpdateButton'
import { useAuth } from '@/hooks/useAuth'

import { handleChangePassword } from '../../../../helpers/editProfile'
import { useForm } from 'react-hook-form'
import { CredentialForm } from '../EditCredential'

interface UpdatePasswordProps {
	setCategoryVisible: React.Dispatch<React.SetStateAction<boolean>>
	setUpdatePassword: React.Dispatch<React.SetStateAction<boolean>>
	updatePassword: boolean
}

export const UpdatePassword = ({ setCategoryVisible, setUpdatePassword, updatePassword }: UpdatePasswordProps) => {
	const { authUser, logout } = useAuth()

	const { register, formState, handleSubmit } = useForm<CredentialForm>({
		defaultValues: {
			password: '',
		},
	})
	const { errors } = formState

	const onSubmitPassword = async (data: Pick<CredentialForm, 'password'>) => {
		if (!authUser) return
		await handleChangePassword(data.password, authUser)
		logout()
	}
	return (
		<>
			{updatePassword && (
				<>
					<UpdateButton
						setUpdateCredential={setUpdatePassword}
						setCategoryVisible={setCategoryVisible}
					/>
					<Box
						onSubmit={handleSubmit(onSubmitPassword)}
						as='form'
						w='full'>
						<PasswordInput
							errors={errors.password?.message}
							register={register}
						/>
						<Button
							w='full'
							type='submit'
							my='3'>
							Update Password
						</Button>
					</Box>
				</>
			)}
		</>
	)
}

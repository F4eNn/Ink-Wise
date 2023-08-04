import React from 'react'

import { PasswordInput } from '@/components/ui/inputs/PasswordInput'
import { Box} from '@/lib/chakra'
import { UpdateButton } from '../ui/UpdateButton'
import { useAuth } from '@/hooks/useAuth'

import { handleChangePassword } from '@/helpers/editProfile'
import { useForm } from 'react-hook-form'
import { CredentialForm } from '../EditCredential'
import { SubmitButton } from '@/components/ui/SubmitButton'

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
	const { errors, isSubmitting } = formState

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
						<SubmitButton
							isLoading={isSubmitting}
							loadingText='Updating'
							my='3'>
							Update Password
						</SubmitButton>
					</Box>
				</>
			)}
		</>
	)
}

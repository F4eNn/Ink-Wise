import React from 'react'
import { Flex } from '@/lib/chakra'
import { EditProfile } from '@/components/core/user/EditProfile'
import { Hero } from '@/components/ui/Hero'

const EditProfilePage = () => {
	return (
		<Flex
			ml='200px'
			w='full'
			gap='2'
			alignItems='center'>
			<EditProfile />
			<Hero src='/edit-profile.png' />
		</Flex>
	)
}

export default EditProfilePage

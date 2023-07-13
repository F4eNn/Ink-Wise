import React from 'react'
import {Flex} from '@/lib/chakra'
import { EditProfile } from '@/components/core/user/editProfile/EditProfile'
import { Hero } from '@/components/ui/Hero'

const EditProfilePage = () => {
  return (
    <Flex justifyContent='center' w='full'>
      <EditProfile />
      <Hero src='/edit-profile.png'/>
    </Flex>
  )
}

export default EditProfilePage
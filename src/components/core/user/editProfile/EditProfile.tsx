'use client'
import React, { useEffect, useState } from 'react'
import { Button, Card,  CardFooter,CardBody, Text } from '@/lib/chakra'
import { CardHeader } from './ui/CardHeader'
import { db } from '@/config/firebase'
import { collection, addDoc } from 'firebase/firestore'
import { EditForm } from './ui/EditForm'

export const EditProfile = () => {

const [isEdit,setIsEdit] = useState(false)



const beginEdit = () => {
  setIsEdit(prev => !prev)
}



	

	return (
		<Card w='600px'>
			<CardHeader />

			<CardBody>
        {isEdit ? <EditForm  /> : <Text>hmmm</Text>}

      </CardBody>

			<CardFooter>
        <Button type='button' onClick={beginEdit}>{isEdit ? 'Save': 'Edit'}</Button>
      </CardFooter>
		</Card>
	)
}

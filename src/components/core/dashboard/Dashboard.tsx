import { db } from '@/config/firebase'
import { collection, doc, getDocs, query, setDoc, where } from 'firebase/firestore'
import React, { useState, useEffect } from 'react'
import { useAuth } from '@/hooks/useAuth'
import { Column } from './ui/Column'
import { Flex } from '@/lib/chakra'


import { initialData } from '../create/CreateNote'



export const Dashboard = () => {
	const { authUser } = useAuth()
	const userId = authUser?.uid



	















	useEffect(() => {
		if (!authUser) return
		const setInitData = async () => {
			setDoc(doc(db, 'notes', userId!), initialData)
		}
		setInitData()
	})

	return <Flex gap='5'>jhj</Flex>
}

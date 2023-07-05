import { useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '@/config/firebase'
import { useAuth } from './useAuth'
import { useRouter } from 'next/navigation'
export const useProtectedRoute = () => {
	
	const { authUser } = useAuth()
	const router = useRouter()

	useEffect(() => {
		const listen = onAuthStateChanged(auth, (user: any) => {
			if (!user) {
				router.push('login')
				return
			}
		})
		return () => {
			listen()
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [authUser, router])

	return authUser
}

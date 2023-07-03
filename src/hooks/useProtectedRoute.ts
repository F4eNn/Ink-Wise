import { useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '@/Config/firebase'
import { useAuth } from './useAuth'
import { useRouter, usePathname } from 'next/navigation'
export const useProtectedRoute = () => {
	const { authUser } = useAuth()
	const router = useRouter()
	const pathname = usePathname()
	const registerRoutes = ['/login', '/signup']

	useEffect(() => {
		const listen = onAuthStateChanged(auth, (user: any) => {
            if (!user) {
				router.push('login')
				return
			}
			if (user && registerRoutes.includes(pathname)) {
				router.push('/')
			}
		})
		return () => {
			listen()
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [authUser, router, pathname])

	return authUser
}

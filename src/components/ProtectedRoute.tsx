import React from 'react'
import { useAuth } from '@/hooks/useAuth'
import { useProtectedRoute } from '@/hooks/useProtectedRoute'
export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
	const { authUser } = useAuth()

	useProtectedRoute()

	return <>{authUser ? children : null}</>
}

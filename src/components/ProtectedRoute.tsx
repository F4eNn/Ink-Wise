import React, { useEffect } from 'react'
import { useAuth } from '@/hooks/useAuth'
import { useProtectedRoute } from '@/hooks/useProtectedRoute'
import { usePathname, useRouter } from 'next/navigation'
import { Router } from 'next/router'
export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
	const { authUser } = useAuth()

	useProtectedRoute()

	return <>{authUser ? children : null}</>
}

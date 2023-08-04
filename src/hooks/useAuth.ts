import { useContext } from 'react'
import { AuthCtx } from '../context/Auth'
export const useAuth = () => useContext(AuthCtx)

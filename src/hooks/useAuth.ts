import { useContext } from 'react'
import { AuthCtx } from '../components/Register/context/Auth'
export const useAuth = () => useContext(AuthCtx)

import { useContext } from 'react'
import { AuthCtx } from '../components/register/context/Auth'
export const useAuth = () => useContext(AuthCtx)

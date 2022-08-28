import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectUserId } from '../../features/user/userSlice'

export const ProtectedRoutes = () => {
    const location = useLocation()
    const userId = useSelector(selectUserId)
    
    return(
        <>
            {userId 
                ? (
                    <Outlet/>
                ) : (
                    <Navigate to='/login' state={{from: location}}/>
                )
            }
        </>
    )
}

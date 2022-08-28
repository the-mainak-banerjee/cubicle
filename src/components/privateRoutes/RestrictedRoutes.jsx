import { Navigate, Outlet } from "react-router-dom"
import { useSelector } from 'react-redux'
import { selectUserId } from '../../features/user/userSlice'

export const RestrictedRoutes = () => {
    const userId = useSelector(selectUserId)

    return (
        userId ? (
            <Navigate to='/database' replace/>
        ) : (
            <Outlet/>
        )
    )

}
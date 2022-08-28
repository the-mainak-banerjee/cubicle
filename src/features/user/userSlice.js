import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userEmailVerified: null,
    userId: null,
    userDetails: null
}

export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers: {
        setUserEmailStatus(state,action){
            state.userTocken = action.payload
        },
        setUserDetails(state,action){
            state.userDetails = action.payload
        },
        setUserId(state,action){
            state.userId = action.payload
        },
        setlogOut(state){
            state.userId=null
            state.userDetails=null
            state.userEmailVerified=null
        }
    }
})

export const {setUserEmailStatus, setUserDetails, setUserId, setlogOut} = userSlice.actions
export default userSlice.reducer

export const selectUserEmailStatus = state  => state.user.userTocken
export const selectUserId = state  => state.user.userId
export const selectUserDetails = state  => state.user.userDetails

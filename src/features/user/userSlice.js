import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userTocken: null,
    userId: null,
    userDetails: null
}

export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers: {
        setUserTocken(state,action){
            state.userTocken = action.payload
        },
        setUserDetails(state,action){
            state.userDetails = action.payload
        },
        logOut(state){
            state.userTocken=null
            state.userDetails=null
        }
    }
})

export const {setUserTocken, setUserDetails, logOut} = userSlice.actions
export default userSlice.reducer

export const selectUserTocken = state  => state.userTocken
export const selectUserDetails = state  => state.userDetails

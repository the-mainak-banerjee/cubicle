import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    workSpacesDetails: null
}

export const workSpaceSlice = createSlice({
    name:'workSpace',
    initialState,
    reducers: {
        setWorkSpacesDetails(state,action) {
            state.workSpacesDetails = action.payload
        }
    }
})

export const {setWorkSpacesDetails} = workSpaceSlice.actions
export default workSpaceSlice.reducer

export const selectAllWorkSpacesDetails = state  => state.workSpace.workSpacesDetails
export const selectSingleWorkSpaceDetails = (state,workSpaceId)  => state.workSpace.workSpacesDetails?.find(item => item.id === workSpaceId)


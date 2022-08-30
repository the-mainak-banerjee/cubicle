import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    tags: null,
    allContacts: null,
}

export const contactsSlice = createSlice({
    name:'contacts',
    initialState,
    reducers: {
        setTag(state,action){
            state.tags = action.payload
        },
        setContacts(state,action){
            state.allContacts = action.payload
        },
    }
})

export const {setTag, setContacts } = contactsSlice.actions
export default contactsSlice.reducer

export const selectAllTags = state  => state.contacts.tags
export const selectAllContacts = state  => state.contacts.allContacts


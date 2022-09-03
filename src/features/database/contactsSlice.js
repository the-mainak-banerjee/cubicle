import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    tags: null,
    allContacts: null,
    individualContact: null
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
        setIndividualContact(state,action){
            state.individualContact = action.payload
        }
    }
})

export const {setTag, setContacts, setIndividualContact } = contactsSlice.actions
export default contactsSlice.reducer

export const selectAllTags = state  => state.contacts.tags
export const selectAllContacts = state  => state.contacts.allContacts
export const selectIndividualContact = state => state.contacts.individualContact


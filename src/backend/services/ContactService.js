import { arrayRemove, arrayUnion, deleteDoc, doc, serverTimestamp, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../Firebase";


export const ContactService = {

    createContact: async(contactDetails,id,workspaceId,setLoading) => {
        const contact = {
            id: id,
            fullName: contactDetails.fullName,
            email: contactDetails.email,
            tags: [contactDetails.tagNames],
            createdAt: serverTimestamp()
        }
        setLoading(true)
        try{
            await setDoc(doc(db,'workspaces', `${workspaceId}`, 'contacts', `${contact.id}`),contact)
            return null
        }catch(error){
            return error
        }finally{
            setLoading(false)
        }
    },

    updateContact: async(workspaceId,contactId,data,setLoading) => {
        setLoading(true)
        try{
            await updateDoc(doc(db,'workspaces', `${workspaceId}`, 'contacts', `${contactId}`), data)
            return null
        }catch(error){
            return error
        }finally{
            setLoading(false)
        }
    },

    deleteContact: async(workspaceId,contactId,setLoading) => {
        setLoading(true)
        try{
            await deleteDoc(doc(db,'workspaces', `${workspaceId}`, 'contacts', `${contactId}`))
            return null
        }catch(error){
            return error
        }finally{
            setLoading(false)
        }
    },

    addContactsInATag: async(workspaceId,contactId,tagName,setLoading) => {
        setLoading(true)
        try{
            await updateDoc(doc(db,'workspaces', `${workspaceId}`, 'contacts', `${contactId}`), {
                tags: arrayUnion(tagName)
            })
            return null
        }catch(error){
            return error
        }finally{
            setLoading(false)
        }
    },

    removeContactsFromATag: async(workspaceId,contactId,tagName,setLoading) => {
        setLoading(true)
        try{
            await updateDoc(doc(db,'workspaces', `${workspaceId}`, 'contacts', `${contactId}`), {
                tags: arrayRemove(tagName)
            })
            return null
        }catch(error){
            return error
        }finally{
            setLoading(false)
        }
    },

};
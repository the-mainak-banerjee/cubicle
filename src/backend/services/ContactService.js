import { doc, setDoc } from "firebase/firestore";
import { db } from "../Firebase";


export const ContactService = {

    createTag: async(contact,workspaceId) => {
        try{
            await setDoc(doc(db,'workspaces', `${workspaceId}`, 'contacts', `${contact.id}`),contact)
            return null
        }catch(error){
            return error
        }
    }
};
import { doc, setDoc } from "firebase/firestore";
import { db } from "../Firebase";


export const TagService = {

    createTag: async(tag,workspaceId) => {
        try{
            await setDoc(doc(db,'workspaces', `${workspaceId}`, 'tags', `${tag.id}`),tag)
            return null
        }catch(error){
            return error
        }
    }
};
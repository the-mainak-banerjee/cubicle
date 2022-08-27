import { doc, setDoc } from "firebase/firestore";
import { db } from "../Firebase";


export const WorkSpaceServices = {

    createWorkspaceDoc: async(workspace) => {
        try{
            await setDoc(doc(db,'workspaces', `${workspace.id}`),workspace)
            return null
        }catch(error){
            return error
        }
    }
};
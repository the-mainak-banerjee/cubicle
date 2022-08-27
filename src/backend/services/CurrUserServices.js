import { doc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../Firebase";


export const CurrUserServices = {

    createUserDoc: async(user) => {
        try{
            await setDoc(doc(db,'users', `${user.uid}`),user)
        }catch(error){
            console.log(error)
        }
    },

    updateUserDoc: async(userId, data) => {
        try{
            await updateDoc(doc(db, 'users', `${userId}`), data)
        }catch(error){
            console.log(error)
        }
    }
};
import { createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { auth } from "../Firebase";


export const AuthService = {

    logout: async () => {
		await signOut(auth);
	},

	createUserWithEmailAndPassword: async (email, password, name, phone,setLoading) => {
        setLoading(true)
		try {
			const userCred = await createUserWithEmailAndPassword(auth, email, password);
			// await sendEmailVerification(userCred.user,{
			// 	url: 'localhost.3000/createworkspace',
			// });
            await updateProfile(auth.currentUser, {displayName: name, phoneNumber: phone})
			return {
				user: userCred.user,
			};
		} catch (e) {
			return {
				error: e,
			};
		}finally{
            setLoading(false)
        }
	},

	signInUserWithEmailAndPassword: async (email, password, setLoading) => {
        setLoading(true)
		try {
			const userCred = await signInWithEmailAndPassword(auth, email, password);
			return {
				user: userCred.user,
			};
		} catch (e) {
			return {
				error: e,
			};
		}finally{
            setLoading(false)
        }
	},

	resetPassword: async (email,setLoading) => {
		setLoading(true)
		try {
			await sendPasswordResetEmail(auth, email, { url: "http://localhost:3000/login" });
		} catch (e) {
			return e;
		}finally{
			setLoading(false)
		}
	}
	
};
import { onAuthStateChanged } from 'firebase/auth';
import { collection, doc, onSnapshot, query, where } from 'firebase/firestore';
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route }  from 'react-router-dom'
import { auth, db } from './backend/Firebase';
import {  selectUserId, setUserDetails, setUserId } from './features/user/userSlice';
import { setWorkSpacesDetails } from './features/workspace/workSpaceSlice';
import { ProtectedRoutes, RestrictedRoutes } from './components/privateRoutes/';
import {Signup, Login, ForgotPassword, CreateWorkspace} from './pages/auth';
import CreateEmail from './pages/bulkEmailSender/CreateEmail';
import EmailDetails from './pages/bulkEmailSender/EmailDetails';
import EmailSender from './pages/bulkEmailSender/EmailSender';
import SentEmail from './pages/bulkEmailSender/SentEmail';
import CertificateGenerator from './pages/certificateGenerator/CertificateGenerator';
import CustomizeTemplate from './pages/certificateGenerator/CustomizeTemplate';
import DesignCertificate from './pages/certificateGenerator/DesignCertificate';
import ContactDetails from './pages/databse/ContactDetails';
import Database from './pages/databse/Database';
import FourOFour from './pages/fallback/FourOFour';
import Home from "./pages/home/Home";
import UserSettings from './pages/settings/userSettings/UserSettings';
import WorkspaceSettings from './pages/settings/workspaceSettings/WorkspaceSettings';




function App() {
  const dispatch = useDispatch()
  const userId = useSelector(selectUserId)


  // Get currentuser id on auth state change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        if(currentUser){
            dispatch(setUserId(currentUser.uid))
        }else{
            dispatch(setUserId(null))
        }
    });
    return () => {
      unsubscribe();
    };
  },[dispatch]);


  // Get current user details
  useEffect(() => {
    if(userId){
      let unsubscribe = onSnapshot(doc(db,'users',userId),(doc) => {
        dispatch(setUserDetails(doc.data()))
      })
      return () => {
        unsubscribe && unsubscribe();
      };
    }
    
  },[userId,dispatch])


  // Get current user workspaces details
  useEffect(() => {
    if(userId){
      let unsubscribe = onSnapshot(query(collection(db,'workspaces'),where('admin', '==', `${userId}`)),(querySnapshot) => {
        const allWorkSpaces = querySnapshot.docs.map((doc) => (doc.data()))
        dispatch(setWorkSpacesDetails(allWorkSpaces))
      })
      return () => {
        unsubscribe && unsubscribe();
      };
    }
  }, [userId, dispatch])



  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>

        <Route element={<RestrictedRoutes/>}>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/forgotpassword' element={<ForgotPassword/>}/>
        </Route>

        <Route path='/createworkspace' element={<CreateWorkspace/>}/>

        <Route element={<ProtectedRoutes/>}>
          <Route path='/database' element={<Database/>}/>
          <Route path='/database/:contactId' element={<ContactDetails/>}/>

          <Route path='/emails' element={<EmailSender/>}/>
          <Route path='/emails/:emailId/edit' element={<CreateEmail/>}/>
          <Route path='/emails/:emailId/send' element={<SentEmail/>}/>
          <Route path='/emails/:emailId/view' element={<EmailDetails/>}/>

          <Route path='/certificate' element={<CertificateGenerator/>}/>
          <Route path='/certificate/templates' element={<DesignCertificate/>}/>
          <Route path='/certificate/:certificateId/customize' element={<CustomizeTemplate/>}/>

          <Route path='/settings' element={<WorkspaceSettings/>}/>
          <Route path='/userAccount' element={<UserSettings/>}/>
        </Route>



        <Route path='/*' element={<FourOFour/>}/>
      </Routes>
    </>
  );
}

export default App;

import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../features/user/userSlice'
import workSpaceReducer from '../features/workspace/workSpaceSlice'
import contactsReducer from '../features/database/contactsSlice'

export default configureStore({
    reducer:{
        user: userReducer,
        workSpace: workSpaceReducer,
        contacts: contactsReducer,
    },
})
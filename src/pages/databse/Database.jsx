import React, { useEffect } from 'react'
import ContactCardSmall from '../../components/database/ContactCardSmall'
import TopHeader from '../../components/database/TopHeader'
import Skeleton from '../../components/ui/skeleton/Skeleton'
import CreateTags from '../../components/database/popUps/CreateTags'
import ImportContacts from '../../components/database/popUps/ImportContacts'
import AddSingleContact from '../../components/database/popUps/AddSingleContact'
import UploadList from '../../components/database/popUps/UploadList'
import SecondHeader from '../../components/database/SecondHeader'
import { useDisclosure, Flex, Box, Text } from '@chakra-ui/react'
import TagBar from '../../components/database/TagBar'
import { useDispatch, useSelector } from "react-redux";
import { selectAllTags, selectAllContacts, setTag, setContacts } from "../../features/database/contactsSlice";
import { selectUserDetails } from '../../features/user/userSlice'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { db } from '../../backend/Firebase'
import formatDate from '../../utils/FormatData'


const Database = () => {
  const { isOpen: isImportContactOpen, onOpen: onImportContactOpen, onClose : onImportContactClose } = useDisclosure();
  const { isOpen: isAddSingleContactOpen, onOpen: onAddSingleContactOpen, onClose : onAddSingleContactClose } = useDisclosure();
  const { isOpen: isUploadListOpen, onOpen: onUploadListOpen, onClose : onUploadListClose } = useDisclosure();
  const { isOpen: isCreateTagOpen, onOpen: onCreateTagOpen, onClose : onCreateTagClose } = useDisclosure();
  const allTags = useSelector(selectAllTags)
  const allContacts = useSelector(selectAllContacts)
  const currentUserDetails = useSelector(selectUserDetails)
  const dispatch = useDispatch()

  const topBarButtonAction = () => {
    if(allTags){
      onImportContactOpen()
    }else{
      onCreateTagOpen()
    }
  }

  useEffect(() => {
    if(currentUserDetails?.workspaceId){
      let unsubscribe = onSnapshot(query(collection(db,`workspaces/${currentUserDetails.workspaceId}/tags`),orderBy('name','asc')),(querySnapshot) => {
        const allTags = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          createdAt: formatDate(doc.data().createdAt)
        }))
        dispatch(setTag(allTags))
      })
      return () => {
        unsubscribe && unsubscribe();
      };
    }
  },[currentUserDetails, dispatch])
  
  useEffect(() => {
    if(currentUserDetails?.workspaceId){
      let unsubscribe = onSnapshot(query(collection(db,`workspaces/${currentUserDetails.workspaceId}/contacts`),orderBy('createdAt','asc')),(querySnapshot) => {
        const allContacts = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          createdAt: formatDate(doc.data().createdAt)
        }))
        dispatch(setContacts(allContacts))
      })
      return () => {
        unsubscribe && unsubscribe();
      };
    }
  },[currentUserDetails, dispatch])


  return (
    <>
      <Skeleton
         isBack={false}
         title='Database'
         isSearch={true}
         buttonText='Add Contact'
         buttonAction={topBarButtonAction}
      >
        <Flex flexDirection={{base:'column', md:'row'}} minHeight='70vh' gap='4'>
          <Box boxShadow="base"
            pt='4' 
            pb={{base:'8', md:'4'}}
            rounded="md"
            bg="white"
            borderRadius='lg'
            width={{base:'100%',md:"100%"}}
          >
            <TopHeader/>
            <SecondHeader/>
            {allContacts?.length > 0
              ? (
                allContacts?.map(contact => {
                  return (
                    <ContactCardSmall
                      key={contact.id}
                      contact={contact}
                    />
                  )
                })
              ) : (
                <Text textAlign='center' fontSize='xl' py='4' color='black'>No Contact To Show</Text>
              )
            }
          </Box>
          <Box boxShadow="base"
            p="6"
            rounded="md"
            bg="white"
            borderRadius='lg'
            width={{base:'100%',md:"30%"}}>
            <TagBar
              onCreateTagOpen={onCreateTagOpen}
              allTags={allTags}
            />
          </Box>
        </Flex>

        <CreateTags
          isCreateTagOpen={isCreateTagOpen}
          onCreateTagClose={onCreateTagClose}
          onImportContactOpen={onImportContactOpen}
          allTags={allTags}
        />
        <ImportContacts
          isImportContactOpen={isImportContactOpen}
          onImportContactClose={onImportContactClose}
          onAddSingleContactOpen={onAddSingleContactOpen}
          onUploadListOpen={onUploadListOpen}
        />
        <AddSingleContact
          isAddSingleContactOpen={isAddSingleContactOpen}
          onAddSingleContactClose={onAddSingleContactClose}
          allTags={allTags}
        />
        <UploadList
          isUploadListOpen={isUploadListOpen}
          onUploadListClose={onUploadListClose}
          allTags={allTags}
        />
      </Skeleton>
    </>
  )
}

export default Database
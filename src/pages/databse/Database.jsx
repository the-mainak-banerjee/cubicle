import React from 'react'
import ContactCardSmall from '../../components/database/ContactCardSmall'
import TopHeader from '../../components/database/TopHeader'
import Skeleton from '../../components/ui/skeleton/Skeleton'
import CreateTags from '../../components/database/popUps/CreateTags'
import ImportContacts from '../../components/database/popUps/ImportContacts'
import AddSingleContact from '../../components/database/popUps/AddSingleContact'
import UploadList from '../../components/database/popUps/UploadList'
import SecondHeader from '../../components/database/SecondHeader'
import { useDisclosure, Flex, Box } from '@chakra-ui/react'
import TagBar from '../../components/database/TagBar'
import { useSelector } from "react-redux";
import { selectAllTags } from "../../features/database/contactsSlice";


const Database = () => {
  const { isOpen: isImportContactOpen, onOpen: onImportContactOpen, onClose : onImportContactClose } = useDisclosure();
  const { isOpen: isAddSingleContactOpen, onOpen: onAddSingleContactOpen, onClose : onAddSingleContactClose } = useDisclosure();
  const { isOpen: isUploadListOpen, onOpen: onUploadListOpen, onClose : onUploadListClose } = useDisclosure();
  const { isOpen: isCreateTagOpen, onOpen: onCreateTagOpen, onClose : onCreateTagClose } = useDisclosure();
  const allTags = useSelector(selectAllTags)


  const topBarButtonAction = () => {
    if(allTags){
      onImportContactOpen()
    }else{
      onCreateTagOpen()
    }
  }

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
            <ContactCardSmall/>
          </Box>
          <Box boxShadow="base"
            p="6"
            rounded="md"
            bg="white"
            borderRadius='lg'
            width={{base:'100%',md:"30%"}}>
            <TagBar
              onCreateTagOpen={onCreateTagOpen}
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
        />
        <UploadList
          isUploadListOpen={isUploadListOpen}
          onUploadListClose={onUploadListClose}
        />
      </Skeleton>
    </>
  )
}

export default Database
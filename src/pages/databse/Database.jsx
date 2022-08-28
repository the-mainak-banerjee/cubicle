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


const Database = () => {
  const { isOpen: isImportContactOpen, onOpen: onImportContactOpen, onClose : onImportContactClose } = useDisclosure();
  const { isOpen: isAddSingleContactOpen, onOpen: onAddSingleContactOpen, onClose : onAddSingleContactClose } = useDisclosure();
  const { isOpen: isUploadListOpen, onOpen: onUploadListOpen, onClose : onUploadListClose } = useDisclosure();
  const { isOpen: isCreateTagOpen, onOpen: onCreateTagOpen, onClose : onCreateTagClose } = useDisclosure();

  const topBarButtonAction = () => {
    onImportContactOpen()
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
        <Flex width={{base:'full',md:'77vw'}} gap='2' minH='100vh' flexDir={{base:'column', md:'row'}}>
          <Box width={{base:'100%', md:'80%'}} bg='white' pt='4' pb={{base:'8', md:'4'}} borderRadius='lg'>
            <TopHeader/>
            <SecondHeader/>
            <ContactCardSmall/>
          </Box>
          <Box width={{base:'100%',md:'20%'}} py='4' border='1px' borderRadius='lg' borderColor='GrayText'>
            <TagBar
              onCreateTagOpen={onCreateTagOpen}
            />
          </Box>
        </Flex>

        <CreateTags
          isCreateTagOpen={isCreateTagOpen}
          onCreateTagClose={onCreateTagClose}
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
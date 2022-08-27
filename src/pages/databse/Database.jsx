import { Text } from '@chakra-ui/react'
import React from 'react'
import ContactCardSmall from '../../components/database/ContactCardSmall'
import Demo from '../../components/database/Demo'
import TopHeader from '../../components/database/TopHeader'
import Skeleton from '../../components/ui/skeleton/Skeleton'
import CreateTags from '../../components/database/popUps/CreateTags'
import ImportContacts from '../../components/database/popUps/ImportContacts'
import AddSingleContact from '../../components/database/popUps/AddSingleContact'
import UploadList from '../../components/database/popUps/UploadList'
import SecondHeader from '../../components/database/SecondHeader'
const Database = () => {
  return (
    <>
      <Skeleton
         isBack={false}
         title='Database'
         isSearch={true}
         buttonText='Add Contact'
      >
        <TopHeader></TopHeader>
        <SecondHeader></SecondHeader>
        <ContactCardSmall></ContactCardSmall>
        <CreateTags></CreateTags>
        <ImportContacts></ImportContacts>
        <AddSingleContact></AddSingleContact>
        <UploadList></UploadList>
      </Skeleton>
    </>
  )
}

export default Database
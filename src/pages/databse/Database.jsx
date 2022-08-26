import { Text } from '@chakra-ui/react'
import React from 'react'
import Demo from '../../components/database/Demo'
import Skeleton from '../../components/ui/skeleton/Skeleton'
import TopHeader from '../../components/database/TopHeader'
import ContactCardSmall from '../../components/database/ContactCardSmall'

import AddContacts from '../../components/database/popup/addContacts'
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
        <ContactCardSmall></ContactCardSmall>
        <AddContacts></AddContacts>
      </Skeleton>
    </>
  )
}

export default Database

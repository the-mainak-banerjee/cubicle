import { Text } from '@chakra-ui/react'
import React from 'react'
import Demo from '../../components/database/Demo'
import Skeleton from '../../components/ui/skeleton/Skeleton'
import TopHeader from '../../components/database/TopHeader'
import MenuBar from '../../components/database/MenuBar'
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
        <MenuBar></MenuBar>
      </Skeleton>
    </>
  )
}

export default Database

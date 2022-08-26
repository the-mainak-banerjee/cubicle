import { Text } from '@chakra-ui/react'
import React from 'react'
import Demo from '../../components/database/Demo'
import Skeleton from '../../components/ui/skeleton/Skeleton'
const Database = () => {
  return (
    <>
      <Skeleton
         isBack={false}
         title='Database'
         isSearch={true}
         buttonText='Add Contact'
      >
        {/* <Text */}
      </Skeleton>
    </>
  )
}

export default Database
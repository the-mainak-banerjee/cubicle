import { Text } from '@chakra-ui/react'
import React from 'react'
import Skeleton from '../../../components/ui/skeleton/Skeleton'

const UserSettings = () => {
  return (
    <>
      <Skeleton
         isBack={false}
         title='Account Settings'
         isSearch={false}
      >
        <Text>Add Your Code Here</Text>
      </Skeleton>
    </>
  )
}

export default UserSettings

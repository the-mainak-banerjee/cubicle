import { Text } from '@chakra-ui/react'
import React from 'react'
import Skeleton from '../../components/ui/skeleton/Skeleton'

const SentEmail = () => {
  return (
    <>
    <Skeleton
      isBack={true}
      title='Email Name'
      rightContent={
        <>
          <Text>Draft</Text>
          <Text> : </Text>
          <Text color='secondary' fontWeight='bold'>Sent</Text>
        </>
      }
    >
      <Text>Add Your Code Here</Text>
    </Skeleton>
  </>
  )
}

export default SentEmail

import { Text } from '@chakra-ui/react'
import React from 'react'
import Skeleton from '../../components/ui/skeleton/Skeleton'

const EmailSender = () => {
  return (
    <>
      <Skeleton
        isBack={false}
        title='Email Management'
        isSearch={true}
        buttonText='New Email'
      >
        <Text>Add Your Code Here</Text>
      </Skeleton>
    </>
  )
}

export default EmailSender

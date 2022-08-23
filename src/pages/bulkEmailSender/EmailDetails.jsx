import { Text } from '@chakra-ui/react'
import React from 'react'
import Skeleton from '../../components/ui/skeleton/Skeleton'

const EmailDetails = () => {
  return (
    <>
    <Skeleton
      isBack={true}
      title='Email Name'
      isSearch={false}
      buttonText='Duplicate Email'
    >
      <Text>Add Your Code Here</Text>
    </Skeleton>
  </>
  )
}

export default EmailDetails

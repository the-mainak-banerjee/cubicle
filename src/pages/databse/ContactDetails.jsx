import { Text } from '@chakra-ui/react'
import React from 'react'
import Skeleton from '../../components/ui/skeleton/Skeleton'

const ContactDetails = () => {
  return (
    <>
      <Skeleton
         isBack={true}
         title='Contact Name'
         isSearch={false}
      >
        <Text>Add Your Code Here</Text>
      </Skeleton>
    </>
  )
}

export default ContactDetails

import React from 'react'
import Skeleton from '../../components/ui/skeleton/Skeleton'
import { Text } from '@chakra-ui/react'

const CreateEmail = () => {
  return (
    <>
      <Skeleton
        isBack={true}
        title='Email Name'
        rightContent={
          <>
            <Text color='secondary' fontWeight='bold'>Draft</Text>
            <Text> : </Text>
            <Text>Sent</Text>
          </>
        }
      >
        <Text>Add Your Code Here</Text>
      </Skeleton>
    </>
  )
}

export default CreateEmail

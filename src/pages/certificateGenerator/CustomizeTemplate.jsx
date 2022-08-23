import { Text } from '@chakra-ui/react'
import React from 'react'
import Skeleton from '../../components/ui/skeleton/Skeleton'

const CustomizeTemplate = () => {
  return (
    <>
      <Skeleton
        isBack={true}
        title='Certificate Generator'
        isSearch={false}
        buttonText='Save'
      >
        <Text>Add Your Code Here</Text>
      </Skeleton>
    </>
  )
}

export default CustomizeTemplate

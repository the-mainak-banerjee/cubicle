import { Text } from '@chakra-ui/react'
import React from 'react'
import Skeleton from '../../components/ui/skeleton/Skeleton'

const DesignCertificate = () => {
  return (
    <>
      <Skeleton
        isBack={true}
        title='Create Certificate'
        isSearch={false}
      >
        <Text>Add Your Code Here</Text>
      </Skeleton>
    </>
  )
}

export default DesignCertificate

import { Text } from '@chakra-ui/react'
import React from 'react'
import Skeleton from '../../components/ui/skeleton/Skeleton'

const CertificateGenerator = () => {
  return (
    <>
      <Skeleton
        isBack={false}
        title='Certificate Generator'
        isSearch={true}
        buttonText='Create New'
      >
        <Text>Add Your Code Here</Text>
      </Skeleton>
    </>
  )
}

export default CertificateGenerator

import { Text } from '@chakra-ui/react'
import React from 'react'
import BodyWrapper from '../../components/ui/bodyWrapper/BodyWrapper'
import NavBar from '../../components/ui/navBar/NavBar'

const SentEmail = () => {
  return (
    <>
    <NavBar
      isBack={true}
      title='Email Name'
      rightContent={
        <>
          <Text>Draft</Text>
          <Text> : </Text>
          <Text color='secondary' fontWeight='bold'>Sent</Text>
        </>
      }
    />
    <BodyWrapper>
      Add Your Code Here
    </BodyWrapper>
  </>
  )
}

export default SentEmail

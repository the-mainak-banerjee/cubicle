import React from 'react'
import NavBar from '../../components/ui/navBar/NavBar'
import { Text } from '@chakra-ui/react'
import BodyWrapper from '../../components/ui/bodyWrapper/BodyWrapper'

const CreateEmail = () => {
  return (
    <>
      <NavBar
        isBack={true}
        title='Email Name'
        rightContent={
          <>
            <Text color='secondary' fontWeight='bold'>Draft</Text>
            <Text> : </Text>
            <Text>Sent</Text>
          </>
        }
      />
      <BodyWrapper>
        Add Your Code Here
      </BodyWrapper>
    </>
  )
}

export default CreateEmail

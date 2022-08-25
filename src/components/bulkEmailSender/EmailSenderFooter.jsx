import { Button, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const EmailSenderFooter = ({showStatus, buttonAction}) => {
  return (
    <Flex align='center' justifyContent='flex-end' gap='4' bg='white' p='4' position='fixed' bottom='0' ml={{base:'0', md:'20vw'}}  width={{base:'full', md:'80vw'}}>
        {showStatus && <Text>Saving...</Text>}
        <Button variant='main' onClick={buttonAction}>Continue</Button>
    </Flex>
  )
}

export default EmailSenderFooter

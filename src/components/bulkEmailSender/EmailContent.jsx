import { Box, Text } from '@chakra-ui/react'
import React from 'react'

const EmailContent = ({ email }) => {

  return (
    <Box mx='2' my='4' bg='white' p='4' minHeight='70vh'>
      <Box my='2'>
        <Text fontWeight='semibold' fontSize='lg'>Subject</Text>
        <Text>{email.subjectLine}</Text>
      </Box>
      <Box my='2'>
        <Text fontWeight='semibold' fontSize='lg'>Published Date</Text>
        <Text>{email.publishedDate}</Text>
      </Box>
      <Box my='2'>
        <Text>
          {email.content}
        </Text>
      </Box>
    </Box>
  )
}

export default EmailContent

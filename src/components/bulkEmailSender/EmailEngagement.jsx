import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const EmailEngagement = ({ email }) => {
  return (
    <Box mx='2' my='4' bg='white' p='4' minHeight='70vh'>
      <Box my='2'>
        <Text fontWeight='semibold' fontSize='lg'>Subject</Text>
        <Text fontSize='2xl'>{email.subjectLine}</Text>
      </Box>
      <Box my='2'>
        <Text fontWeight='semibold' fontSize='lg'>Stats</Text>
      </Box>
      <Flex my='2' justifyContent='space-around'>
        <Box>
            <Text fontWeight='bold' fontSize='3xl'>{email.engagement.recipient}</Text>
            <Text>Recipient</Text>
        </Box>

        <Box>
            <Text fontWeight='bold' fontSize='3xl'>{email.engagement.opened}</Text>
            <Text>Opened</Text>
        </Box>

        <Box>
            <Text fontWeight='bold' fontSize='3xl'>{email.engagement.clicked}</Text>
            <Text>Clicked</Text>
        </Box>

      </Flex>
    </Box>
  )
}

export default EmailEngagement

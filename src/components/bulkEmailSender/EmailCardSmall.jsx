import { Box, Button, Divider, Flex, Link, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import { Link as ReachLink } from 'react-router-dom'

const EmailCardSmall = ({id, subjectLine, status, publishedDate, engagement}) => {
  return (
    <Box>
        <Flex align='center' mx='2' my='4'>
            <Box>
                <Link as={ReachLink} to={status === 'sent' ? `/emails/${id}/view` : `/emails/${id}/edit`}>
                    <Text fontWeight='semibold' fontSize='lg' color='primary'>{subjectLine}</Text>
                </Link>
                {status === 'draft'
                    ?(
                        <Text color='GrayText'>Draft</Text>
                    ) : (
                        <>
                            <Text color='GrayText'>{publishedDate}</Text>
                            <Text color='GrayText'>Recipient {engagement.recipient} : Opened By {engagement.opened} : Clicked By {engagement.clicked}</Text>
                        </>
                    )
                }
            </Box>
            <Spacer/>
            {status === 'sent' && <Link as={ReachLink} to={`/emails/${id}/view`} style={{ textDecoration: 'none' }}>
                <Button variant='main'>View Details</Button>
            </Link>}
        </Flex>
        <Divider borderColor='black'/>
    </Box>
  )
}

export default EmailCardSmall

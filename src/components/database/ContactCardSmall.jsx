import React from 'react'
import { Link as ReachLink } from 'react-router-dom'
import { Box, Divider, Flex, Link, Spacer, Text, Avatar } from '@chakra-ui/react'

function ContactCardSmall({contact}) {
    return (
        <>
            <Box>
                <Flex align='center' mx='2' my='4'>
                    <Avatar mr={"2"} size={{base:'sm',md:'md'}} name={contact.fullName} />
                    <Box>
                        <Link as={ReachLink} to={`/database/${contact.id}`}><Text fontWeight='semibold' fontSize='lg' color='primary'>{contact.fullName}</Text></Link>
                        <Text fontWeight='normal' fontSize={{base:'sm', md:'md'}} color='GrayText'>{contact.email}</Text>
                    </Box>
                    
                    <Spacer/>

                    <Text fontSize={{base:'sm', md:'md'}}>{contact.createdAt.formatedDate}-{contact.createdAt.formatedMonth}-{contact.createdAt.formatedYear}</Text> 
    
                </Flex>
                <Divider borderColor='GrayText'/>
            </Box>
        </>
    )
  }

export default ContactCardSmall
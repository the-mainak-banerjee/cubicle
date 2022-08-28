import React from 'react'

import { Box, Divider, Flex, Link, Spacer, Text, Avatar } from '@chakra-ui/react'

function ContactCardSmall() {
    return (
        <>
            <Box>
                <Flex align='center' mx='2' my='4'>
                    <Avatar mr={"2"} size={{base:'sm',md:'md'}} name='Swati Goel' />
                    <Box>
                        <Link><Text fontWeight='semibold' fontSize='lg' color='primary'>Swati Goel</Text></Link>
                        <Text fontWeight='normal' fontSize={{base:'sm', md:'md'}} color='GrayText'>swatigoel37@gmail.com</Text>
                    </Box>
                    
                    <Spacer/>

                    <Text fontSize={{base:'sm', md:'md'}}>12-08-2022</Text> 
    
                </Flex>
                <Divider borderColor='GrayText'/>
            </Box>
        </>
    )
  }

export default ContactCardSmall
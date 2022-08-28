import React from 'react'

import { Box, Divider, Flex, Link, Spacer, Text, Avatar } from '@chakra-ui/react'

function ContactCardSmall() {
    return (
        <>
        <Box>
            <Flex align='center' mx='2' my='4'>
                <Box>
                    
                    
                    <Avatar mr={"2"} src="./images/icons8-user-48.png" w={'8%'} h={'8%'} alt="User" />

                    <Link fontWeight='semibold' fontSize='lg' color='primary'>Swati Goel</Link> <br></br>
                    <Link fontWeight='normal' fontSize='m' color='GrayText'>swatigoel37@gmail.com</Link>
    
                </Box>
    
                <Spacer/>
                <Text fontWeight='semibold' fontSize='m' color='primary'>12-08-2022</Text> 
                
               
            </Flex>
            <Divider borderColor='GrayText'/>
        </Box>
    
       
        </>
    )
  }

export default ContactCardSmall
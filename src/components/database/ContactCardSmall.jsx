import { Box, Button, Divider, Flex, Link, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
// import { Link as ReachLink } from 'react-router-dom'

import {contact} from "./Dummydata";
function ContactCardSmall(){

  return (
    <>
    <Box>
        <Flex align='center' mx='2' my='4'>
            <Box>
                
               
                <Link fontWeight='semibold' fontSize='lg' color='primary'>Swati Goel</Link> <br></br>
                <Link fontWeight='normal' fontSize='m' color='GrayText'>swatigoel37@gmail.com</Link>

            </Box>

            <Spacer/>
            <Text fontWeight='semibold' fontSize='m' color='primary'>Date</Text> 
            
           
        </Flex>
        <Divider borderColor='GrayText'/>
    </Box>

   
    </>
  )
}

export default ContactCardSmall
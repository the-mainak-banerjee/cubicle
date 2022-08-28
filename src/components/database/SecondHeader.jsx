import React from 'react'
import {
    Box,
    Flex,
    Spacer, 
    Text,
    Divider
  } from "@chakra-ui/react";

 

  function SecondHeader() {
    return (
        <>
        <Divider borderColor='GrayText'/>
          <Flex color='GrayText'>
            <Box  p='4'>
              <Text>Contacts</Text>
            </Box>
            
            <Spacer />
            <Box p='4'>
              <Text>Subscription Date</Text>
            </Box>
          </Flex>
          <Divider borderColor='GrayText'/>
        </>
      )
  }
export default SecondHeader
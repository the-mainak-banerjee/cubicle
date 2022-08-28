import React from 'react'
import {
    Input,
    Stack,
    Button,
    Box,
    Flex,
    Text,
    useColorModeValue, Spacer,Menu, MenuList, MenuItem, MenuButton, Divider
  } from "@chakra-ui/react";
import {ChevronDownIcon } from '@chakra-ui/icons'
import Skeleton from '../ui/skeleton/Skeleton';
import { ButtonStyles } from '../../styles/components/buttonStyles';
 

  function SecondHeader() {
    return (
        <>
        <Divider borderColor='GrayText'/>
  <Flex>
  <Box  p='4'>
  <b>Contacts</b>
    </Box>
  
  <Spacer />
  <Box  p='4'>
   <b>Subscription Date</b>
    </Box>
    
  {/* <Menu>
   
    <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
      Bulk Actions
    </MenuButton>
    <MenuList>
      <MenuItem>Download</MenuItem>
      <MenuItem>Create a Copy</MenuItem>
      <MenuItem>Mark as Draft</MenuItem>
      <MenuItem>Delete</MenuItem>
      <MenuItem>Attend a Workshop</MenuItem>
    </MenuList>
  </Menu> */}
  </Flex>
  <Divider borderColor='GrayText'/>
        </>
      )
  }
export default SecondHeader
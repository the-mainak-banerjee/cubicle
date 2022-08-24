import React  from 'react'
import {
    Input,
    Stack,
    Button,
    Box,
    
    Flex,
    Text,
    useColorModeValue, Spacer,Menu, MenuList, MenuItem, MenuButton
  } from "@chakra-ui/react";
  import {ChevronDownIcon } from '@chakra-ui/icons'
import Skeleton from '../ui/skeleton/Skeleton';
import { ButtonStyles } from '../../styles/components/buttonStyles';
 
  function TopHeader() {
    return (
      <>
      {/* <Flex>
  <Box  p='4'>
  All Contacts
  </Box>
  <Spacer />
  <Box p='4'>
  <Button variant="outlined">Bulk Actions</Button>
  </Box>
</Flex> */}

<Flex>
<Box  p='4'>
  All Contacts
  </Box>

<Spacer />
<Menu>
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
</Menu>
</Flex>
      </>
    )
  }


export default TopHeader
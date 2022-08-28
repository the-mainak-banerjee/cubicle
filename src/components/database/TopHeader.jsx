import React from 'react'
import {
    Text,
    Icon,
    Button,
    Flex,
    Spacer,
    Menu, 
    MenuList, 
    MenuItem, 
    MenuButton
  } from "@chakra-ui/react";

import { FaChevronDown, FaUserFriends } from 'react-icons/fa';
 

  function TopHeader() {
    return (
        <>
          <Flex px='4' align='center' py='2'>
            <Flex align='center' gap='2'>
              <Icon as={FaUserFriends} width='25px' height='25px'/>
              <Text fontWeight='bold' fontSize='lg'>All Contacts</Text>
            </Flex>
            
            <Spacer />
            <Menu>
              <MenuButton as={Button} rightIcon={<FaChevronDown />}>
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
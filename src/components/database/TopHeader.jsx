import React from 'react'
import {
    Text,
    Button,
    Box,
    Flex,
    Spacer,
    Menu, 
    MenuList, 
    MenuItem, 
    MenuButton
  } from "@chakra-ui/react";

import { FaChevronDown } from 'react-icons/fa';
 

  function TopHeader() {
    return (
        <>
          <Flex>
            <Box p='4'>
              <Text fontWeight='bold' fontSize='lg'>All Contacts</Text>
            </Box>
            
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
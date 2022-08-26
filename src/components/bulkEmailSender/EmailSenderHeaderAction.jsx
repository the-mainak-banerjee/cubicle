import { Button, Flex, Icon, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { FaChevronCircleDown } from 'react-icons/fa'

const EmailSenderHeaderAction = () => {
  return (
    <Flex align='center' gap='2'>
      <Button variant='main' size={{base:'sm', md:'md'}}>Preview Email</Button>
      <Menu>
        <MenuButton>
          <Icon as={FaChevronCircleDown}/>
        </MenuButton>
        <MenuList color='black' my='2'>
          <MenuItem>Duplicate</MenuItem>
          <MenuItem>Delete</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  )
}

export default EmailSenderHeaderAction

import React from 'react'
import {  Box, Drawer, DrawerContent, useDisclosure } from '@chakra-ui/react'
import SideBarContent from './SideBarContent';
import TopBar from './TopBar';


const NavBar = ({isBack, title, rightContent, isSearch, buttonText}) => {

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box as='aside'>
        <SideBarContent
          onClose={() => onClose}
          display={{ base: 'none', md: 'flex' }}
        />
      </Box>

      <TopBar
        isBack={isBack}
        title={title}
        isSearch={isSearch}
        buttonText={buttonText}
        rightContent={rightContent}
        onOpen={onOpen}
      />

      {/* Mobile Sidebar */}
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SideBarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default NavBar

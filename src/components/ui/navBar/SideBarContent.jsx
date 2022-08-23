import { Avatar, Box, Button, CloseButton, Divider, Flex, Heading, Link, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaDatabase, FaEnvelope, FaAward, FaCog } from 'react-icons/fa'
import NavItem from './NavItem'

const linkItems = [
    {name: 'Database', icon: FaDatabase, target: 'database'},
    {name: 'Email Management', icon: FaEnvelope, target: 'emails'},
    // {name: 'Database', icon: FaDatabase, target: 'database'},
    {name: 'Certificate Generator', icon: FaAward, target: 'certificate'},
    {name: 'Workspace Settings', icon: FaCog, target: 'settings'},
]

const SideBarContent = ({onClose, ...rest}) => {
  return (
    <Flex
        flexDir='column'
        transition="3s ease"
        bg={useColorModeValue('primary', 'gray.900')}
        color='white'
        borderRight="1px"
        borderRightColor={useColorModeValue('gray.500', 'gray.700')}
        w={{ base: 'full', md: '20vw' }}
        pos="fixed"
        h="full"
        justifyContent='space-between'
        {...rest}
    >
        <Flex flexDirection='column'>
            <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
                <Heading as='h2' fontSize="2xl" fontWeight="bold">
                    Logo
                </Heading>
                <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
            </Flex>
            <Heading mx="8" mb='4' fontSize="lg" fontWeight="medium">
                Mainak's Workspace
            </Heading>
            {linkItems.map((link) => (
                <NavItem key={link.name} name={link.name} icon={link.icon} target={link.target}/>
            ))}
        </Flex>


        <Flex flexDir='column'>
            <Divider/>
            <Link as={NavLink} to='/userAccount' mx='8' p='4' _activeLink={{color: 'secondaryWhiten'}} style={{ textDecoration: 'none' }}>
                <Flex gap='2' cursor='pointer' _hover={{color: 'secondary'}}>
                    <Avatar size='sm' name='Mainak' bg='secondary' color='white'/>
                    <Box>
                        <Heading as='h4' fontSize='sm' fontWeight='normal'>Mainak Banerjee</Heading>
                        <Text fontSize='sm' fontWeight='light'>Admin</Text>
                    </Box>
                </Flex>
            </Link>
            <Divider/>
            <Button mx='8' my='4' variant='danger'>LogOut</Button>
        </Flex>
    </Flex>
  )
}

export default SideBarContent

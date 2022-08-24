import { Divider, Flex, Icon, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import { FaArrowDown } from 'react-icons/fa'
import SubNavItem from './SubNavItem'

const SubNavBar = ({linkItems, rightAction}) => {
  return (
    <>
        <Flex>
            {linkItems.map(link => {
                return (
                    <SubNavItem
                        key={link.name}
                        name={link.name}
                        target={link.target}
                        search={link.search}
                        icon={link.icon}
                    />
                )
            })}
            <Spacer/>
            {rightAction && <Flex gap='2' px='4' py='2' m='1' align='center' bg='white' borderRadius='lg' cursor='pointer' _hover={{boxShadow: 'lg'}}>
                <Text>Filter</Text>
                <Icon as={FaArrowDown} />
            </Flex>}
        </Flex>
        <Divider borderColor='black'/>
    </>
  )
}

export default SubNavBar

import { Divider, Flex } from '@chakra-ui/react'
import React from 'react'
import SubNavItem from './SubNavItem'

const SubNavBar = ({linkItems}) => {
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
        </Flex>
        <Divider borderColor='black'/>
    </>
  )
}

export default SubNavBar

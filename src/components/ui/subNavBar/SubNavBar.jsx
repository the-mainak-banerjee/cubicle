import { Divider, Flex, Spacer } from '@chakra-ui/react'
import React from 'react'
import SubNavItem from './SubNavItem'

const SubNavBar = ({linkItems, rightAction, target}) => {
  return (
    <>
        <Flex>
            {linkItems.map(link => {
                return (
                    <SubNavItem
                        key={link.name}
                        name={link.name}
                        target={target}
                        search={link.search}
                        icon={link.icon}
                    />
                )
            })}
            <Spacer/>
            {/* {rightAction && } */}
        </Flex>
        <Divider borderColor='black'/>
    </>
  )
}

export default SubNavBar

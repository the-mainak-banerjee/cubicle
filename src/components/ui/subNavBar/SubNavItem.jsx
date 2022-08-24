import { Flex, Icon, Link, Text } from '@chakra-ui/react'
import React from 'react'
import { Link as ReachLink, useLocation } from 'react-router-dom'

const SubNavItem = ({name, target, search, icon}) => {

    const location = useLocation()

  return (
    <Link 
        as={ReachLink} 
        to={`/${target}${search}`} 
        m='1'
        py='2'
        px='4'
        color = {location?.search === search ? 'secondary' : 'black'}
        borderRadius="lg"
        border = {location?.search === search ? '1px' : '0px'}
        borderColor = 'secondary'
        style={{ textDecoration: 'none' }} 
    >
        <Flex
            align="center"
            role="group"
            cursor="pointer"
            _hover={{ color: 'secondary'}}
        >
            <Icon mr="2"
                fontSize="16"
                as={icon}
            />
            <Text>{name}</Text>
        </Flex>
    </Link>
  )
}

export default SubNavItem

import { Text, Flex, Icon, Link } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'

const NavItem = ({name, icon, target, ...rest}) => {
  return (
    <Link as={NavLink} to={`/${target}`} _activeLink={{color: 'secondaryWhiten'}} style={{ textDecoration: 'none' }} _focus={{  bg: 'secondary', color: 'white', borderRadius:'lg' }}>
        <Flex
            align="center"
            p="4"
            mx="4"
            borderRadius="lg"
            role="group"
            cursor="pointer"
            _hover={{
                bg: 'secondary',
                color: 'white',
            }}
            {...rest}>
            {icon && (
                <Icon
                    mr="4"
                    fontSize="16"
                    _groupHover={{
                        color: 'white',
                    }}
                    as={icon}
                />
            )}
            <Text>{name}</Text>
        </Flex>
    </Link>
  )
}

export default NavItem

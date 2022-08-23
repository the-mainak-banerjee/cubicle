import { Box } from '@chakra-ui/react'
import React from 'react'

const BodyWrapper = ({children}) => {
  return (
    <Box as='section' ml={{base:'0', md:'20vw'}} pt='36' px='6' bg='ternary' minHeight='100vh'>{children}</Box>
  )
}

export default BodyWrapper

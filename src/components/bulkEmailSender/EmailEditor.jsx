import { Box, Divider, Flex, Heading, Input, Text } from '@chakra-ui/react'
import React from 'react'
import Editor from '../emailTextEditor/Editor'

const EmailEditor = () => {
  return (
    <Box mx='2' mt='4' bg='white' minHeight='70vh' borderRadius='lg'>
        <Box p='4'>
            <Text fontSize='md' color='GrayText'>Subject Line</Text>
            <Input type='text' my='2' _focus={{border:'none', outline:'1px solid ternary'}}/>
        </Box>
        <Divider borderColor='GrayText'/>
        <Box p='4'>
            <Text fontSize='md' color='GrayText' mb='2'>Content</Text>
            <Editor/>
        </Box>
        <Flex p='4'>
            <Heading fontSize='md' border='1px' borderColor='gray.300' borderRadius='lg' p='4'>Build With Cubicle</Heading>
        </Flex>
    </Box>
  )
}

export default EmailEditor

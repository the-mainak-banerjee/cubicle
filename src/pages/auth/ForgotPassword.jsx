import React from 'react'

import { Input,Stack,Button, Box, Center, Heading, Flex, useColorModeValue, Text, FormControl, Link, Redirect} from '@chakra-ui/react'


   function ForgotPassword() {
    
      
    return (
      <>
      <Flex bg='ternary' minHeight='100vh' justifyContent="Center">
      <Center p={20}>
        <Box boxShadow='md'  rounded={30} bg='white' p={20} border='1px' borderColor='gray.200'>
      <Stack>
          <Center>
        <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }} as='h3' size='xl' fontWeight={500} mb={'7%'}>
          Forgot your password?
        </Heading></Center>
        <Text
          fontSize={{ base: 'sm', sm: 'md' }}
          color={useColorModeValue('gray.800', 'gray.400')}>
          You&apos;ll get an email with a reset link
        </Text>
        <FormControl id="email">
          <Input
            placeholder="your-email@example.com"
            _placeholder={{ color: 'gray.500' }}
            type="email"  mb={5}
          />
        </FormControl>
        
        <Stack spacing={6}>
        
          <Button
            bg={'blue.400'}
            color={'white'}
            _hover={{
              bg: 'blue.500',
            }}>
            Reset Password
          </Button>
        </Stack>

       
      </Stack>
      <Text
          fontSize={{ base: 'sm', sm: 'md' }} textAlign='center'
          color={useColorModeValue('gray.800', 'gray.400')} mt={'3'}>
          Back to Login
        
        </Text>
      </Box>
  </Center>
  </Flex>
      </>
    )
  }


export default ForgotPassword

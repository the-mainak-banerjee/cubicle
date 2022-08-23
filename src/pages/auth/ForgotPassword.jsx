import React from 'react'

import { Input,Stack,Button, Box, Center, Heading, Flex, useColorModeValue, Text, FormControl } from '@chakra-ui/react'


   function ForgotPassword() {
    
      
    return (
      <>

      <Center p={20}>
        <Box boxShadow='sm'  rounded='md' bg='white' p={20} border='1px' borderColor='gray.200' mt={12}>
      <Stack
        // spacing={4}
        // w={'full'}
        // maxW={'md'}
        // bg={useColorModeValue('white', 'gray.700')}
        // rounded={'xl'}
        
        // boxShadow={'sm'}
        // p={6}
        // my={12}
        >
          <center>
        <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }} as='h3' size='xl' fontWeight={500} mb={'7%'}>
          Forgot your password?
        </Heading></center>
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
            Request Reset
          </Button>
        </Stack>
      </Stack>
      </Box>
  </Center>
      </>
    )
  }


export default ForgotPassword

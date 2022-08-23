import React from 'react'

import { Input,Stack,InputLeftAddon,InputGroup,InputRightElement,Button, Box, Center, Heading, Flex,Text, useColorModeValue} from '@chakra-ui/react'


   function Login() {
    
        const [show, setShow] = React.useState(false)
        const handleClick = () => setShow(!show)
      
    return (
      <>
      <Flex bg='ternary' minHeight='100vh' justifyContent="Center">
      <Center>
<Box boxShadow='md' rounded={30}  bg='white' p={20} border='1px' borderColor='gray.200' >

<Stack spacing={7}><Center>
<Heading as='h2' size='2xl' fontWeight={550}>
    Login
  </Heading></Center>
  <Input variant='outline' placeholder='Username / Email' />
  
<InputGroup   size='md'>
      <Input 
        pr='4.5rem'
        type={show ? 'text' : 'password'}
        placeholder='Enter Password'
      />
      <InputRightElement  width='4.5rem'>
        <Button h='1.75rem' size='sm' onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
    </InputGroup>

   
    <Button colorScheme='blue' size='md'>
    Login
  </Button>
  <Text
          fontSize={{ base: 'sm', sm: 'md' }} textAlign='center'
          color={useColorModeValue('gray.800', 'gray.400')} mt={'3'}>
          New user? Signup
        
        </Text>
  </Stack>
  </Box>
  </Center>
  </Flex>
      </>
    )
  }


export default Login

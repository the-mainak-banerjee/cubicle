import React from 'react'

import { Input,Stack,InputLeftAddon,InputGroup,InputRightElement,Button, Box, Center, Heading} from '@chakra-ui/react'


   function Login() {
    
        const [show, setShow] = React.useState(false)
        const handleClick = () => setShow(!show)
      
    return (
      <>
      <Center>
<Box boxShadow='sm'  rounded='md' bg='white' p={20} border='1px' borderColor='gray.200' mt={['15%', '7%']}>

<Stack spacing={7}><center>
<Heading as='h2' size='2xl' fontWeight={550}>
    Login
  </Heading></center>
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
  </Stack>
  </Box>
  </Center>
      </>
    )
  }


export default Login

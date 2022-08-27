import React, { useState } from "react";

import {
  Input,
  Stack,
  Link,
  InputGroup,
  InputRightElement,
  Button,
  Box,
  Center,
  Heading,
  Flex,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { Link as ReachLink, useLocation, useNavigate } from "react-router-dom";
import { AuthService } from "../../backend/services/AuthService";

function Login() {
  
  const [show, setShow] = useState(false);
  const [loading,setLoading] = useState(false)
  const [formData,setFormData] = useState({
    email: '',
    password: ''
  })

  const navigate = useNavigate()
  const location = useLocation
  const toast = useToast()
  const from = location.state?.from?.pathname || '/database'
  // Validate user input
  const isValidEmail = formData.email.match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  )
    ? true
    : false;

  const isValidPassword = formData.password.length > 6
  
 
   // Handle user input data
  const handleFormData = (data,value) => {
    setFormData(prevState => ({...prevState, [data]:value}))
  }

  const handleClick = () => setShow(!show);

   // Cereate account function
   const logIn = async (email,password,setLoading) => {
      const {error} = await AuthService.signInUserWithEmailAndPassword(email,password,setLoading)

      if(error){
        if(error.code === 'auth/user-not-found'){
          toast({
              title: 'Invalid Login Credenials',
              status: 'error',
              position: 'top-right'
          })
        }else if(error.code === 'auth/wrong-password'){
            toast({
                title: 'You entered wrong password.',
                status: 'error',
                position: 'top-right'
            })
        }else{
            toast({
                title: 'An error occured.',
                status: 'error',
                position: 'top-right'
            })
        }
      }else{
        navigate(from,{replace: true})
      }
  }

  const handleLogin = () => {
    logIn(formData.email,formData.password, setLoading)
  }

  return (
    <>
      <Flex bg="ternary" minHeight="100vh" justifyContent="Center">
        <Center p={{base: 5, md:10}}>
          <Box
            boxShadow="md"
            rounded={30}
            bg="white"
            p={{base: 5, md:10}}
            border="1px"
            borderColor="gray.200"
          >
            <Stack spacing={7}>
              <Center>
                <Heading as="h2" size="2xl" fontWeight={550}>
                  Login
                </Heading>
              </Center>
              <Input 
                type='email' 
                variant="outline" 
                placeholder="Email" 
                value={formData.email} 
                onChange={(e) => handleFormData('email', e.target.value)}
              />

              <InputGroup size="md">
                <Input
                  pr="4.5rem"
                  type={show ? "text" : "password"}
                  placeholder="Enter Password"
                  value={formData.password}
                  onChange={(e) => handleFormData('password', e.target.value)}
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <Text><Link as={ReachLink} to='/forgotpassword'>Forgot Password</Link></Text>

              <Button 
                variant="main" 
                size="md" 
                isLoading={loading} 
                disabled={!isValidEmail || !isValidPassword || loading}
                onClick={handleLogin}  
              >
                Login
              </Button>
              <Text
                fontSize={{ base: "sm", sm: "md" }}
                textAlign="center"
                color={useColorModeValue("gray.800", "gray.400")}
                mt={"3"}
              >
                New user? <Link as={ReachLink} to='/signup' color='secondary'>Signup</Link> 
              </Text>
            </Stack>
          </Box>
        </Center>
      </Flex>
    </>
  );
}

export default Login;

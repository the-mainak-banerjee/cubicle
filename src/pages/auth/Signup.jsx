import React, { useState } from "react";

import {
  Input,
  Stack,
  InputLeftAddon,
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
import { Link as ReachLink, useNavigate } from "react-router-dom";
import { AuthService } from "../../backend/services/AuthService";
import { CurrUserServices } from "../../backend/services/CurrUserServices";




function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading,setLoading] = useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  })

  const navigate = useNavigate()
  const toast = useToast()

  // Validate user input
  const isValidName = formData.fullName.trim().length > 2
  const isValidEmail = formData.email.match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  )
    ? true
    : false;

  const isValidPassword = formData.password.length > 6
  const isValidConfirmPassword = formData.password === formData.confirmPassword
  
 
   // Handle user input data
  const handleFormData = (data,value) => {
    setFormData(prevState => ({...prevState, [data]:value}))
  }


  // Cereate account function
  const signUp = async (email,password,name,phone,setLoading) => {
    const {error, user} = await AuthService.createUserWithEmailAndPassword(email,password,name,phone,setLoading)

    if(error){
      if(error.code === 'auth/email-already-in-use'){
        toast({
            title: 'Email Already Exists.Please Use A Different Email',
            status: 'error',
            position: 'bottom-left'
        })
      }else{
          toast({
              title: error.message,
              status: 'error',
              position: 'bottom-left'
          })
      }
    }else{
      navigate(`/createWorkspace`,{replace: true})
      let userData = {
        name: name,
        email: user.email,
        phone: phone,
        uid: user.uid,
        workspaceId: null
      }
      await CurrUserServices.createUserDoc(userData)
    }
  }
  

  // Handle signup function
  const handleSignUp = () => {
    signUp(formData.email,formData.password,formData.fullName,formData.phone,setLoading)
  }


  return (
    <>
      <Flex bg="ternary" minHeight="100vh" justifyContent="Center">
        <Center p='5'>
          <Box
            boxShadow="md"
            rounded={30}
            bg="white"
            p={{base: 5, md:10}}
            border="1px"
            borderColor="gray.200"
            mt={["2%"]}
          >
            <Stack spacing={7}>
              <Center>
                <Heading as="h2" size="2xl" fontWeight={550}>
                  Sign up
                </Heading>
              </Center>
              <Input type='text' variant="outline" placeholder="Full Name" value={formData.fullName} onChange={(e) => handleFormData('fullName',e.target.value)}/>
              <Input type='email' variant="outline" placeholder="Email" value={formData.email} onChange={(e) => handleFormData('email',e.target.value)}/>
              
              <InputGroup>
                <InputLeftAddon children="+91" />
                <Input type="tel" placeholder="Phone Number" value={formData.phone} onChange={(e) => handleFormData('phone',e.target.value)}/>
              </InputGroup>

              <InputGroup size="md">
                <Input
                  pr="4.5rem"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Password"
                  value={formData.password}
                  onChange={(e) => handleFormData('password',e.target.value)}
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={() => setShowPassword(prevState => !prevState)}>
                    {showPassword ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>

              <InputGroup size="md">
                <Input
                  pr="4.5rem"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={(e) => handleFormData('confirmPassword',e.target.value)}
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={() => setShowConfirmPassword(prevState => !prevState)}>
                    {showConfirmPassword ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>

              <Button variant="main" size="md" disabled={!isValidName || !isValidEmail || !isValidPassword || !isValidConfirmPassword || loading } onClick={handleSignUp} isLoading={loading}>
                Signup
              </Button>
              <Text
                fontSize={{ base: "sm", sm: "md" }}
                textAlign="center"
                color={useColorModeValue("gray.800", "gray.400")}
                mt={"3"}
              >
                Already have an account? <Link as={ReachLink} to='/login' color='secondary'>Login</Link>
              </Text>
            </Stack>
          </Box>
        </Center>
      </Flex>
    </>
  );
}

export default Signup;

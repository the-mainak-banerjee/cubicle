import React, { useState } from "react";

import {
  Input,
  Stack,
  Button,
  Box,
  Center,
  Heading,
  Flex,
  useColorModeValue,
  Text,
  FormControl,
  Link,
  useToast,
} from "@chakra-ui/react";

import { Link as ReachLink, useNavigate } from 'react-router-dom'
import { AuthService } from "../../backend/services/AuthService";


export function ForgotPassword() {

  const [userEmail,setUserEmail] = useState('')
  const [loading,setLoading] = useState(false)

  const navigate = useNavigate()
  const toast = useToast()

   // Validate user input
   const isValidEmail = userEmail.match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  )
    ? true
    : false;


    const handleEmailSend = async () => {
      const error = await AuthService.resetPassword(userEmail,setLoading)

      if(error){
        toast({
          title: 'An Error Occuered!! Please try again later.',
          status: 'error',
          position: 'bottom-left'
        })
      }else{
        toast({
          title: 'Resest Email Sent. Redirecting You To Login Page',
          status: 'success',
          position: 'bottom-left'
        })
        setTimeout(() => {
          navigate('/login', {replace: true})
        }, [1000])
      }
    }

  return (
    <>
      <Flex bg="ternary" minHeight="100vh" justifyContent="Center">
        <Center p={{base:5, md:20}}>
          <Box
            boxShadow="md"
            rounded={30}
            bg="white"
            p={{base: 5, md:10}}
            border="1px"
            borderColor="gray.200"
          >
            <Stack textAlign='center'>
              <Center>
                <Heading
                  lineHeight={1.1}
                  fontSize={{ base: "2xl", md: "3xl" }}
                  as="h3"
                  size="xl"
                  fontWeight={500}
                  mb="4"
                >
                  Forgot your password?
                </Heading>
              </Center>
              <Center>
                <Text
                  fontSize={{ base: "sm", sm: "md" }}
                  color={useColorModeValue("gray.800", "gray.400")}
                  width={{base:'full', md:'60%'}}
                  mb='2'
                >
                  Don't worry. Add your email address and You&apos;ll get an email with a reset link
                </Text>
              </Center>
              <FormControl id="email">
                <Input
                  placeholder="youremail@example.com"
                  _placeholder={{ color: "gray.500" }}
                  type="email"
                  mb={5}
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                />
              </FormControl>

              <Stack spacing={6}>
                <Button
                  bg={"blue.400"}
                  variant="main"
                  _hover={{
                    bg: "blue.500",
                  }}
                  isLoading={loading}
                  disabled={!isValidEmail || loading}
                  onClick={handleEmailSend}
                >
                  Reset Password
                </Button>
              </Stack>
            </Stack>
            <Text
              fontSize={{ base: "sm", sm: "md" }}
              textAlign="center"
              color={useColorModeValue("gray.800", "gray.400")}
              mt={"3"}
            >
              <Link as={ReachLink} to='/login'>Back To Login</Link>
            </Text>
          </Box>
        </Center>
      </Flex>
    </>
  );
}


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
} from "@chakra-ui/react";
import { Link as ReachLink } from "react-router-dom";

function Signup() {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(prevState => !prevState);

  return (
    <>
      <Flex bg="ternary" minHeight="100vh" justifyContent="Center">
        <Center>
          <Box
            boxShadow="md"
            rounded={30}
            bg="white"
            p={20}
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
              <Input variant="outline" placeholder="Username" />
              <Input variant="outline" placeholder="Email" />
              <InputGroup>
                <InputLeftAddon children="+91" />
                <Input type="tel" placeholder="Phone Number" />
              </InputGroup>

              <InputGroup size="md">
                <Input
                  pr="4.5rem"
                  type={show ? "text" : "password"}
                  placeholder="Enter Password"
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>

              <InputGroup size="md">
                <Input
                  pr="4.5rem"
                  type={show ? "text" : "password"}
                  placeholder="Confirm Password"
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>

              <Button variant="main" size="md" color="white">
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

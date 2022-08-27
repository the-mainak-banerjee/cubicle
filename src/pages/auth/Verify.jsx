import React from "react";

import {
  Box,
  Center,
  Heading,
  Flex,
  Text,
  VStack
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";


function Verify() {
    const params = useParams()

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
          >
            <VStack spacing={7}>
                <Heading as="h2" size="2xl" fontWeight={550}>
                  Verify Email
                </Heading>
                <Text>Please check your email. Send to this email {params.email}</Text>
            </VStack>
          </Box>
        </Center>
      </Flex>
    </>
  );
}

export default Verify;

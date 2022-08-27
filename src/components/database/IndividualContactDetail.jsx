import React from 'react'
import {
    Flex,
    Box,
    Heading,
    Center,
    Stack,
    Input,
    Text,
    Divider,
    Button,
    Avatar,
  } from "@chakra-ui/react";
  function IndividualContactDetail() {
    return (
        <>
        <Flex>
          <Box
            boxShadow="base"
            p="6"
            px={'14'}
            rounded="md"
            bg="white"
            borderRadius={20}
            width={"40%"}
            height={650}
          >
            <Center>
              <Avatar my={"6"} src="./images/icons8-user-48.png" w={'30%'} h={'30%'} alt="User" />
            </Center>
            <Center>
              <Heading mb={"10"} fontSize={18}>
                swatigoel37@gmail.com
              </Heading>
            </Center>
            <Stack spacing={4}>
              
                <Box boxShadow="xs" w={'base'} px="4" py="2" rounded="md" bg="white">
                  <Center>
                  <Text>
                    Swati Goel
                  </Text></Center>
                </Box>
              
                <Box boxShadow="xs" w={'100%'} px="4" py="2" rounded="md" bg="white">
                  <Center>
                  <Text>
                  swatigoel37@gmail.com
                  </Text></Center>
                </Box>
  

  
                <Box boxShadow="xs" w={'100%'} px="4" py="2" rounded="md" bg="white">
                  <Center>
                  <Text>
                    Added at
                  </Text></Center>
                  
                </Box>
                <Box boxShadow="xs" w={'100%'} px="4" py="2" rounded="md" bg="white">
                <Text>
                    Tags
                  </Text>
                  <Input my={'4'} placeholder='Enter Tags'></Input>
                  <Center>
                  </Center>
                </Box>
            </Stack>
            {/* <Center>
              <Box>
                <Avatar mb={"5"} src="./images/icons8-user-48.png" alt="User" />
              </Box>
              <Heading mb={"5"} fontSize={18}>
                swatigoel37@gmail.com
              </Heading>
            </Center>
            <Center>
              <Stack spacing={4}>
                <Input variant="outline" placeholder="Swati Goel" />
                <Input variant="outline" placeholder="swatigoel37@gmail.com" />
                <Input variant="outline" placeholder="Tag [Intern]" />
                <Input variant="outline" placeholder="Added At [21-01-2022]" />
              </Stack>
            </Center>
            {/* <Divider mt={'85'} mb={'10'} borderColor='GrayText'/> */}
  
            <Center>
              <Button variant={"main"} mt={"10"}>
                Delete Contact
              </Button>
            </Center>
          </Box>
          {/* <Spacer></Spacer> */}
          <Box
            boxShadow="base"
            ml="6"
            p="6"
            rounded="md"
            bg="white"
            borderRadius={20}
            width={"100%"}
            height={650}
          >
            Write here
          </Box>
        </Flex>
      </>
    )
  }

export default IndividualContactDetail
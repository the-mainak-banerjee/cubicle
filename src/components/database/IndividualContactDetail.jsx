import React from 'react'
import {
    Flex,
    Box,
    Heading,
    Center,
    Stack,
    Input,
    Text,
    Button,
    Avatar,
    Divider,
    Icon
} from "@chakra-ui/react";
import { FaEnvelope } from 'react-icons/fa';
import EmailCardSmall from '../bulkEmailSender/EmailCardSmall';
import { email } from '../../utils/DummyData';



  function IndividualContactDetail() {
    return (
        <>
        <Flex flexDirection={{base:'column', md:'row'}} minHeight='70vh' gap='4'>
        <Box
            boxShadow="base"
            pt='4' 
            pb={{base:'8', md:'4'}}
            rounded="md"
            bg="white"
            borderRadius='lg'
            width={{base:'100%',md:"100%"}}
          >
            <Flex align='center' gap='2' px='4' py='2'>
              <Icon as={FaEnvelope} width='25px' height='25px'/>
              <Text fontWeight='bold' fontSize='lg'>All Emails</Text>
            </Flex>
            <Divider borderColor='GrayText'/>
            {/* <Text textAlign='center' fontSize='xl' py='4'>No Email To Show</Text> */}
            <Box px='4'>
              {
                email.filter(emailItem => emailItem.status === 'sent').map(item => {
                  return (
                    <EmailCardSmall
                      key={item.id}
                      id={item.id}
                      subjectLine={item.subjectLine}
                      status={item.status}
                      publishedDate={item.publishedDate}
                      engagement={item.engagement}
                    />
                  )
                })
              }
            </Box>
          </Box>

          <Box
            boxShadow="base"
            p="6"
            px={'14'}
            rounded="md"
            bg="white"
            borderRadius='lg'
            width={{base:'100%',md:"30%"}}
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
            <Center>
              <Button variant={"danger"} mt={"10"}>
                Delete Contact
              </Button>
            </Center>
          </Box>
        </Flex>
      </>
    )
  }

export default IndividualContactDetail
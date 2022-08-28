import React, { useState } from "react";
import { useSelector } from "react-redux/";
import {
  Textarea,
  Text,
  Input,
  Stack,
  FormControl,
  Button,
  Box,
  Center,
  Heading,
  Flex,
  useToast,
  Link,
} from "@chakra-ui/react";
import { Link as ReachLink } from 'react-router-dom'
import { selectUserDetails, selectUserId } from "../../features/user/userSlice";
import { WorkSpaceServices } from "../../backend/services/WorkSpaceServices";
import {v4 as uuid} from 'uuid'
import { CurrUserServices } from "../../backend/services/CurrUserServices";
import { useNavigate } from "react-router-dom";

export function CreateWorkspace() {

  const [loading,setLoading] = useState(false)
  const [formData,setFormData] = useState({
    name: '',
    desc: ''
  })
  const toast = useToast()
  const userId = useSelector(selectUserId)
  const currentUserDetails = useSelector(selectUserDetails)
  const navigate= useNavigate()

  // Validate user input
  const isValidName = formData.name.trim().length > 2
  const isValidDesc = formData.desc.trim().length > 10

  // Handle user input data
  const handleFormData = (data,value) => {
    setFormData(prevState => ({...prevState, [data]:value}))
  }

  // Create workspace function
  const handleWorkspaceCreation = async () => {
    if(currentUserDetails?.workspaceId){
      toast({
        title: "You Already Have a workspace.",
        status: 'error',
        position: 'bottom-left'
      })
    }else{  
      setLoading(true)
      const workspaceData = {
        id: uuid(),
        name: formData.name,
        desc: formData.desc,
        admin: userId
      }
      const error  = await WorkSpaceServices.createWorkspaceDoc(workspaceData)
        if(error){
          toast({
            title: "Can't create Workspace!! Please try agian later",
            status: 'error',
            position: 'bottom-left'
          })
          setLoading(false)
        }else{
          await CurrUserServices.updateUserDoc(userId, {workspaceId: workspaceData.id})
          setLoading(false)
          navigate('/database', {replace: true})
      }
    }
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
            {userId &&
              <Stack py='5'>
                <Center>
                  <Heading
                    lineHeight={1.1}
                    fontSize={{ base: "2xl", md: "3xl" }}
                    as="h3"
                    size="xl"
                    fontWeight={500}
                    mb={"7%"}
                  >
                    Create Your Workspace
                  </Heading>
                </Center>

                <FormControl id="email">
                  <Input
                    placeholder="Workspace Name"
                    _placeholder={{ color: "gray.500" }}
                    type="text"
                    mb={5}
                    value={formData.name}
                    onChange={(e) => handleFormData('name',e.target.value)}
                  />
                  <Textarea
                    placeholder="Write Workspace Description here"
                    mb={5}
                    value={formData.desc}
                    onChange={(e) => handleFormData('desc', e.target.value)}
                  />
                </FormControl>
                <Stack spacing={6}>
                  <Button 
                    variant="main"
                    isLoading={loading}
                    disabled={!isValidName || !isValidDesc || loading}
                    onClick={handleWorkspaceCreation}
                  >
                    Create Workspace
                  </Button>
                </Stack>
              </Stack>
            }
            {!userId && <Flex flexDirection='column' gap='2' alignItems='center'>
                <Text fontSize='lg'>Please Sign Up to create a New Workspace</Text>
                <Link as={ReachLink} to='/signup' style={{ textDecoration: 'none' }}><Button variant='main'>Go to SignUp</Button></Link>
              </Flex>
            }
          </Box>
        </Center>
      </Flex>
    </>
  );
}



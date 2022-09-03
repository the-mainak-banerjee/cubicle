import React, { useState } from 'react'
import {
    Flex,
    Box,
    Center,
    Stack,
    Text,
    Button,
    Avatar,
    Divider,
    Icon,
    Select,
    useToast,
} from "@chakra-ui/react";
import { FaEnvelope, FaRegTimesCircle } from 'react-icons/fa';
import EmailCardSmall from '../bulkEmailSender/EmailCardSmall';
import { email } from '../../utils/DummyData';
import { ContactService } from '../../backend/services/ContactService';


  function IndividualContactDetail({ contactDetails, onEditContactOpen, onDeleteContactOpen, allTags, currentUserDetails }) {

    const [showNewTagForm,setShowNewTagForm] = useState(false)
    const [loading,setLoading] = useState(false)
    const [newTag,setNewTag] = useState('')
    const toast = useToast()

    const handleAddTag = async () => {
      const error = await ContactService.addContactsInATag(currentUserDetails.workspaceId,contactDetails.id,newTag,setLoading)
      if(error){
        toast({
          title: "Can't add Tag Now!! Please try agian later",
          status: 'error',
          position: 'bottom-left'
        })
      }else{
        toast({
          title: "Tag Added Successfully",
          status: 'success',
          position: 'bottom-left'
        })
        setShowNewTagForm(prevState => !prevState)
        setNewTag('')
      }
    }

    const handleRemoveTag = async (tag) => {
      const error = await ContactService.removeContactsFromATag(currentUserDetails.workspaceId,contactDetails.id,tag,setLoading)
      if(error){
        toast({
          title: "Can't remove Tag Now!! Please try agian later",
          status: 'error',
          position: 'bottom-left'
        })
        console.log(error)
      }else{
        toast({
          title: "Tag Removed Successfully",
          status: 'success',
          position: 'bottom-left'
        })
      }
    }


    const handleEditContact = () => {
      onEditContactOpen()
    }

    const handleDeleteContact = () => {
      onDeleteContactOpen()
    }

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
            rounded="md"
            bg="white"
            borderRadius='lg'
            width={{base:'100%',md:"30%"}}
          >
            <Flex flexDirection='column' alignItems='center' justifyContent='center' mb='10' px='2'>
              <Avatar my={"6"} size='lg' name={contactDetails?.fullName} />
              <Text fontWeight='semiBold'>
                {contactDetails?.email}
              </Text>
            </Flex>
              
            <Stack spacing={4}> 
              <Box boxShadow="xs" px="4" py="2" rounded="md" bg="white">
                <Center>
                  <Text>
                    {contactDetails?.fullName}
                  </Text>
                </Center>
              </Box>
            
              <Box boxShadow="xs" w={'100%'} px="4" py="2" rounded="md" bg="white">
                <Center>
                  <Text>
                    {contactDetails?.createdAt?.formatedDate}-{contactDetails?.createdAt?.formatedMonth}-{contactDetails?.createdAt?.formatedYear}
                  </Text>
                </Center>
                
              </Box>
              <Box boxShadow="xs" w={'100%'} px="4" py="2" rounded="md" bg="white">
                <Text>
                  Tags
                </Text>
                <Flex flexDirection='column' gap='4' my='2'>
                  {contactDetails?.tags?.map((tag,idx,arr) => {
                    return(
                      <Flex key={tag} bg="ternary" px='4' py='2' borderRadius='lg' alignItems='center' justifyContent='space-between'>
                        <Text>
                          {tag}
                        </Text>
                        {arr.length > 1 && <Icon as={FaRegTimesCircle} cursor='pointer' onClick={() => handleRemoveTag(tag)}/>}
                      </Flex>
                    )
                  })}
                </Flex>
                {showNewTagForm
                  ? (
                      <Box>
                        <Select placeholder='Select A Tag' value={newTag} onChange={(e) => setNewTag(e.target.value)}>
                          {allTags?.map(item => {
                            return (
                              <option key={item.id} name={item.name} value={item.name}>{item.name}</option>
                            )
                          })}
                        </Select>
                        <Flex gap='4' my='4'>
                            <Button variant='main' disabled={!newTag || loading} isLoading={loading} onClick={handleAddTag}>Add Tag</Button>
                            <Button variant='danger' onClick={() => setShowNewTagForm(prevState => !prevState)}>Cancel</Button>
                        </Flex>
                      </Box>
                  ) : (
                    <Button variant='outline' onClick={() => setShowNewTagForm(prevState => !prevState)}>Add A Tag</Button>
                  )
                }
              </Box>
            </Stack>  
            <Flex gap='2'>
              <Button variant={"main"} mt={"10"} onClick={handleEditContact}>
                Edit Contact
              </Button>
              <Button variant={"danger"} mt={"10"} onClick={handleDeleteContact}>
                Delete Contact
              </Button>
            </Flex>
          </Box>
        </Flex>
      </>
    )
  }

export default IndividualContactDetail
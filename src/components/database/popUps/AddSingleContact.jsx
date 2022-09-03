import React, { useState } from "react";
import {
  Button,
  ButtonGroup,
  Input,
  Box,
  Select,
  useToast,
} from "@chakra-ui/react";
import { v4 as uuid} from 'uuid'
import PopUp from "../../ui/popup/PopUp";
import { ContactService } from "../../../backend/services/ContactService";
import { useSelector } from "react-redux";
import { selectUserDetails } from "../../../features/user/userSlice";
import { selectAllContacts } from "../../../features/database/contactsSlice";


function AddSingleContact({isAddSingleContactOpen, onAddSingleContactClose, allTags}) {

  const [loading,setLoading] = useState(false)
  const [contactDetails,setContactDetails] = useState({
    fullName: '',
    email: '',
    tagNames: '',
  })
  const currentUserDetails = useSelector(selectUserDetails)
  const allContacts = useSelector(selectAllContacts)
  const toast = useToast()
  const isValidEmail = contactDetails.email.match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  )
    ? true
    : false;


  const handleInputChange = (name,value) => {
    setContactDetails(prevState => ({...prevState, [name]: value}))
  }

  const handleCreateContact = async () => {
    if(allContacts.some(item => item.email === contactDetails.email)){
      toast({
        title: "The Email Already Exists",
        status: 'error',
        position: 'bottom-left'
      })
    }else{
      const error = await ContactService.createContact(contactDetails,uuid(),currentUserDetails.workspaceId,setLoading)
      if(error){
        toast({
          title: "Can't create Contact Now!! Please try agian later",
          status: 'error',
          position: 'bottom-left'
        })
      }else{
        toast({
          title: "Contact created Successfully",
          status: 'success',
          position: 'bottom-left'
        })
        onAddSingleContactClose()
      }
    }
  }

  return (
    <>
      <PopUp isOpen={isAddSingleContactOpen} onClose={onAddSingleContactClose} modalTitle='Add A Single Contact'>
        <Input  mb='5' variant='outline' placeholder='Full Name' value={contactDetails.fullName} onChange={(e) => handleInputChange('fullName', e.target.value)}/>

        <Input  mb='5'variant='outline' placeholder='Email' value={contactDetails.email} onChange={(e) => handleInputChange('email', e.target.value)}/>

        <Select placeholder='Select A Tag' value={contactDetails.tagNames} onChange={(e) => handleInputChange('tagNames', e.target.value)}>
          {allTags?.map(item => {
            return (
              <option key={item.id} name={item.name} value={item.name}>{item.name}</option>
            )
          })}
        </Select>

        <Box
          border="0"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          pb='4' my='5'
        >
          <ButtonGroup size="sm">
            <Button 
              variant='main' 
              disabled={!contactDetails.fullName || !contactDetails.email || !contactDetails.tagNames || !isValidEmail || loading}
              isLoading={loading}
              onClick={handleCreateContact}
            >
              Save
            </Button>

            <Button variant='danger' onClick={onAddSingleContactClose}>Cancel</Button>
          </ButtonGroup>
        </Box>
      </PopUp>
    </>
  )
}
export default AddSingleContact
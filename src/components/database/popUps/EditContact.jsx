import { Button, Flex, Input, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { ContactService } from '../../../backend/services/ContactService'
import PopUp from '../../ui/popup/PopUp'

const EditContact = ({isEditContactOpen, onEditContactClose, contactDetails, currentUserDetails}) => {

    const [formData,setFormData] = useState({
        name: contactDetails?.fullName,
        email: contactDetails?.email
    })
    const [loading,setLoading] = useState(false)
    const toast = useToast()

    const isValidEmail = formData?.email?.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
        ? true
        : false;
    

    const handleInputChange = (name,value) => {
        setFormData(prevState => ({...prevState, [name]: value}))
    }

    const handleUpdateContact = async () => {

      if(formData.name === contactDetails?.fullName && formData.email === contactDetails.email){
        onEditContactClose()
      }else{
        const data = {
          fullName: formData.name,
          email: formData.email
        }
        const error = await ContactService.updateContact(currentUserDetails.workspaceId,contactDetails.id,data,setLoading)
        if(error){
          toast({
            title: "Can't update Contact Now!! Please try agian later",
            status: 'error',
            position: 'bottom-left'
          })
          console.log(error)
        }else{
          toast({
            title: "Contact updated Successfully",
            status: 'success',
            position: 'bottom-left'
          })
          onEditContactClose()
        }
      }

    }

  return (
    <PopUp isOpen={isEditContactOpen} onClose={onEditContactClose} modalTitle='Edit Contact'>
        <Input type='text' placeholder='name' my='4' value={formData.name} onChange={(e) => handleInputChange('name', e.target.value)}/>
        <Input type='email' placeholder='email' mb='4' value={formData.email} onChange={(e) => handleInputChange('email', e.target.value)}/>
        <Flex gap='4' my='4'>
            <Button variant='main' disabled={!formData.name || !formData.email || !isValidEmail || loading} isLoading={loading} onClick={handleUpdateContact}>Save Contact</Button>
            <Button variant='danger' onClick={onEditContactClose}>Cancel</Button>
        </Flex>
    </PopUp>
  )
}

export default EditContact

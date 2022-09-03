import { Button, Flex, Text, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ContactService } from '../../../backend/services/ContactService'
import PopUp from '../../ui/popup/PopUp'
import { useSelector } from 'react-redux'
import { selectUserDetails } from '../../../features/user/userSlice'

const DeleteContact = ({isDeleteContactOpen, onDeleteContactClose, contactDetails}) => {

    const [loading,setLoading] = useState(false)
    const currentUserDetails = useSelector(selectUserDetails)
    const toast = useToast()
    const navigate = useNavigate()

    const handleDeleteContact = async () => {
        const error = await ContactService.deleteContact(currentUserDetails.workspaceId,contactDetails.id,setLoading)
        if(error){
          toast({
            title: "Can't delete Contact Now!! Please try agian later",
            status: 'error',
            position: 'bottom-left'
          })
        }else{
          toast({
            title: "Contact deleted Successfully",
            status: 'success',
            position: 'bottom-left'
          })
          navigate('/database', {replace:true})
        }
    }

  return (
    <PopUp isOpen={isDeleteContactOpen} onClose={onDeleteContactClose} modalTitle='Delete Contact'>
        <Text>Are You Sure You Want To Delete This Contact?</Text>
        <Flex gap='4' my='4'>
            <Button variant='main' onClick={handleDeleteContact} disabled={loading} isLoading={loading}>Yes,Delete It!</Button>
            <Button variant='danger' onClick={onDeleteContactClose}>Cancel</Button>
        </Flex>
    </PopUp>
  )
}

export default DeleteContact

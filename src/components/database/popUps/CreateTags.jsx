import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  Button,
  Text,
  ButtonGroup,
  Input,
  Box,
  useToast,
} from "@chakra-ui/react";
import PopUp from "../../ui/popup/PopUp";
import { v4 as uuid } from 'uuid'
import { serverTimestamp } from "firebase/firestore";
import { TagService } from "../../../backend/services/TagService";
import { selectUserDetails } from "../../../features/user/userSlice";

function CreateTags({ isCreateTagOpen, onCreateTagClose, onImportContactOpen, allTags}) {

  const [tagName,setTagName] = useState('')
  const [loading,setLoading] = useState(false)
  const currentUserDetails = useSelector(selectUserDetails)
  const toast = useToast()

  const handleCreateTag = async () => {
    const tag = {
      id: uuid(),
      name: tagName,
      contacts:[],
      createdAt: serverTimestamp()
    }
    if(allTags){
      const isTagNameExist = allTags.some(item => item.name === tag.name)
      if(isTagNameExist){
          toast({
            title: "Tag Name Alreday Exists, Please Use A Different Tag Name",
            status: 'error',
            position: 'bottom-left'
        })
      }else{
        await TagService.createTag(tag,currentUserDetails.workspaceId,setLoading)
        onCreateTagClose()
      }
    }else{
      await TagService.createTag(tag,currentUserDetails.workspaceId,setLoading)
      onCreateTagClose()
      onImportContactOpen()
    }
  }

  return (
    <>
      <PopUp isOpen={isCreateTagOpen} onClose={onCreateTagClose} modalTitle='Create Tag'>
        <Text mb={'5'}>Create A New Tag{!allTags && ' First To Add Contacts'}</Text>
        <Input  mb={'5'} variant="outline" placeholder="Tag Name" value={tagName} onChange={(e) => setTagName(e.target.value)}/>
        <Box
          border="0"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          pb={4} mb={'5'}
        >
          <ButtonGroup size="sm">
            <Button variant='main' disabled={!tagName || loading} isLoading={loading} onClick={handleCreateTag}>Create Tag</Button>
            <Button variant='danger' onClick={onCreateTagClose}>Cancel</Button>
          </ButtonGroup>
        </Box>
      </PopUp>
    </>
  )
}

export default CreateTags

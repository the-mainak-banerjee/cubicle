import React from "react";
import {
  Button,
  Text,
  ButtonGroup,
  Input,
  Box,
} from "@chakra-ui/react";
import PopUp from "../../ui/popup/PopUp";
import { useSelector } from "react-redux";
import { selectAllTags } from "../../../features/database/contactsSlice";

function CreateTags({ isCreateTagOpen, onCreateTagClose}) {

  const allTags = useSelector(selectAllTags)

  console.log(allTags)

  return (
    <>
      <PopUp isOpen={isCreateTagOpen} onClose={onCreateTagClose} modalTitle='Create Tag'>
        <Text mb={'5'}>Create A New Tag</Text>
        <Input  mb={'5'} variant="outline" placeholder="Tag Name" />
        <Box
          border="0"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          pb={4} mb={'5'}
        >
          <ButtonGroup size="sm">
            <Button variant='main'>Create Tag</Button>
            <Button variant='danger' onClick={onCreateTagClose}>Cancel</Button>
          </ButtonGroup>
        </Box>
      </PopUp>
    </>
  )
}

export default CreateTags

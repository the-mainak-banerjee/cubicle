import React from "react";
import {
  Button,
  Text,
  useDisclosure,
  ButtonGroup,
  Input,
  Box,
} from "@chakra-ui/react";
import PopUp from "../../ui/popup/PopUp";

function CreateTags() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>Create Tag</Button>
      <PopUp isOpen={isOpen} onClose={onClose}>
        <Text mb={'5'}>Add Contact based on tags</Text>
        <Input  mb={'5'} variant="outline" placeholder="Tag Name" />

        <Box
          border="0"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          pb={4} mb={'5'}
        >
          {/* <Box fontSize='sm'>Step 2 of 4</Box> */}
          <ButtonGroup size="sm">
            <Button colorScheme="green">Create Tag</Button>
            <Button  colorScheme="blue">Cancel</Button>
          </ButtonGroup>
        </Box>
      </PopUp>
    </>
  )
}

export default CreateTags

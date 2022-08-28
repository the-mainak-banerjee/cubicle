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

function ImportContacts() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>Import Contacts</Button>
      <PopUp isOpen={isOpen} onClose={onClose}>
        <Text mb={'5'}>Import Contacts</Text>
        {/* <Input  mb={'5'} variant="outline" placeholder="Tag Name" /> */}

        <Box
          border="0"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          pb={4} mb={'5'}
        >
          {/* <Box fontSize='sm'>Step 2 of 4</Box> */}
          <ButtonGroup size="sm">
            <Button colorScheme="green">Add a Single Contact</Button>
            <Button  colorScheme="blue">Import a CSV</Button>
          </ButtonGroup>
        </Box>
      </PopUp>
    </>
  )
}

export default ImportContacts
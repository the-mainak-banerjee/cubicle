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

function UploadList() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>Upload List</Button>
      <PopUp isOpen={isOpen} onClose={onClose}>
        <Text mb={'5'}>Upload Contact with these tags</Text>
        <Input  mb={'5'} variant="outline" placeholder="Enter Tag Name" />
        <Input mb={'5'} p={'1'} variant='outline' type={'file'} accept=".doc,.docx,.pdf" placeholder='Add File' />

        <Box
          border="0"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          pb={4} mb={'5'}
        >
          {/* <Box fontSize='sm'>Step 2 of 4</Box> */}
          <ButtonGroup  size="sm">
            <Button colorScheme="green">Save</Button>
            <Button  colorScheme="blue" onClick={onClose}>Cancel</Button>
          </ButtonGroup>
        </Box>
      </PopUp>
    </>
  )
}

export default UploadList
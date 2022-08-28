import React from "react";
import {
  Button,
  Text,
  ButtonGroup,
  Input,
  Box,
  Select
} from "@chakra-ui/react";
import PopUp from "../../ui/popup/PopUp";

function UploadList({ isUploadListOpen, onUploadListClose }) {
  return (
    <>
      <PopUp isOpen={isUploadListOpen} onClose={onUploadListClose} modalTitle='Upload List'>
      <Select placeHolder='Select A Tag' mb='5'>
          <option>Select A Tag</option>
          <option value='tag1'>Tag 1</option>
          <option value='tag2'>Tag 2</option>
          <option value='tag3'>Tag 3</option>
          <option value='tag4'>Tag 4</option>
        </Select>
        <Text mb='2'>Upload A List of Contacts(Only CSV file)</Text>
        <Input mb='5' p={'1'} variant='outline' type={'file'} accept=".csv" placeholder='Add File' />

        <Box
          border="0"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          pb={4} mb={'5'}
        >
          {/* <Box fontSize='sm'>Step 2 of 4</Box> */}
          <ButtonGroup  size="sm">
            <Button variant='main'>Save</Button>
            <Button variant='danger' onClick={onUploadListClose}>Cancel</Button>
          </ButtonGroup>
        </Box>
      </PopUp>
    </>
  )
}

export default UploadList
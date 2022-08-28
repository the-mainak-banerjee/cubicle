import React from "react";
import {
  Button,
  ButtonGroup,
  Input,
  Box,
  Select,
} from "@chakra-ui/react";
import PopUp from "../../ui/popup/PopUp";

function AddSingleContact({isAddSingleContactOpen, onAddSingleContactClose}) {
  return (
    <>
      <PopUp isOpen={isAddSingleContactOpen} onClose={onAddSingleContactClose} modalTitle='Add A Single Contact'>
        <Input  mb='5' variant='outline' placeholder='Full Name' />
        <Input  mb='5'variant='outline' placeholder='Email' />
        <Select placeHolder='Select A Tag'>
          <option>Select A Tag</option>
          <option value='tag1'>Tag 1</option>
          <option value='tag2'>Tag 2</option>
          <option value='tag3'>Tag 3</option>
          <option value='tag4'>Tag 4</option>
        </Select>
        <Box
          border="0"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          pb='4' my='5'
        >
          <ButtonGroup size="sm">
            <Button variant='main'>Save</Button>
            <Button variant='danger' onClick={onAddSingleContactClose}>Cancel</Button>
          </ButtonGroup>
        </Box>
      </PopUp>
    </>
  )
}
export default AddSingleContact
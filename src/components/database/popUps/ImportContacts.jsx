import React from "react";
import {
  Button,
  ButtonGroup,
  Box,
} from "@chakra-ui/react";
import PopUp from "../../ui/popup/PopUp";

function ImportContacts({ isImportContactOpen, onImportContactClose, onAddSingleContactOpen, onUploadListOpen }) {

  const handleSingleContactButton = () => {
    onAddSingleContactOpen()
    onImportContactClose()
  }

  const handleUploadListOpen = () => {
    onUploadListOpen()
    onImportContactClose()
  }

  return (
    <>
      <PopUp isOpen={isImportContactOpen} onClose={onImportContactClose} modalTitle='Import Contacts'>
        <Box
          border="0"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          pb={4} mb={'5'}
        >
          <ButtonGroup size="sm">
            <Button colorScheme="green" onClick={handleSingleContactButton}>Add a Single Contact</Button>
            <Button colorScheme="blue" onClick={handleUploadListOpen}>Import a CSV</Button>
          </ButtonGroup>
        </Box>
      </PopUp>
    </>
  )
}

export default ImportContacts
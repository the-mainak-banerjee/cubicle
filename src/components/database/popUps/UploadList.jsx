import React, { useState } from "react";
import {
  Button,
  Text,
  ButtonGroup,
  Input,
  Box,
  Select,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  useToast
} from "@chakra-ui/react";
import PopUp from "../../ui/popup/PopUp";
import Papa from 'papaparse'
import { ContactService } from "../../../backend/services/ContactService";
import { v4 as uuid } from 'uuid'
import { useSelector } from "react-redux";
import { selectUserDetails } from "../../../features/user/userSlice";
import { selectAllContacts } from "../../../features/database/contactsSlice";

function UploadList({ isUploadListOpen, onUploadListClose, allTags }) {

  const [uploadedFile,setUploadedFile] = useState([])
  const [dataRows,setDataRows] = useState([])
  const [dataValues,setDataValues] = useState([])
  const [firstContactField,setFirstContactField] = useState('')
  const [secondContactField,setSecondContactField] = useState('')
  const [tagName,setTagName] = useState('')
  const [loading,setLoading] = useState(false)
  const toast = useToast()
  const currentUserDetails = useSelector(selectUserDetails)
  const allContacts = useSelector(selectAllContacts)

  const isValidEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
      ? true
      : false;
  }

  const handleFileUpload = (e) => {
    Papa.parse(e.target.files[0],{
      header: true,
      skipEmptyLines: true,
      complete: function(results){
        const headerArray = []
        const valuesArray = []

        results.data.forEach(d => {
          headerArray.push(Object.keys(d))
          valuesArray.push(Object.values(d))
        })

        setUploadedFile(results.data)
        setDataRows(headerArray[0])
        setDataValues(valuesArray)
      }
    })
  }

  const handleContactField = (e,setField,setAnotherField,anotherField) => {
    setField(e.target.value)
    if(anotherField === e.target.value){
      setAnotherField('')
    }
  }

 

  const handleBulkUpload = () => {
    let contactFields = {
      fullName: '',
      email: '',
      tagNames: 'tagName'
    }
    
    
    dataValues.forEach(async (item) => {
      
      if(firstContactField === 'Email'){
        contactFields.fullName = item[1]
        contactFields.email = item[0]
      }else{
        contactFields.fullName = item[0]
        contactFields.email = item[1]
      }
      
      
      if(isValidEmail(contactFields.email) && !allContacts.some(item => item.email === contactFields.email)){
        const error = await ContactService.createContact(contactFields,uuid(),currentUserDetails.workspaceId,setLoading)
        if(error){
          toast({
            title: "Can't create Contact Now!! Please try agian later",
            status: 'error',
            position: 'bottom-left'
          })
        }else{
          handlePopupClose()
        }
      }else{
        toast({
          title: "Invalid Email Address",
          status: 'error',
          position: 'bottom-left'
        })
      }
    }) 
  }

  const handlePopupClose = () => {
    setTagName('')
    setUploadedFile([])
    setFirstContactField('')
    setSecondContactField('')
    onUploadListClose()
  }


  return (
    <>
      <PopUp isOpen={isUploadListOpen} onClose={onUploadListClose} modalTitle='Upload List'>
      <Select placeholder='Select A Tag' mb='5' value={tagName} onChange={(e) => setTagName(e.target.value)}>
          {allTags?.map(item => {
            return(
              <option key={item.id} value={item.name}>{item.name}</option>
              )
            })
          }
        </Select>
        <Text mb='2'>Upload A List of Contacts(Only CSV file)</Text>
        <Input mb='5' p={'1'} variant='outline' type={'file'} accept=".csv" placeholder='Add File' onChange={handleFileUpload}/>

        {uploadedFile.length > 0 && <Box mb='5'>
          <Text>Map The Columns To The Fields:</Text>
          <TableContainer>
            <Table variant='simple'>
              <Thead>
                <Tr>
                  <Th>Header</Th>
                  <Th>Contact Field</Th>
                  <Th>Sample data</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>{dataRows[0]}</Td>
                  <Td>
                    <Select placeholder='Select A Field' value={firstContactField} onChange={(e) => handleContactField(e,setFirstContactField,setSecondContactField,secondContactField)}>
                      <option value='Full Name'>Full Name</option>
                      <option value='Email'>Email</option>
                    </Select>
                  </Td>
                  <Td>{dataValues[0][0]}</Td>
                </Tr>
                <Tr>
                  <Td>{dataRows[1]}</Td>
                  <Td>
                    <Select placeholder='Select A Field' value={secondContactField} onChange={(e) => handleContactField(e,setSecondContactField,setFirstContactField,firstContactField)}>
                      <option value='Full Name'>Full Name</option>
                      <option value='Email'>Email</option>
                    </Select>
                  </Td>
                  <Td>{dataValues[0][1]}</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Box>}

        <Box
          border="0"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          pb={4} mb={'5'}
        >
          <ButtonGroup  size="sm">
            <Button variant='main' onClick={handleBulkUpload} disabled={!tagName || !dataValues || !firstContactField || !secondContactField || loading} isLoading={loading}>Save</Button>
            <Button variant='danger' onClick={handlePopupClose}>Cancel</Button>
          </ButtonGroup>
        </Box>
      </PopUp>
    </>
  )
}

export default UploadList
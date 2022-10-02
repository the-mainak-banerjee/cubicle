import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Heading,
  Input,
  Text,
  Checkbox,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";

import {AddIcon} from '@chakra-ui/icons'

function EmailSettings() {
  return (
    <TableContainer>
      <Heading  my={'8'}  size="lg">
        Email Addresses
      </Heading>

      <Table variant="striped" bg="#efefef">
        <Thead>
          <Tr>
            <Th>From Name</Th>
            <Th>Email Addresses</Th>
            <Th isNumeric>Status</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr >
            <Td><AddIcon w={2} h={2} mr="2"/>  Add from address</Td>
            <Td></Td>
            <Td isNumeric></Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  )
}

export default EmailSettings;

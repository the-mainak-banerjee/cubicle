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
  TableContainer, Heading, Input, Text,Checkbox, NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react'
function GeneralSettings() {
  return (
   
    <TableContainer>
      <Heading my={'8'}  size='lg'>General Settings</Heading>
    <Table size='sm' variant='none'>
      <Tbody>
        <Tr>
          <Th>Email Address</Th>
          <Td><Input 
            borderWidth={0.5}
            width={"15rem"}
            borderColor="gray.300"
            // px={8}
            py={2} 
            placeholder=' swatigoel37@gmail.com' /></Td>
        </Tr>
        {/* <Tr>
          <Th>Membership</Th>
          <Td><Text borderRadius="md"
            borderWidth={0.5}
            width={"15rem"}
            borderColor="gray.300"
            px={5}
            py={3}
            >
              <Checkbox defaultChecked> </Checkbox>Anyone can register</Text></Td>
        </Tr> */}
        <Tr>
          <Th>Timezone</Th>
          <Td>
            <Input borderRadius="md"
            borderWidth={0.5}
            width={"15rem"}
            borderColor="gray.300"
            px={5}
            py={2}
     size="md"
     type="time"
    />
            </Td>
        </Tr>
        <Tr>
        <Th>Date Format</Th>
        <Td><Input borderRadius="md"
            borderWidth={0.5}
            width={"15rem"}
            borderColor="gray.300"
            px={5}
            py={2}
     size="md"
     type="date"
    /></Td>
        </Tr>
        <Tr>
        <Th>Site Language</Th>
        <Td><Text  borderRadius="md"
            borderWidth={0.5}
            width={"15rem"}
            borderColor="gray.300"
            px={6}
            py={3}>English</Text>
    </Td>
        </Tr>
      </Tbody>
      
    </Table>
  </TableContainer>

  );
}

export default GeneralSettings;

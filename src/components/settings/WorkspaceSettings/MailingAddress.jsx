import React from "react";
import {
  Heading,
  Input,
  Text,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Textarea,
  Flex,
  Select,
  Box,
  Stack,Spacing,HStack
} from "@chakra-ui/react";

function MailingAddress() {
  return (
    <FormControl>
      <Heading my={"8"} size="lg">
        Mailing Address
      </Heading>
      <Text color="gray.600" mb={"5"}>
        Anti-spam laws require a physical address where you can be reached to be
        at the bottom of every email. You can use our address if you don't have
        one ready.
      </Text>
      <FormLabel>Street Address</FormLabel>
      {/* <Input width={'70%'} type='Text' /> */}
      <Textarea></Textarea>
      
      <Flex justifyContent='space-between'>
      <HStack spacing='10vw'>
        <Box my={6} >
          <FormLabel>City</FormLabel>
          <Input></Input>
        </Box>
        {/* <Spacing></Spacing> */}
        <Box my={6}>
          <FormLabel>State/Province</FormLabel>
          <Input></Input>
        </Box>
        <Box my={6}>
          <FormLabel>Pin code</FormLabel>
          <Input></Input>
        </Box>
 </HStack>
      </Flex>
     
      <Flex>
        
        <Box mb={'10'}>
          <FormLabel>Country</FormLabel>
          <Select placeholder="Select Country">
            
            <option>America</option>
            <option>Australia</option>
            <option>India</option>
            <option>Nigeria</option>
            <option>United Arab Emirates</option>
            
          </Select>
        </Box>
      </Flex>
    </FormControl>
  );
}

export default MailingAddress;

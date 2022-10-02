import React, { Component } from "react";
import {
  Input,
  Text,
  Box,
  Flex,
  Spacer,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText, Button
} from "@chakra-ui/react";
function TopBar() {
  return (
    <FormControl>
      <FormLabel>Workspace Name</FormLabel>
      <Input width={"17rem"} type="Text" />
      <Text my={"5"}></Text>
      <FormLabel>Workspace Description</FormLabel>
      {/* <Input width={'70%'} type='Text' /> */}
      <Textarea mb={'5'}></Textarea>

      <Button
        borderRadius="md"
        borderWidth={0.5}
        width={"15rem"}
        variant="main"
        px={6}
        py={3}
      >
        Delete Workspace
      </Button>
    </FormControl>
  );
}

export default TopBar;

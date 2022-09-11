import React from "react";
import {
  Flex,
  Heading,
  Spacer,
  Box, Text, Link, IconButton
} from "@chakra-ui/react";

import { StarIcon, DeleteIcon } from '@chakra-ui/icons'
import { IconName } from "react-icons/fa";

const TaskCard = ({id, status}) => {
  return (
    <>
    <Flex>
      <Box maxW='sm' p="8" my={'6'} borderColor='GrayText' boxShadow={'base'} borderRadius={'20'}>
        <Heading as='h5' size='sm'>Page Name</Heading>
        <Text py={'2'} fontSize='sm' textColor='GrayText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id laudantium quis qui natus</Text>
      <Flex>
        <Spacer></Spacer>
            <IconButton><StarIcon/></IconButton>
        <Text px={'2'}></Text>
            <IconButton><DeleteIcon/></IconButton>
        
      </Flex>
      </Box>
      
      </Flex>
      
    </>
  )
}

export default TaskCard;

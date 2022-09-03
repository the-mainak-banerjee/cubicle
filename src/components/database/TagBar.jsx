import { Box, Button, Flex, Icon, Text } from '@chakra-ui/react'
import React from 'react'
import { FaLongArrowAltRight, FaTag } from 'react-icons/fa'

const TagBar = ({ onCreateTagOpen, allTags }) => {
  return (
    <>
        <Flex align='center' gap='2' p='4'>
            <Icon as={FaTag} width='25px' height='25px'/>
            <Text fontWeight='bold' fontSize='lg'>All Tags</Text>
        </Flex>
        <Box px='4'>
          {allTags?.map(item => {
              return(
                <Flex key={item.id} py='2' cursor='pointer' _hover={{backgroundColor:'secondary', color:'white', paddingLeft:'2'}} alignItems='center' gap='2'>
                  <Icon as={FaLongArrowAltRight}/>
                  <Text>{item.name}</Text>
                </Flex>
              )
            })
          }
        </Box>
        <Box p='4'>
          <Button variant='outlined' onClick={onCreateTagOpen}>Create Tag</Button>
        </Box>
    </>
  )
}

export default TagBar

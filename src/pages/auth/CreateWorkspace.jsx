import React from 'react'
import { Textarea, Input,Stack,FormControl,useColorModeValue,Button, Box, Center, Heading,Text, Flex} from '@chakra-ui/react'


function CreateWorkspace() {
    
  

return (
<>
<Flex bg='ternary' minHeight='100vh' justifyContent="Center">
<Center p={20}>
        <Box boxShadow='md'  rounded={30} bg='white' p={20} border='1px' borderColor='gray.200' >
      <Stack>
          <Center>
        <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }} as='h3' size='xl' fontWeight={500} mb={'7%'}>
        Create Workspace
        </Heading></Center>
        
        <FormControl id="email">
          <Input
            placeholder="Workspace Name"
            _placeholder={{ color: 'gray.500' }}
            type="email"  mb={5}
          />
          <Textarea placeholder='Write Workspace Description here' mb={5}/>
        </FormControl>
        <Stack spacing={6}>
          <Button
            bg={'blue.400'}
            color={'white'}
            _hover={{
              bg: 'blue.500',
            }}>
            Create Workspace
          </Button>
        </Stack>
      </Stack>
      </Box>
  </Center>
  </Flex>
</>
)
}


export default CreateWorkspace

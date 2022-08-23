import React from 'react'
import { Textarea, Input,Stack,FormControl,useColorModeValue,Button, Box, Center, Heading,Text} from '@chakra-ui/react'


function CreateWorkspace() {
    
  

return (
<>

<Center p={20}>
        <Box boxShadow='sm'  rounded='md' bg='white' p={20} border='1px' borderColor='gray.200' mt={12}>
      <Stack>
          <center>
        <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }} as='h3' size='xl' fontWeight={500} mb={'7%'}>
        Create Workspace
        </Heading></center>
        
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

{/* <Center>
<Box boxShadow='sm'  rounded='md' bg='white' p={20} border='1px' borderColor='gray.200' mt={['15%', '10%']}>

<Stack spacing={3}><center>
<Heading as='h3' size='xl' fontWeight={500} mb={'7%'} fontSize={{ base: '2xl', md: '3xl' }} >
Workspace Name
</Heading></center>

<Textarea placeholder='Write Workspace Description here'/>
<Button colorScheme='blue' size='md'>
Create Workspace 
</Button>
</Stack>
</Box>
</Center> */}
</>
)
}


export default CreateWorkspace

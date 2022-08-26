import React from 'react'
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor, Button,ButtonGroup,Box, Stack, Input, Divider
  } from '@chakra-ui/react'

  function addContacts() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const initialFocusRef = React.useRef()
    return (
      <>

       {/* Add Contacts */}
        <Popover
      initialFocusRef={initialFocusRef}
      placement='bottom'
      closeOnBlur={false}
    >
      <PopoverTrigger>
        <Button>Add Contacts</Button>
      </PopoverTrigger>
      <PopoverContent color='white' bg='blue.800' borderColor='blue.800'>
        <PopoverHeader pt={4} fontWeight='medium' border='0'>
          Add Contact based on tags
        </PopoverHeader>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverBody>
          <Stack spacing={2}>
            {/* Tag Name */}
  <Input variant='outline' placeholder='Tag Name' />
  </Stack>
        </PopoverBody>
        <PopoverFooter
          border='0'
          display='flex'
          alignItems='center'
          justifyContent='space-between'
          pb={4}
        >
          {/* <Box fontSize='sm'>Step 2 of 4</Box> */}
          <ButtonGroup size='sm'>
            <Button colorScheme='green'>Create Tag</Button>
            <Button colorScheme='blue' ref={initialFocusRef}>
              Cancel
            </Button>
          </ButtonGroup>
        </PopoverFooter>
      </PopoverContent>
    </Popover>

<Divider></Divider>

{/* Import Contact */}


<Popover
    initialFocusRef={initialFocusRef}
    placement='bottom'
    closeOnBlur={false}
  >
    <PopoverTrigger>
      <Button>Import Contacts</Button>
    </PopoverTrigger>
    <PopoverContent color='white' bg='blue.800' borderColor='blue.800'>
      <PopoverHeader pt={4} fontWeight='medium' border='0'>
        Import Contacts
      </PopoverHeader>
      <PopoverArrow />
      <PopoverCloseButton />
      <PopoverFooter
        border='0'
        display='flex'
        alignItems='center'
        justifyContent='space-between'
        pb={4}
      >
        {/* <Box fontSize='sm'>Step 2 of 4</Box> */}
        <ButtonGroup size='sm'>
          <Button colorScheme='green'>Add a Single Contact</Button>
          <Button colorScheme='blue' ref={initialFocusRef}>
            Import a CSV
          </Button>
        </ButtonGroup>
      </PopoverFooter>
    </PopoverContent>
  </Popover>

    <Divider></Divider>

    {/* Add Single Contact */}


    <Popover
    initialFocusRef={initialFocusRef}
    placement='bottom'
    closeOnBlur={false}
  >
    <PopoverTrigger>
      <Button>Add single Contact</Button>
    </PopoverTrigger>
    <PopoverContent color='white' bg='blue.800' borderColor='blue.800'>
      <PopoverHeader pt={4} fontWeight='medium' border='0'>
        Add Single Contact
      </PopoverHeader>
      <PopoverArrow />
      <PopoverCloseButton />
      <PopoverBody>
        <Stack spacing={2}>
          {/* Tag Name */}
<Input variant='outline' placeholder='Username' />
<Input variant='outline' placeholder='Email' />
</Stack>
      </PopoverBody>
      <PopoverFooter
        border='0'
        display='flex'
        alignItems='center'
        justifyContent='space-between'
        pb={4}
      >
        {/* <Box fontSize='sm'>Step 2 of 4</Box> */}
        <ButtonGroup size='sm'>
          <Button colorScheme='green'>Save</Button>
          <Button colorScheme='blue' ref={initialFocusRef}>
            Cancel
          </Button>
        </ButtonGroup>
      </PopoverFooter>
    </PopoverContent>
  </Popover>


  <Divider></Divider>

    {/* Upload List */}


    <Popover
    initialFocusRef={initialFocusRef}
    placement='bottom'
    closeOnBlur={false}
  >
    <PopoverTrigger>
      <Button>Upload List</Button>
    </PopoverTrigger>
    <PopoverContent color='white' bg='blue.800' borderColor='blue.800'>
      <PopoverHeader pt={4} fontWeight='medium' border='0'>
        Upload Contact with these tags
      </PopoverHeader>
      <PopoverArrow />
      <PopoverCloseButton />
      <PopoverBody>
        <Stack spacing={2}>
          {/* Tag Name */}
<Input variant='outline' placeholder='Enter Tag' />
<Input variant='outline' type={'file'} ACCEPT=".doc,.docx,.pdf" placeholder='Add File' />

</Stack>
      </PopoverBody>
      <PopoverFooter
        border='0'
        display='flex'
        alignItems='center'
        justifyContent='space-between'
        pb={4}
      >
        {/* <Box fontSize='sm'>Step 2 of 4</Box> */}
        <ButtonGroup size='sm'>
          <Button colorScheme='green'>Import Contacts</Button>
          <Button colorScheme='blue' ref={initialFocusRef}>
            Cancel
          </Button>
        </ButtonGroup>
      </PopoverFooter>
    </PopoverContent>
  </Popover>


      </>
    )
  }


export default addContacts
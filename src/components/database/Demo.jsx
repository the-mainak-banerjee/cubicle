import { Button, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import PopUp from '../ui/popup/PopUp'

const Demo = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button onClick={onOpen}>Open Popup</Button>
      <PopUp isOpen={isOpen} onClose={onClose}>
        <Text>Popup content goes here</Text>
      </PopUp>
    </>
  )
}

export default Demo

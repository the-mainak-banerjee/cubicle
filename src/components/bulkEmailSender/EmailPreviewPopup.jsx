import { Text } from '@chakra-ui/react'
import React from 'react'
import PopUp from '../ui/popup/PopUp'

const EmailPreviewPopup = ({isOpen, onClose}) => {
  return (
    <PopUp isOpen={isOpen} onClose={onClose} modalTitle={'Email Preview'}>
        <Text>Popup content goes here</Text>
    </PopUp>
  )
}

export default EmailPreviewPopup

import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from '@chakra-ui/react'
import React from 'react'

const PopUp = ({children, isOpen, onClose, modalTitle}) => {
  return (
    <Modal closeOnOverlayClick={false} blockScrollOnMount={false} scrollBehavior='inside' motionPreset='slideInRight' isOpen={isOpen} onClose={onClose} size='xl'>
        <ModalOverlay />
        <ModalContent>
            <ModalHeader>{modalTitle}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <>
                    {children}
                </>
            </ModalBody>
        </ModalContent>
    </Modal>
  )
}

export default PopUp

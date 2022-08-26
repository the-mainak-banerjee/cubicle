import { useDisclosure } from '@chakra-ui/react'
import React from 'react'
import EmailPreviewPopup from '../../components/bulkEmailSender/EmailPreviewPopup'
import EmailSenderFooter from '../../components/bulkEmailSender/EmailSenderFooter'
import EmailSenderHeaderAction from '../../components/bulkEmailSender/EmailSenderHeaderAction'
import Skeleton from '../../components/ui/skeleton/Skeleton'

const SentEmail = () => {

  const { isOpen, onOpen, onClose } = useDisclosure()


  return (
    <>
    <Skeleton
      isBack={true}
      title='Email Name'
      rightContent={
        <>
          <EmailSenderHeaderAction
            onOpen={onOpen}
          />
        </>
      }
    >
      <EmailPreviewPopup
        isOpen={isOpen} 
        onClose={onClose}
       />
    </Skeleton>
    <EmailSenderFooter
      showStatus = {false}
    />
  </>
  )
}

export default SentEmail

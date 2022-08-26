import React from 'react'
import Skeleton from '../../components/ui/skeleton/Skeleton'
import EmailSenderFooter from '../../components/bulkEmailSender/EmailSenderFooter'
import { useNavigate, useParams } from 'react-router-dom'
import EmailSenderHeaderAction from '../../components/bulkEmailSender/EmailSenderHeaderAction'
import { Box, useDisclosure } from '@chakra-ui/react'
import EmailEditor from '../../components/bulkEmailSender/EmailEditor'
import EmailPreviewPopup from '../../components/bulkEmailSender/EmailPreviewPopup'

const CreateEmail = () => {

  const params = useParams()
  const navigate = useNavigate()
  const { isOpen, onOpen, onClose } = useDisclosure()


  const handleContinueButtonAction = () => {
    navigate(`/emails/${params.emailId}/send`)
  }

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
        <Box pb='32'>
          <EmailEditor/>
        </Box>
        
       <EmailPreviewPopup
        isOpen={isOpen} 
        onClose={onClose}
       />
      </Skeleton>
        <EmailSenderFooter
          buttonAction={handleContinueButtonAction}
          showStatus = {true}
        />
    </>
  )
}

export default CreateEmail

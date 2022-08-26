import React from 'react'
import Skeleton from '../../components/ui/skeleton/Skeleton'
import EmailSenderFooter from '../../components/bulkEmailSender/EmailSenderFooter'
import { useNavigate, useParams } from 'react-router-dom'
import EmailSenderHeaderAction from '../../components/bulkEmailSender/EmailSenderHeaderAction'
import { Box } from '@chakra-ui/react'
import EmailEditor from '../../components/bulkEmailSender/EmailEditor'

const CreateEmail = () => {

  const params = useParams()
  const navigate = useNavigate()

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
            <EmailSenderHeaderAction/>
          </>
        }
      >
        <Box pb='32'>
          <EmailEditor/>
        </Box>

      </Skeleton>
        <EmailSenderFooter
          buttonAction={handleContinueButtonAction}
          showStatus = {true}
        />
    </>
  )
}

export default CreateEmail

import { Text } from '@chakra-ui/react'
import React from 'react'
import EmailSenderFooter from '../../components/bulkEmailSender/EmailSenderFooter'
import EmailSenderHeaderAction from '../../components/bulkEmailSender/EmailSenderHeaderAction'
import Skeleton from '../../components/ui/skeleton/Skeleton'

const SentEmail = () => {
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
      <Text>Add Your Code Here</Text>
    </Skeleton>
    <EmailSenderFooter
      showStatus = {false}
    />
  </>
  )
}

export default SentEmail

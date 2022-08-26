import { Text } from '@chakra-ui/react'
import React from 'react'
import { FaEnvelope } from 'react-icons/fa'
import { useParams, useSearchParams } from 'react-router-dom'
import EmailContent from '../../components/bulkEmailSender/EmailContent'
import EmailEngagement from '../../components/bulkEmailSender/EmailEngagement'
import Skeleton from '../../components/ui/skeleton/Skeleton'
import SubNavBar from '../../components/ui/subNavBar/SubNavBar'
import { email } from '../../utils/DummyData'

const linkItems = [
  {name: 'Content', icon: FaEnvelope, search: '?status=content'},
  {name: 'Recipients', icon: FaEnvelope, search: '?status=recipients'},
  {name: 'Engagement', icon: FaEnvelope, search: '?status=engagement'},
]

const EmailDetails = () => {
  const params = useParams()
  const [searchParams] = useSearchParams()


  return (
    <>
      <Skeleton
        isBack={true}
        title='Email Name'
        isSearch={false}
        buttonText='Duplicate Email'
      >

        <SubNavBar
          linkItems={linkItems}
          rightAction={false}
          target={`emails/${params.emailId}/view`}
        />

        {
          (searchParams.get('status') === 'content' || searchParams.get('status') === null) &&
          <EmailContent
            email={email.find(item => item.id === params.emailId)}
          />
        }

        {
          searchParams.get('status') === 'recipients' &&
          <Text> Contact Card From Database Goes Here </Text>
        }

        {
          searchParams.get('status') === 'engagement' &&
          <EmailEngagement
            email={email.find(item => item.id === params.emailId)}
          />
        }
        
      </Skeleton>
    </>
  )
}

export default EmailDetails

import { Flex } from '@chakra-ui/react'
import React from 'react'
import Skeleton from '../../components/ui/skeleton/Skeleton'
import SubNavBar from '../../components/ui/subNavBar/SubNavBar'
import { FaEnvelope } from 'react-icons/fa'
import { email } from '../../utils/DummyData'
import EmailCardSmall from '../../components/bulkEmailSender/EmailCardSmall'
import { useSearchParams } from 'react-router-dom'

const linkItems = [
  {name: 'All', icon: FaEnvelope, search: '?status=all'},
  {name: 'Draft', icon: FaEnvelope, search: '?status=draft'},
  {name: 'Sent', icon: FaEnvelope, search: '?status=sent'},
]

const EmailSender = () => {

  const [searchParams] = useSearchParams()

  return (
    <>
      <Skeleton
        isBack={false}
        title='Email Management'
        isSearch={true}
        buttonText='New Email'
      >
        <SubNavBar
          linkItems={linkItems}
          rightAction={true}
          target={'emails'}
        />
        <Flex flexDirection='column'>
          {
            (searchParams.get('status') === null || searchParams.get('status') === 'all') && <>
                {
                  email.map(item => {
                    return (
                      <EmailCardSmall
                        key={item.id}
                        id={item.id}
                        subjectLine={item.subjectLine}
                        status={item.status}
                        publishedDate={item.publishedDate}
                        engagement={item.engagement}
                      />
                    )
                  })
                }
            </>
          }
          {
            searchParams.get('status') === 'draft' && <>
                {
                  email.filter(emailItem => emailItem.status === 'draft').map(item => {
                    return (
                      <EmailCardSmall
                        key={item.id}
                        id={item.id}
                        subjectLine={item.subjectLine}
                        status={item.status}
                        publishedDate={item.publishedDate}
                        engagement={item.engagement}
                      />
                    )
                  })
                }
            </>
          }
          {
            searchParams.get('status') === 'sent' && <>
                {
                  email.filter(emailItem => emailItem.status === 'sent').map(item => {
                    return (
                      <EmailCardSmall
                        key={item.id}
                        id={item.id}
                        subjectLine={item.subjectLine}
                        status={item.status}
                        publishedDate={item.publishedDate}
                        engagement={item.engagement}
                      />
                    )
                  })
                }
            </>
          }

        </Flex>
      </Skeleton>
    </>
  )
}

export default EmailSender

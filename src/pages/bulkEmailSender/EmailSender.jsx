import { Text } from '@chakra-ui/react'
import React from 'react'
import Skeleton from '../../components/ui/skeleton/Skeleton'
import SubNavBar from '../../components/ui/subNavBar/SubNavBar'
import { FaEnvelope } from 'react-icons/fa'

const linkItems = [
  {name: 'All', icon: FaEnvelope, target: 'emails', search: '?status=all'},
  {name: 'Draft', icon: FaEnvelope, target: 'emails', search: '?status=draft'},
  {name: 'Sent', icon: FaEnvelope, target: 'emails', search: '?status=sent'},
]

const EmailSender = () => {
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
        />
      </Skeleton>
    </>
  )
}

export default EmailSender

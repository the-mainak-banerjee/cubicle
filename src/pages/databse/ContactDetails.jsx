import { Text } from '@chakra-ui/react'
import React from 'react'
import Demo from '../../components/database/Demo'
import IndividualContactDetail from '../../components/database/IndividualContactDetail'
import Skeleton from '../../components/ui/skeleton/Skeleton'
const ContactDetails = () => {
  return (
    <>
      <Skeleton
         isBack={false}
         title='Database'
         isSearch={true}
         buttonText='Add Contact'
      >

        <IndividualContactDetail></IndividualContactDetail>
      </Skeleton>
    </>
  )
}

export default ContactDetails

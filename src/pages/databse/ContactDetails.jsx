import React from 'react'
import Skeleton from '../../components/ui/skeleton/Skeleton'
import IndividualContactDetail from '../../components/database/IndividualContactDetail'
const ContactDetails = () => {
  return (
    <>
      <Skeleton
         isBack={false}
         title='Database'
         isSearch={true}
         buttonText='Add Contact'
      >
      <IndividualContactDetail/>
      </Skeleton>
    </>
  )
}

export default ContactDetails
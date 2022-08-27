import React from 'react'
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

      </Skeleton>
    </>
  )
}

export default ContactDetails
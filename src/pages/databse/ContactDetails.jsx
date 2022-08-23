import React from 'react'
import BodyWrapper from '../../components/ui/bodyWrapper/BodyWrapper'
import NavBar from '../../components/ui/navBar/NavBar'

const ContactDetails = () => {
  return (
    <>
      <NavBar
         isBack={true}
         title='Contact Name'
         isSearch={false}
      />
      <BodyWrapper>
        Add Your Code Here
      </BodyWrapper>
    </>
  )
}

export default ContactDetails

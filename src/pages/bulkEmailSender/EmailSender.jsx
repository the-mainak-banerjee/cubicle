import React from 'react'
import BodyWrapper from '../../components/ui/bodyWrapper/BodyWrapper'
import NavBar from '../../components/ui/navBar/NavBar'

const EmailSender = () => {
  return (
    <>
      <NavBar
        isBack={false}
        title='Email Management'
        isSearch={true}
        buttonText='New Email'
      />
      <BodyWrapper>
        Add Your Code Here
      </BodyWrapper>
    </>
  )
}

export default EmailSender

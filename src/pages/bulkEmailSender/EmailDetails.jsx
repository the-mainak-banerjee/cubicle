import React from 'react'
import BodyWrapper from '../../components/ui/bodyWrapper/BodyWrapper'
import NavBar from '../../components/ui/navBar/NavBar'

const EmailDetails = () => {
  return (
    <>
    <NavBar
      isBack={true}
      title='Email Name'
      isSearch={false}
      buttonText='Duplicate Email'
    />
    <BodyWrapper>
        Add Your Code Here
    </BodyWrapper>
  </>
  )
}

export default EmailDetails

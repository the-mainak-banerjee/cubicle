import React from 'react'
import BodyWrapper from '../../components/ui/bodyWrapper/BodyWrapper'
import NavBar from '../../components/ui/navBar/NavBar'

const CertificateGenerator = () => {
  return (
    <>
      <NavBar
        isBack={false}
        title='Certificate Generator'
        isSearch={true}
        buttonText='Create New'
      />
      <BodyWrapper>
        Add Your Code Here
      </BodyWrapper>
    </>
  )
}

export default CertificateGenerator

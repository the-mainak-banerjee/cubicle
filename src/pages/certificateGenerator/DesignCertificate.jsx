import React from 'react'
import BodyWrapper from '../../components/ui/bodyWrapper/BodyWrapper'
import NavBar from '../../components/ui/navBar/NavBar'

const DesignCertificate = () => {
  return (
    <>
      <NavBar
        isBack={true}
        title='Create Certificate'
        isSearch={false}
      />
      <BodyWrapper>
        Add Your Code Here
      </BodyWrapper>
    </>
  )
}

export default DesignCertificate

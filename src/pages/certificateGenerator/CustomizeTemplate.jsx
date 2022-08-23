import React from 'react'
import BodyWrapper from '../../components/ui/bodyWrapper/BodyWrapper'
import NavBar from '../../components/ui/navBar/NavBar'

const CustomizeTemplate = () => {
  return (
    <>
      <NavBar
        isBack={true}
        title='Certificate Generator'
        isSearch={false}
        buttonText='Save'
      />
      <BodyWrapper>
        Add Your Code Here
      </BodyWrapper>
    </>
  )
}

export default CustomizeTemplate

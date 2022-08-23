import React from 'react'
import BodyWrapper from '../../../components/ui/bodyWrapper/BodyWrapper'
import NavBar from '../../../components/ui/navBar/NavBar'

const UserSettings = () => {
  return (
    <>
      <NavBar
         isBack={false}
         title='Account Settings'
         isSearch={false}
      />
      <BodyWrapper>I am body</BodyWrapper>
    </>
  )
}

export default UserSettings

import React from 'react'
import BodyWrapper from '../../components/ui/bodyWrapper/BodyWrapper'
import NavBar from '../../components/ui/navBar/NavBar'

const Database = () => {
  return (
    <>
      <NavBar
         isBack={false}
         title='Database'
         isSearch={true}
         buttonText='Add Contact'
      />
      <BodyWrapper>
        Add Your Code Here
      </BodyWrapper>
    </>
  )
}

export default Database

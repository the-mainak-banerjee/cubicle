import React from 'react'
import BodyWrapper from '../../../components/ui/bodyWrapper/BodyWrapper'
import NavBar from '../../../components/ui/navBar/NavBar'

const WorkspaceSettings = () => {
  return (
    <>
      <NavBar
        isBack={false}
        title='Workspace Settings'
        isSearch={false}
      />
      <BodyWrapper>
        Add Your Code Here
      </BodyWrapper>
    </>
  )
}

export default WorkspaceSettings

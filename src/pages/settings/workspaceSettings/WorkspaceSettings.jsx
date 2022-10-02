import { Text } from '@chakra-ui/react'
import React from 'react'
import Skeleton from '../../../components/ui/skeleton/Skeleton'
import TopBar from '../../../components/settings/WorkspaceSettings/TopBar'
import GeneralSettings from '../../../components/settings/WorkspaceSettings/GeneralSettings'
import EmailSettings from '../../../components/settings/WorkspaceSettings/EmailSettings'
import MailingAddress from '../../../components/settings/WorkspaceSettings/MailingAddress'

const WorkspaceSettings = () => {
  return (
    <>
      <Skeleton
        isBack={false}
        title='Workspace Settings'
        isSearch={false}
      >
        {/* <Text>Add Your Code Here</Text> */}
        <TopBar></TopBar>
        <GeneralSettings></GeneralSettings>
        <EmailSettings></EmailSettings>
        <MailingAddress></MailingAddress>
     </Skeleton>
    </>
  )
}

export default WorkspaceSettings

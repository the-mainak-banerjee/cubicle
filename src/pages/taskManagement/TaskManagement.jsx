import { Text } from '@chakra-ui/react'
import React from 'react'
import Skeleton from '../../components/ui/skeleton/Skeleton'


const TaskManagement = () => {
  return (
    <>
      <Skeleton
        isBack={false}
        title='Workspace Settings'
        isSearch={false}
      >
        <Text>Add Your Code Here</Text>
     </Skeleton>
    </>
  )
}

export default TaskManagement

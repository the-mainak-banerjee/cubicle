import React from 'react'
import { FaEnvelope } from 'react-icons/fa'
import { useParams } from 'react-router-dom'
import Skeleton from '../../components/ui/skeleton/Skeleton'
import SubNavBar from '../../components/ui/subNavBar/SubNavBar'

const linkItems = [
  {name: 'Content', icon: FaEnvelope, search: '?status=content'},
  {name: 'Recipients', icon: FaEnvelope, search: '?status=recipients'},
  {name: 'Engagement', icon: FaEnvelope, search: '?status=engagement'},
]

const EmailDetails = () => {
  const params = useParams()


  return (
    <>
      <Skeleton
        isBack={true}
        title='Email Name'
        isSearch={false}
        buttonText='Duplicate Email'
      >

        <SubNavBar
          linkItems={linkItems}
          rightAction={false}
          target={`emails/${params.emailId}/view`}
        />



      </Skeleton>
    </>
  )
}

export default EmailDetails

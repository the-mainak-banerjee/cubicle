import React, { useEffect } from 'react'
import Skeleton from '../../components/ui/skeleton/Skeleton'
import IndividualContactDetail from '../../components/database/IndividualContactDetail'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { selectAllTags, selectIndividualContact, setIndividualContact } from '../../features/database/contactsSlice'
import DeleteContact from '../../components/database/popUps/DeleteContact'
import { useDisclosure } from '@chakra-ui/react'
import { selectUserDetails } from '../../features/user/userSlice'
import { doc, onSnapshot } from 'firebase/firestore'
import { db } from '../../backend/Firebase'
import formatDate from '../../utils/FormatData'
import EditContact from '../../components/database/popUps/EditContact'


const ContactDetails = () => {

  const params = useParams()
  const contactDetails = useSelector(selectIndividualContact)
  const allTags = useSelector(selectAllTags)
  const currentUserDetails = useSelector(selectUserDetails)
  const dispatch = useDispatch()
  const { isOpen: isEditContactOpen, onOpen: onEditContactOpen, onClose : onEditContactClose } = useDisclosure();
  const { isOpen: isDeleteContactOpen, onOpen: onDeleteContactOpen, onClose : onDeleteContactClose } = useDisclosure();

  useEffect(() => {
    if(currentUserDetails?.workspaceId){
      let unsubscribe = onSnapshot(doc(db,'workspaces', `${currentUserDetails.workspaceId}`, 'contacts', `${params.contactId}`),(doc) => {
        console.log()
        dispatch(setIndividualContact({
          ...doc.data(),
          createdAt: formatDate(doc.data().createdAt)
        }))
      })
      return () => {
        unsubscribe && unsubscribe();
      };
    }
  },[currentUserDetails,params,dispatch])

  return (
    <>
      <Skeleton
         isBack={true}
         title={`${contactDetails?.fullName}` || 'Database'}
         isSearch={false}
      >
        <IndividualContactDetail
          contactDetails={contactDetails}
          onEditContactOpen={onEditContactOpen}
          onDeleteContactOpen={onDeleteContactOpen}
          allTags={allTags}
          currentUserDetails={currentUserDetails}
        />
        <EditContact
          isEditContactOpen={isEditContactOpen}
          onEditContactClose={onEditContactClose}
          contactDetails={contactDetails}
          currentUserDetails={currentUserDetails}
        />
        <DeleteContact
          isDeleteContactOpen={isDeleteContactOpen}
          onDeleteContactClose={onDeleteContactClose}
          contactDetails={contactDetails}
        />
      </Skeleton>
    </>
  )
}

export default ContactDetails
import { Text, Button , Stack } from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from "react-router-dom";
import Skeleton from '../../components/ui/skeleton/Skeleton';



const CertificateGenerator = () => {

const navigate = useNavigate()  ;
const redirectToDesign = () => {
  navigate('/certificate/templates');
};

  return (
    <>
      <Skeleton
        isBack={false}
        title='Certificate Generator'
        isSearch={true}
        buttonText='Create Design'
      >
     
       <Stack 
          display="flex"
          alignItems="center"
          justifycontents="center"
          mt="135px"
          align='stretch'
          

          > 
       <Text 
       mb={2}
       >
        You Haven't Created Certificate Design yet  </Text>
        <Button onClick={redirectToDesign}variant="main" size={{base:'sm', md:'md'}} paddingX={{base:'2', md:'8'}} >
         Create Design
         </Button>
      
        </Stack>
       
      </Skeleton>
    </>
  );
};

export default CertificateGenerator;

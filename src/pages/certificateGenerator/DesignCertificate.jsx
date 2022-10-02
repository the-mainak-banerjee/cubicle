import { Text, Box, Wrap, WrapItem } from '@chakra-ui/react';
import React from 'react';
import Skeleton from '../../components/ui/skeleton/Skeleton'

const DesignCertificate = () => {
  return (
    <>
      <Skeleton
        isBack={true}
        title='Create Certificate'
        isSearch={true}
        buttonText='Create Design'
      >



        <Wrap spacing="70px" m="auto" justify="center" justifycontents="center" >
          <WrapItem  >
            <Box bg="#eeeee4">
              <img src="https://i.pinimg.com/originals/54/04/c9/5404c9e991a6b8e56db353c4d223f07e.jpg" alt="template" height="200px" width="300px" />
              <Text mt={4} mb={5} ml={4} >My Design #1</Text>
            </Box>
          </WrapItem>

          <WrapItem>

            <Box bg="#eeeee4">
              <img src="https://i.pinimg.com/originals/54/04/c9/5404c9e991a6b8e56db353c4d223f07e.jpg" alt="tamplate" height="200px" width="300px" />
              <Text mt={4} mb={5} ml={4}>My Design #2</Text>
            </Box>
          </WrapItem>


        </Wrap>


      </Skeleton>
    </>
  )
};

export default DesignCertificate;

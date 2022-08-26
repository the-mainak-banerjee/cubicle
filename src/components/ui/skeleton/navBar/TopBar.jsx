import { Box, Button, Flex, Heading, Icon, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import React, { useState } from 'react'
import { FaArrowLeft, FaBars, FaSearch, FaTimes } from 'react-icons/fa'

const TopBar = ({isBack, title, rightContent, isSearch, buttonText, onOpen}) => {

    const [showSearchBox,setShowSearchBox] = useState(false)


  return (
    <Box p={{base:'6', md:'6'}} ml={{base:'0', md:'20vw'}} bg='primary' color='white' position='fixed' width={{base:'full', md:'80vw'}} minH='88px' zIndex='10'>
        <Flex alignItems='center' justifyContent='space-between'>
            <Flex alignItems='center' gap='4'>
                <Icon 
                    fontSize="16"
                    _groupHover={{
                        color: 'white',
                    }}
                    as={FaBars}
                    cursor='pointer'
                    display={{base:'block', md:'none'}}
                    onClick={onOpen}
                />

                {isBack && <Icon
                        fontSize="16"
                        _groupHover={{
                            color: 'white',
                        }}
                        as={FaArrowLeft}
                        cursor='pointer'
                />}

                <Heading as='h2' fontSize="lg" fontWeight="medium">
                    {title}
                </Heading>
            </Flex>

            <Flex gap='2' alignItems='center'>
                {rightContent 
                    ? (
                        <>
                            {rightContent}
                        </>
                    ) : (
                        <>
                            {isSearch && <InputGroup display={{base:'none', md:'block'}}>
                                <InputLeftElement pointerEvents='none' children={<FaSearch/>} color='ternary'/>
                                <Input type='text' placeholder='Search'/>
                            </InputGroup>
                            }

                            {isSearch && <Icon display={{base:'block', md:'none'}} fontSize="20" mr='1'  as={showSearchBox ? FaTimes : FaSearch} cursor='pointer' onClick={() => setShowSearchBox(prevState => !prevState)}/>}

                            {buttonText && <Button variant='main' size={{base:'sm', md:'md'}} paddingX={{base:'2', md:'10'}}>{buttonText}</Button>}
                        </>
                    )
                }
            </Flex>
        </Flex>

        {showSearchBox && <InputGroup display={{base:'block', md:'none'}} mt='4'>
            <InputLeftElement pointerEvents='none' children={<FaSearch/>} color='ternary'/>
            <Input autoFocus={true} type='text' placeholder='Search'/>
        </InputGroup>}
    </Box>
  )
}

export default TopBar

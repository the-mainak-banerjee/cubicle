import React from 'react'
import Skeleton from '../../../components/ui/skeleton/Skeleton'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Heading,
  Input,
  Text,
  Checkbox,
  NumberInput,
  InputLeftAddon,
  InputGroup,
  InputRightAddon,
  Stack,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Radio,
  RadioGroup,
  HStack,
  Button,
  InputRightElement,
} from "@chakra-ui/react";
const UserSettings = () => {
  const [value, setValue] = React.useState('female')
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
    <>
      <Skeleton
         isBack={false}
         title='Account Settings'
         isSearch={false}
      >
        <TableContainer>
      <Heading my={"8"} size="lg">
        Profile Settings
      </Heading>
      <Table size="sm" variant="none">
        <Tbody>
          <Tr>
            <Th>Full Name</Th>
            <Td>
              <Input
                borderWidth={0.5}
                // width={"15rem"}
                borderColor="gray.300"
                // px={8}
                py={2}
                placeholder=" Swati Goel"
              />
            </Td>
          </Tr>
          <Tr>
            <Th>Username</Th>
            <Td>
              <Input
                borderWidth={0.5}
                // width={"15rem"}
                borderColor="gray.300"
                // px={8}
                py={2}
                placeholder=" swatigoel"
              />
            </Td>
          </Tr>
          <Tr>
            <Th>Email Address</Th>
            <Td>
              <Input
                borderWidth={0.5}
                // width={"15rem"}
                borderColor="gray.300"
                // px={8}
                py={2}
                placeholder=" swatigoel37@gmail.com"
              />
            </Td>
          </Tr>
          <Tr>
            <Th>Change Email Address</Th>
            <Td>
              <InputGroup size="md">
                <Input
                  // pr='4.5rem'
                  placeholder="Change Email Address"
                />
                <InputRightElement width="7.5rem">
                  <Button h="1.75rem" size="sm">
                    Confirm Email
                  </Button>
                </InputRightElement>
              </InputGroup>
            </Td>
            
          </Tr>
          <Tr>
            <Th>Phone Number</Th>
            <Td>
              <InputGroup>
                <InputLeftAddon children="+91" />
                <Input type="tel" placeholder="phone number" />
              </InputGroup>
            </Td>
          </Tr>
          <Tr>
            <Th>Gender</Th>
            <Td>
            <RadioGroup onChange={setValue} value={value}>
      <Stack direction='row'>
        <Radio value='male'>Male</Radio>
        <Radio value='female'>Female</Radio>
        <Radio value='other'>Other</Radio>
      </Stack>
    </RadioGroup>
            </Td>
          </Tr>
          <Tr>
            <Th>Change Password</Th>
            <Td>
              <InputGroup size="md">
                <Input
                  // pr='4.5rem'
                  type={show ? "text" : "password"}
                  placeholder="Change password"
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </Td>
          </Tr>

          <Tr>
            <Th>Confirm password</Th>
            <Td>
              <InputGroup size="md">
                <Input
                  // pr='4.5rem'
                  type={show ? "text" : "password"}
                  placeholder="Confirm password"
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </Td>
          </Tr>
          <Tr>
            <Td>
              <Button
                borderRadius="md"
                borderWidth={0.5}
                width={"15rem"}variant='main'
                px={6}
                py={3}
              >
                Delete Account
              </Button>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
      </Skeleton>
    </>
  )
}

export default UserSettings

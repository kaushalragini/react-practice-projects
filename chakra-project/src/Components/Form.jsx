import React from 'react'
import { Box, Input, Stack, Button, Heading, HStack, PinInput, PinInputField, Text, Container } from "@chakra-ui/react"
import { useState } from 'react'
import { Select, MenuItem, Menu, MenuButton, MenuList } from '@chakra-ui/react'
import { ChevronDownIcon, PhoneIcon, AddIcon, WarningIcon } from "@chakra-ui/icons"
const Form = () => {
    const [loading, setLoading] = useState(false)
    const [otp, setOtp] = useState("")
    const [country, setCountry] = useState("")
    return (
        <div>
            <Container size="2xl">
                <Box m={5}>

                    <Heading as="h2" color="red.600">Login</Heading>
                    <Stack spacing="1rem">
                        <Box>
                            <Input size="lg" placeholder='Email' type="email" />
                        </Box>
                        <Box>
                            <Input />
                        </Box>
                        <Box>
                            <Button
                                isLoading={loading}
                                colorScheme="red"
                                variant="outline"
                                onClick={
                                    () => {
                                        setLoading(true);
                                        setTimeout(() => {
                                            setLoading(false)
                                        }, 1000)
                                    }
                                }
                            >Login</Button>
                        </Box>
                        <HStack>
                            <PinInput otp
                                value={otp}
                                onChange={(val) => setOtp(val)}
                                mask={true}
                            >
                                <PinInputField />
                                <PinInputField />
                                <PinInputField />
                                <PinInputField />
                            </PinInput>
                        </HStack>
                    </Stack>
                    <Text>{otp}</Text>
                </Box>
                <Box>
                    <Select
                        placeholder='Select Country'
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}

                    >
                        <option value='india'>India</option>
                        <option value='china'>China 2</option>
                        <option value='nepal'>Nepal 3</option>
                    </Select>
                    <Text>{country}</Text>

                </Box>
                <Box>
                    <Menu>
                        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                            Actions
                        </MenuButton>
                        <MenuList>
                            <MenuItem>Download</MenuItem>
                            <MenuItem>Create a Copy</MenuItem>
                            <MenuItem>Mark as Draft</MenuItem>
                            <MenuItem>Delete</MenuItem>
                            <MenuItem>Attend a Workshop</MenuItem>
                        </MenuList>
                    </Menu>

                </Box>
            </Container>
        </div>
    )
}

export default Form

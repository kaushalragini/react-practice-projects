import React from 'react'
import { HStack, PinInput, PinInputField, IconButton, } from '@chakra-ui/react'
import { SearchIcon } from "@chakra-ui/icons"
const Example2 = () => {
    return (
        <div>
            <HStack>
                <PinInput>
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                </PinInput>
            </HStack>

            <IconButton aria-label='Search database' icon={<SearchIcon />} />
        </div>
    )
}

export default Example2

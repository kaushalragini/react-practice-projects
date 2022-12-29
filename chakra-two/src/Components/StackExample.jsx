import React from 'react'
import { Box, HStack, VStack, StackDivider } from "@chakra-ui/react"
const StackExample = () => {
    return (
        <div>
            <HStack spacing='24px'>
                <Box w='40px' h='40px' bg='yellow.200'>
                    1
                </Box>
                <Box w='40px' h='40px' bg='tomato'>
                    2
                </Box>
                <Box w='40px' h='40px' bg='pink.100'>
                    3
                </Box>
            </HStack>



            <VStack
                divider={<StackDivider borderColor='gray.200' />}
                spacing={4}
                align='stretch'
            >
                <Box h='40px' bg='yellow.200'>
                    1
                </Box>
                <Box h='40px' bg='tomato'>
                    2
                </Box>
                <Box h='40px' bg='pink.100'>
                    3
                </Box>
            </VStack>
            
        </div>
    )
}

export default StackExample

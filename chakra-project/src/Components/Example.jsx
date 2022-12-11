import React from 'react'
import { Heading, Text, Box, Button } from '@chakra-ui/react'
const Example = () => {
    return (
        <div margin="auto">
            <Box maxW="32rem" color="red" textAlign="center">
                <Heading mb={4}>
                    Modern online and offline payments for Africa
                </Heading>
                <Text fontSize="2xl" color="green.500">
                    Paystack helps businesses in Africa get paid by anyone, anywhere in
                    the world
                </Text>
                <Button size="lg" colorScheme="red" mt="24px" margin="auto">
                    Create a free account
                </Button>
            </Box>
            <br />
            <Box bg="tomato" w="70%" p={6} color="white" margin="auto">
                This is the Box
            </Box>
        </div>
    )
}

export default Example

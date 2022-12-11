import React from 'react'
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    Stack
} from '@chakra-ui/react'
const AlertDialogExample = () => {
    return (
        <div>
            <Alert status='error'>
                <AlertIcon />
                <AlertTitle>Your browser is outdated!</AlertTitle>
                <AlertDescription>Your Chakra experience may be degraded.</AlertDescription>
            </Alert>
            <Stack spacing={3}>
                <Alert status='error'>
                    <AlertIcon />
                    There was an error processing your request
                </Alert>

                <Alert status='success'>
                    <AlertIcon />
                    Data uploaded to the server. Fire on!
                </Alert>

                <Alert status='warning'>
                    <AlertIcon />
                    Seems your account is about expire, upgrade now
                </Alert>

                <Alert status='info'>
                    <AlertIcon />
                    Chakra is going live on August 30th. Get ready!
                </Alert>
            </Stack>
            <Alert
                status='success'
                variant='subtle'
                flexDirection='column'
                alignItems='center'
                justifyContent='center'
                textAlign='center'
                height='200px'
            >
                <AlertIcon boxSize='40px' mr={0} />
                <AlertTitle mt={4} mb={1} fontSize='lg'>
                    Application submitted!
                </AlertTitle>
                <AlertDescription maxWidth='sm'>
                    Thanks for submitting your application. Our team will get back to you soon.
                </AlertDescription>
            </Alert>
        </div>
    )
}

export default AlertDialogExample

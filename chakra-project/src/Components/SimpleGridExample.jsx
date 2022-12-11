import React from 'react'
import { SimpleGrid, Box } from '@chakra-ui/react'
const SimpleGridExample = () => {
    return (

        <SimpleGrid columns={10} spacing={10}>
            <Box bg='blue' height='80px'>helllo</Box>
            <Box bg='red' height='80px'></Box>
            <Box bg='yellow' height='80px'></Box>
            <Box bg='pink' height='80px'></Box>
            <Box bg='brown' height='80px'></Box>
            <Box bg='grey' height='80px'></Box>
            <Box bg='black' height='80px'></Box>
            <Box bg='teal' height='80px'></Box>
            <Box bg=' pink' height='80px'></Box>
            <Box bg='tomato' height='80px'></Box>
            <Box bg='tomato' height='80px'></Box>
            <Box bg='tomato' height='80px'></Box>
            <Box bg='tomato' height='80px'></Box>
        </SimpleGrid>

    )
}

export default SimpleGridExample

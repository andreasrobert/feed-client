import { Flex, Heading, Text } from "@chakra-ui/react";


export default function TopBar(){


    return(
        <>
        <Flex bg="#373F68" h="72px" w="100%" p="14px" borderRadius="10px" mb="14px" justifyContent="space-between" alignItems="center">
            <Flex alignItems="center">
                <Heading size="H3" color="white" mr="40px">6 Suggestions</Heading>
                    <Text color="white" mr="6px" mb="-4px">Sort by :</Text>
                    <Heading size="H4" mb="-5.5px">Most Upvotes</Heading>
            </Flex>
            <Flex w="158px" h="100%" bg="#AD1FEA" borderRadius="9px" justifyContent="center" alignItems="center">
                <Heading size="H4">+ Add Feedback</Heading>
            </Flex>
        </Flex>

        
        </>
    )
}
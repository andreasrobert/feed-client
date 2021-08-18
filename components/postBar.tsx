import { Flex, Heading, Text } from "@chakra-ui/react";

export default function PostBar() {
  return (
    <>
      <Flex
        bg="white"
        h="151px"
        w="100%"
        p="14px"
        borderRadius="10px"
        my="10px"
        justifyContent="space-between"
        alignItems="center"
        px="32px"
        py="28px"
        pos="relative"
      >
        <Flex h="100%">
        <Flex bg="#F2F4FF" w="40px" h="53px" borderRadius="8px" mr="40px" flexDir="column" justifyContent="center" alignItems="center" >120</Flex>

            <Flex flexDir="column">
                <Heading size="H3">Add tags for solutions</Heading>
                <Text size="Body1">Easier to search for solutions based on a specific stack.</Text>
                <Flex bg="#F2F4FF" px="16px" py="5px" w="fit-content" borderRadius="8px">
                    <Text  size="Body3">Feature</Text>
                </Flex>
            </Flex>

        </Flex>
        <Flex w="50px" h="40px" bg="#AD1FEA" borderRadius="9px"></Flex>
      </Flex>
    </>
  );
}

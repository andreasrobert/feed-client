import { Flex, Heading, Text } from "@chakra-ui/react";

export default function LeftBar() {
  return (
    <>
    <Flex w="100%" flexDir={{base:"row",sm:"column"}} mb={{base:"25px",sm:"0px"}} justifyContent="space-between">
      <Flex
        w={{base:"29vw",tb:"255px"}}
        h="137px"
        borderRadius="10px"
        bg="linear-gradient(214deg, rgba(232,77,112,1) 0%, rgba(163,55,246,1) 35%, rgba(40,167,237,1) 100%)"
        flexDir="column"
        justifyContent="flex-end"
        p="24px"
      >
          <Heading size="H2">Frontend Mentor</Heading>
          <Text size="Body2">Feedback Board</Text>

      </Flex>

      <Flex
        w={{base:"29vw",tb:"255px"}}
        h="137px"
        borderRadius="10px"
        bg="white"
        my={{sm:"24px"}}
        flexWrap="wrap"
        p="24px"
      >
                          <Flex bg="#F2F4FF" mr="8px" h="fit-content" px="16px" py="5px" borderRadius="8px"><Text size="Body3">Feature</Text></Flex>
                          <Flex bg="#F2F4FF" mr="8px" h="fit-content" px="16px" py="5px" borderRadius="8px"><Text size="Body3">Feature</Text></Flex>
                          <Flex bg="#F2F4FF" mr="8px" h="fit-content" px="16px" py="5px" borderRadius="8px"><Text size="Body3">Feature</Text></Flex>
                          <Flex bg="#F2F4FF" mr="8px" h="fit-content" px="16px" py="5px" borderRadius="8px"><Text size="Body3">Feature</Text></Flex>



      </Flex>

      <Flex
        w={{base:"29vw",tb:"255px"}}
        h="137px"
        borderRadius="10px"
        bg="white"
        flexDir="column"
      ></Flex>
      </Flex>
    </>
  );
}

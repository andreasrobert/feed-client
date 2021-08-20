import { Flex, Heading, Text } from "@chakra-ui/react";
import Link from 'next/link';

export default function LeftBar() {
  return (
    <>
      <Flex
        w="100%"
        flexDir={{ base: "row", sm: "column" }}
        mb={{ base: "25px", sm: "0px" }}
        justifyContent="space-between"
      >
        <Flex
          w={{ base: "29vw", tb: "255px" }}
          h="137px"
          borderRadius="10px"
          bg="linear-gradient(214deg, rgba(232,77,112,1) 0%, rgba(163,55,246,1) 35%, rgba(40,167,237,1) 100%)"
          flexDir="column"
          justifyContent="flex-end"
          p="24px"
        >
          <Heading size="H2">The Feed</Heading>
          <Text size="Body2"></Text>
        </Flex>

        <Flex
          w={{ base: "29vw", tb: "255px" }}
          h="137px"
          borderRadius="10px"
          bg="white"
          my={{ sm: "24px" }}
          flexDir="column"
          alignItems="center"
          justifyContent="center"
          p="4px"
        >
          <Link href="/login" passHref>
            <a>
          <Flex
          mb="14px"
            bg="#F2F4FF"
            h="fit-content"
            w="fit-content"
            px="16px"
            py="5px"
            borderRadius="8px"
            cursor="pointer"
          >
            <Text size="Body3">Login</Text>
          </Flex>
          </a>
          </Link>

          <Link href="/login?reg=true" passHref>
            <a>
          <Flex
            bg="#F2F4FF"
            h="fit-content"
            w="fit-content"
            px="16px"
            py="5px"
            borderRadius="8px"
            cursor="pointer"
          >
            <Text size="Body3">Register</Text>
          </Flex>
          </a>
          </Link>
          {/* <Flex w="100%" h="50%">
            <Flex
              bg="#F2F4FF"
              _hover={{
                bg: "#ffffff",
                borderTop: "1px solid white",
                borderLeft: "1px solid white",
                transition:
                  "background-color 270ms linear , border 270ms linear",
              }}
              h="100%"
              px="16px"
              w="50%"
              justifyContent="center"
              alignItems="center"
              borderTopLeftRadius="8px"
              borderRight="1px solid #c4c7d6"
              borderBottom="1px solid #c4c7d6"
              borderTop="1px solid #c4c7d6"
              borderLeft="1px solid #c4c7d6"
            >
              <Text size="Body3">Login</Text>
            </Flex>
            <Flex
              _hover={{
                bg: "#ffffff",
                borderRight: "1px solid white",
                borderTop: "1px solid white",
                transition:
                  "background-color 270ms linear , border 270ms linear",
              }}
              bg="#F2F4FF"
              h="100%"
              px="16px"
              w="50%"
              justifyContent="center"
              alignItems="center"
              borderTopRightRadius="8px"
              borderBottom="1px solid #c4c7d6"
              borderRight="1px solid #c4c7d6"
              borderTop="1px solid #c4c7d6"
            >
              <Text size="Body3">Register</Text>
            </Flex>
          </Flex>
          <Flex w="100%" h="50%">
            <Flex
              bg="#F2F4FF"
              _hover={{
                bg: "#ffffff",
                borderBottom:"1px solid white",
                borderLeft:"1px solid white",
                transition:
                  "background-color 270ms linear , border 270ms linear",
              }}
              h="100%"
              px="16px"
              w="50%"
              justifyContent="center"
              alignItems="center"
              borderBottomLeftRadius="8px"
              borderRight="1px solid #c4c7d6"
              borderBottom="1px solid #c4c7d6"
              borderLeft="1px solid #c4c7d6"

            >
              <Text size="Body3">Github</Text>
            </Flex>
            <Flex
              _hover={{
                bg: "#ffffff",
                borderRight: "1px solid white",
                borderBottom: "1px solid white",
                transition:
                  "background-color 270ms linear , border 270ms linear",
              }}
              bg="#F2F4FF"
              h="100%"
              px="16px"
              w="50%"
              justifyContent="center"
              alignItems="center"
              borderBottomRightRadius="8px"
              borderRight="1px solid #c4c7d6"
              borderBottom="1px solid #c4c7d6"
            >
              <Text size="Body3">More</Text>
            </Flex>
          </Flex> */}
        </Flex>

        <Flex
          w={{ base: "29vw", tb: "255px" }}
          h="137px"
          borderRadius="10px"
          bg="white"
          flexDir="column"
          alignItems="center"
          justifyContent="center"
        >
          <Link href="https://github.com/andreasrobert/feed-client" passHref>
            <a>
          <Flex
            bg="#F2F4FF"
            h="fit-content"
            w="fit-content"
            px="16px"
            py="5px"
            borderRadius="8px"
            mb="14px"
            cursor="pointer"

          >
            <Text size="Body3">Github</Text>
          </Flex>
          </a>
          </Link>
          <Link href="https://andreasrobert.github.io/" passHref>
            <a>
          <Flex
            bg="#F2F4FF"
            h="fit-content"
            w="fit-content"
            px="16px"
            py="5px"
            borderRadius="8px"
            cursor="pointer"
          >
            <Text size="Body3">More</Text>
          </Flex>
          </a>
          </Link>
        </Flex>
      </Flex>
    </>
  );
}

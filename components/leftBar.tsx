import { Flex, Heading, Text, Image } from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";

export default function LeftBar() {
  const [drop, setDrop] = useState(false);

  const handleClick = () => {
    setDrop((drop) => !drop);
  };

  return (
    <>
      <Flex
        w="100%"
        flexDir={{ base: "row", sm: "column" }}
        mb={{ mb: "25px", sm: "0px" }}
        justifyContent="space-between"
      >
        <Flex
          w={{ base: "100%", mb: "29vw", tb: "255px" }}
          h={{ base: "59px", mb: "137px" }}
          borderRadius={{ mb: "10px" }}
          bg="linear-gradient(214deg, rgba(232,77,112,1) 0%, rgba(163,55,246,1) 35%, rgba(40,167,237,1) 100%)"
          flexDir={{ mb: "column" }}
          justifyContent={{ base: "space-between", mb: "flex-end" }}
          alignItems={{ base: "center", mb: "inherit" }}
          p="24px"
          pos="relative"
          zIndex="4"
        >
          <Heading size="H2">The Feed</Heading>
          <Image
            d={{ base: "inherit", mb: "none" }}
            src="/icon-hamburger.svg"
            cursor="pointer"
            onClick={handleClick}
            alt=""
          ></Image>
          <Flex
            d={drop ? "flex" : "none"}
            pos="absolute"
            bottom="-500px"
            right="0px"
          >
            <Flex
              d={{ mb: "none" }}
              zIndex="3"
              pos="absolute"
              w="270px"
              h="500px"
              bg="#F2F4FF"
              boxShadow=" rgba(17, 12, 46, 0.15) 0px 20px 20px 0px;"
              borderBottomLeftRadius="10px"
              bottom="0px"
              right="0px"
              flexDir="column"
              p="24px"
            >
              <Flex
          w="100%"
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
        </Flex>

        <Flex
        mt="30px"
          w="100%"
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
          </Flex>
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
          d={{ base: "none", mb: "flex" }}
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
        </Flex>

        <Flex
          w={{ base: "29vw", tb: "255px" }}
          h="137px"
          borderRadius="10px"
          bg="white"
          flexDir="column"
          alignItems="center"
          justifyContent="center"
          d={{ base: "none", mb: "flex" }}
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

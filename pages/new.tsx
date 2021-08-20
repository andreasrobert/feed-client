import { Flex, Heading, Text, Input, Button, Image, Textarea } from "@chakra-ui/react";
import Link from "next/link";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import TopBar from "../components/topBar";
import { useEffect, useState } from "react";
import { Post } from "./types";

const New: NextPage = () => {
  return (
    <>
      <Flex
        pos="absolute"
        minW="100%"
        minH="100%"
        bg="#F2F4FF"
        justifyContent="center"
      >
        <Flex flexDir="column">
          <Flex h="20vh" alignItems="center">
          <Link href="/" passHref>
                <Flex alignItems="center">
                <Image mr="5px" src="/icon-arrow-left.svg" w="8px" h="10px" alt=""></Image>
              <Heading _hover={{textDecoration:"underline"}} cursor="pointer" size="H4">
                Go Back
              </Heading>
              </Flex>
            </Link>
          </Flex>
          <Flex
            bg="white"
            justifyContent="space-between"
            w="540px"
            h="500px"
            borderRadius="10px"
            flexDir="column"
            pos="relative"
            mb="20vh"
            p="42px"
          >
            <Heading size="H1">Create New Feed</Heading>

<Flex flexDir="column">
            <Heading size="H4">Feed Title</Heading>
            <Text>Add a short, descriptive headline</Text>
            <Input
              focusBorderColor="none"
              bg="#F2F4FF"
              border="none"
              placeholder="Title"
              name="title"
              required
            />
</Flex>
<Flex flexDir="column">
            <Heading size="H4">Feed Detail</Heading>
            <Text>
              Include any specific comments on what shuold be improved, added,
              etc.
            </Text>
            <Textarea
              placeholder="Here is a sample placeholder"
              resize="none"
              focusBorderColor="none"
              bg="#F2F4FF"
              border="none"
            />
            </Flex>
            <Flex alignSelf="flex-end" w="150px" h="44px" bg="#AD1FEA" borderRadius="9px" justifyContent="center" alignItems="center">
                <Heading size="H4" color="white">+ Add Feedback</Heading>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default New;

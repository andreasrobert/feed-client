import { Flex } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import LeftBar from "../components/leftBar";
import PostBar from "../components/postBar";
import TopBar from "../components/topBar";

const Home: NextPage = () => {
  return (
    <>
      <Flex
        pos="absolute"
        minW="100%"
        minH="100%"
        bg="#F2F4FF"
        justifyContent="center"
      >
        <Flex mt="74px">
          <Flex w="255px" h="530px" mr="30px" flexDir="column">
            <LeftBar></LeftBar>
          </Flex>
          <Flex  w="825px" h="800px" flexDir="column" >
            <TopBar></TopBar>
            <PostBar></PostBar>
            <PostBar></PostBar>
            <PostBar></PostBar>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Home;

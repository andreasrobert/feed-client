import { Flex } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import LeftBar from "../components/leftBar";
import PostBar from "../components/postBar";
import TopBar from "../components/topBar";
import { useEffect, useState } from "react";
import { Post } from "./types";

const Home: NextPage = () => {
  const [posts, setPosts] = useState([] as Post[]);

  const getPosts = async () => {
    const res = await fetch(
      "https://feed-database-postgres.herokuapp.com/post",
      { method: "GET"}
    );
    const result = await res.json();
    setPosts(result);
  };

  useEffect(() => {
    getPosts();

  }, []);


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
          <Flex w="825px" h="800px" flexDir="column">
            <TopBar></TopBar>

            {posts.map((post)=>{
                return(
                    <PostBar key={post.id} data={post}></PostBar>
                )
            })}

          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Home;

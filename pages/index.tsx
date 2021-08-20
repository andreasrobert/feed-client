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
  const [sort, setSort] = useState("Most Upvotes")


  const getPosts = async () => {
    const res = await fetch(
      "http://localhost:4000/post",
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
        <Flex mt="74px" flexDir={{base:"column",sm:"row"}}  alignItems={{base:"center",sm:"initial"}}>
          <Flex w={{base:"100%",sm:"255px"}} h={{sm:"530px"}} mr={{sm:"30px"}} flexDir={{base:"row",sm:"column"}}>
            <LeftBar></LeftBar>
          </Flex>
          <Flex w={{base:"90vw",tb:"825px"}} mb="13vh" flexDir="column">
            <TopBar sort={sort} setSort={setSort}></TopBar>

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

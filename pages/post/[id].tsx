import { Flex, Heading, Text, Input, Button, Image } from "@chakra-ui/react";
import Link from "next/link";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Post } from "../../components/types";
import PostBar from "../../components/postBar";
import TopBar from "../../components/topBar";
import Comment from "../../components/comment";
import InputComment from "../../components/inputComment";

const PostPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const [posts, setPosts] = useState();
  const [comments, setComments] = useState([] as Post[]);

  const getPost = async () => {
    const res = await fetch("https://feed-database-postgres.herokuapp.com/postpage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        post_id: `${id}`,
      }),
    });
    const result = await res.json();
    // console.log("heree ="+result.id)
    setPosts(result);
  };

  const getComments = async () => {
    const res = await fetch("https://feed-database-postgres.herokuapp.com/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        post_id: `${id}`,
      }),
    });
    const result = await res.json();
    // console.log(result);
    setComments(result);
  };

  // console.log(comments)
  // console.log(posts)

  useEffect(() => {
    if (id !== undefined) {
      getPost();
      getComments();
    }
  }, [id]);

  return (
    <>
      <Flex
        pos="absolute"
        minW="100%"
        minH="100%"
        bg="#F2F4FF"
        justifyContent="center"
      >
        <Flex flexDir="column" w={{ base: "90vw", ms: "730px" }}>
          <Flex h="8vh" alignItems="center">
            <Link href="/" passHref>
              <Flex alignItems="center" mb="-3vh">
                <Image
                  mr="5px"
                  src="/icon-arrow-left.svg"
                  w="8px"
                  h="10px"
                  alt=""
                ></Image>
                <Heading
                  _hover={{ textDecoration: "underline" }}
                  cursor="pointer"
                  size="H4"
                >
                  Go Back
                </Heading>
              </Flex>
            </Link>
          </Flex>
          {posts ? <PostBar data={posts}></PostBar> : <> </>}
          <Flex
            flexDir="column"
            bg="white"
            borderRadius="10px"
            pos="relative"
            px="35px"
            pt="15px"
            _after={{ content: `""`,h:"9px",w:"91%", bg: "white", pos: "absolute", bottom:"4px" }}
            d={comments[0] ? "flex": "none"}
          >
            {comments ? (
              comments.map((data) => {
                return <Comment key={data.id} data={data}></Comment>;
              })
            ) : (
              <> </>
            )}
          </Flex>
          <InputComment postId={id} getComments={getComments}></InputComment>
        </Flex>
      </Flex>
    </>
  );
};

export default PostPage;

import { Flex, Heading, Text, Input, Button, Image, Textarea } from "@chakra-ui/react";
import Link from "next/link";
import type { NextPage } from "next";
import { useState } from "react";
import { useRouter } from 'next/router'

const New: NextPage = () => {
  const router = useRouter()
  
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    fetch("http://localhost:4000/post", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        title: `${title}`,
        body: `${body}`,
      }),
    }).then(()=>router.push("/"))
  };

  return (
    <>
    <form onSubmit={handleSubmit}>
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
            <Heading size="H1">Create New Post</Heading>

<Flex flexDir="column">
            <Heading size="H4">Post Title</Heading>
            <Text>Add a short, descriptive headline</Text>
            <Input
              focusBorderColor="none"
              bg="#F2F4FF"
              border="none"
              placeholder="Title"
              name="title"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
</Flex>
<Flex flexDir="column">
            <Heading size="H4">Post Detail</Heading>
            <Text>
              Include any specific comment
            </Text>
            <Textarea
              placeholder=". . ."
              resize="none"
              focusBorderColor="none"
              bg="#F2F4FF"
              border="none"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
            </Flex>
            <Button
              alignSelf="flex-end"
              _hover={{ bg: "#C75AF6" }}
              _active={{
                bg: "#C75AF6",
                border: "none",
              }}
              _focus={{
                boxShadow: "none",
              }}
              color="white"
              bg="#AD1FEA"
              w="130px"
              type="submit"
              fontSize="15px"
            >
              + Add Post
            </Button>
          </Flex>
        </Flex>
      </Flex>
      </form>
    </>
  );
};

export default New;

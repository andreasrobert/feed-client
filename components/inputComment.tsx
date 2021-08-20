import {
  Flex,
  Heading,
  Text,
  Input,
  Button,
  Image,
  Textarea,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function NewComment(props: { postId: any ; getComments:()=> void}) {
  const [input, setInput] = useState("");

  const handleComment = async (event: any) => {
    event.preventDefault();
    fetch("http://localhost:4000/newcomment", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        comment: `${input}`,
        post_id: `${props.postId}`,
      }),
    }).then(()=>props.getComments())
  };

  return (
    <>
      <form onSubmit={handleComment}>
        <Flex
          bg="white"
          minH="151px"
          w="100%"
          borderRadius="10px"
          mt="59px"
          mb="13vh"
          justifyContent="space-between"
          alignItems="center"
          px="32px"
          py="28px"
          pos="relative"
        >
          <Flex h="100%" w="100%" flexDir="column">
            <Heading size="H1">Add Comment</Heading>
            <Textarea
              mt="17px"
              mb="40px"
              placeholder="Login to comment"
              resize="none"
              focusBorderColor="none"
              bg="#F2F4FF"
              border="none"
              h="150px"
              required
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
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
              w="150px"
              type="submit"
              fontSize="15px"
            >
              + Post Comment
            </Button>
          </Flex>
        </Flex>
      </form>
    </>
  );
}

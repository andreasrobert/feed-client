import { Flex, Heading, Text, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function Comment(props: { data: any }) {
  return (
    <>
      <Flex
        bg="white"
        minH="80px"
        w="100%"
        
        my="10px"
        justifyContent="space-between"
        alignItems="center"
        // py="8px"
        pos="relative"
        borderBottom="1px solid #c4c7d6"
      >
        <Flex h="100%" w="100%" flexDir="column">

<Flex justifyContent="space-between">

<Heading color="#647196" size="H4">By {props.data.username}</Heading>
<Text size="Body3" color="#647196">{ 
new Date(`${props.data.created_at}`)
.toLocaleDateString(undefined, {
  year: "numeric",
  month: "long",
  day: "numeric",
})}</Text>
{/* <Text size="Body3">Reply</Text> */}
</Flex>
<Text size="Body1" pb="20px">{props.data.comment}</Text>
          


        </Flex>
      </Flex>
    </>
  );
}

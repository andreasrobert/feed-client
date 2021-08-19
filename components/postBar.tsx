import { Flex, Heading, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function PostBar(props: { data: any }) {
  const [points, setPoints] = useState(0);
  const [neutral, setNeutral] = useState(true);

  const getPoints = async () => {
    const res = await fetch(
      `https://feed-database-postgres.herokuapp.com/points/${props.data.id}`,
      { method: "GET" }
    );
    const result = await res.json();
    setPoints(Number(result[0].count));
  };

  useEffect(() => {
    
    getPoints();
  }, []);


  const addPoint = async () =>{
    setPoints(points+1)
    setNeutral(false)
      console.log("up")
    const res = await fetch(
        `http://localhost:4000/points`,
        { method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({user_id: String(props.data.creator_id) , post_id: String(props.data.id)}) }
      );
      const result = await res.json();
      console.log(result)
    };

  const decreasePoint = async () =>{
    setPoints(points-1)
    setNeutral(true)
    console.log("down")
  const res = await fetch(
      `http://localhost:4000/point`,
      { method: "POST",
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      body: JSON.stringify({user_id: String(props.data.creator_id) , post_id: String(props.data.id)}) }
    );
    const result = await res.json();
    console.log(result)

  };


  return (
    <>
      <Flex
        bg="white"
        h="151px"
        w="100%"
        p="14px"
        borderRadius="10px"
        my="10px"
        justifyContent="space-between"
        alignItems="center"
        px="32px"
        py="28px"
        pos="relative"
      >
        <Flex h="100%">
          <Flex
            bg="#F2F4FF"
            w="40px"
            h="53px"
            borderRadius="8px"
            mr="40px"
            flexDir="column"
            justifyContent="center"
            alignItems="center"
            cursor="pointer"
            onClick={neutral ? addPoint : decreasePoint}
          >
            {points}
          </Flex>

          <Flex flexDir="column">
            <Heading size="H3">{props.data.title}</Heading>
            <Text size="Body1">{props.data.body}</Text>
            <Flex
              bg="#F2F4FF"
              px="16px"
              py="5px"
              w="fit-content"
              borderRadius="8px"
            >
              <Text size="Body3">Feature</Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex w="50px" h="40px" bg="#AD1FEA" borderRadius="9px"></Flex>
      </Flex>
    </>
  );
}

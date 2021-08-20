import { Flex, Heading, Text, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Link from 'next/link';
import { useRouter } from "next/router";


export default function PostBar(props: { data: any }) {
  const [points, setPoints] = useState(0);
  const [comments, setComments] = useState(0);
  const [neutral, setNeutral] = useState(false);

  const router = useRouter();
  const { id } = router.query;
  const page = Number.isInteger(Number(id))

  const getPoints = async () => {
    const res = await fetch(
      `https://feed-database-postgres.herokuapp.com/points/${props.data.id}`,
      { method: "GET" }
    );
    const result = await res.json();
    setPoints(Number(result[0].count));
  };

  const getComments = async () => {
    const res = await fetch(
      `http://localhost:4000/comments/${props.data.id}`,
      { method: "GET" }
    );
    const result = await res.json();
    setComments(Number(result[0].count));
  };

  const checkPoint = async () => {
    const res = await fetch("http://localhost:4000/checkPoint", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        post_id: `${props.data.id}`,
      }),
    });
    const result = await res.json();
    console.log("hello this =" + result);
    setNeutral(result);
  };

  useEffect(() => {
    getPoints();
    getComments();
    checkPoint();
  }, []);

  const addPoint = async () => {
    setPoints(points + 1);
    setNeutral(true);
    console.log("up");
    const res = await fetch(`http://localhost:4000/points`, {
      method: "POST",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: String(props.data.creator_id),
        post_id: String(props.data.id),
      }),
    });
    const result = await res.json();
    console.log(result);
  };

  const decreasePoint = async () => {
    setPoints(points - 1);
    setNeutral(false);
    console.log("down");
    const res = await fetch(`http://localhost:4000/point`, {
      method: "POST",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: String(props.data.creator_id),
        post_id: String(props.data.id),
      }),
    });
    const result = await res.json();
    console.log(result);
  };

  return (
    <>
      <Flex
        bg="white"
        minH="151px"
        w="100%"
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
            // bg="#F2F4FF"
            bg={neutral ? "#4661E6" : "#F2F4FF"}
            w="40px"
            h="53px"
            borderRadius="8px"
            mr="40px"
            flexDir="column"
            justifyContent="center"
            alignItems="center"
            cursor="pointer"
            onClick={neutral ? decreasePoint : addPoint}
            flexShrink={0}
            _hover={{
              bg:"#CFD7FF"
            }}
          >
              <Image w="12px" h="8px" src="/icon-arrow-up.svg" className="arrow" alt="" mb="4px"></Image>
              {/* <style jsx global>{`
               .arrow img{
                fill: red;
              }
              `}</style> */}

            <Heading size="H4" px="10px" _hover={{color:"#3A4374"}} color={neutral? "white":"#3A4374"}>{points}</Heading>
          </Flex>

          <Flex flexDir="column">
            <Link href={`http://localhost:3000/post/${props.data.id}`} passHref>
            <Heading d={page ? "none" : "inherit"} size="H3" cursor="pointer">
              {props.data.title} sauihaiufsuaihfa oai oiajoifj oaj foijaij oiuaf
              aiufshaiuh fiuha ifuahs
            </Heading>
            </Link>
            <Heading d={page ? "inherit" : "none"} size="H3" >
              {props.data.title} sauihaiufsuaihfa oai oiajoifj oaj foijaij oiuaf
              aiufshaiuh fiuha ifuahs
            </Heading>
            <Text size="Body1">
              {props.data.body}iojoijiojfsdofi uihasiuduasih d iuahsudi ahusidh
              uiashdiu hasiud sia diuashdiu ashduijdosijfiojsdoifjsoidjfoisjdfio
              osdjf oisjdfoi sj dfiojsofi siodfjsoidjfiosjd osjiosjd giosoid so
              ds
            </Text>
            <Flex
              bg="#F2F4FF"
              px="16px"
              py="5px"
              w="fit-content"
              borderRadius="8px"
              mt="3px"
            >
              <Text size="Body3">Feature</Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          ml="12px"
          minW="50px"
          h="40px"
          borderRadius="9px"
          flexShrink={0}
          alignItems="center"
        >
          <Image w="20px" h="20px" src="/icon-comments.svg" alt="" mr="10px"></Image>
          <Heading size="H3">{comments}</Heading>



        </Flex>
      </Flex>
    </>
  );
}

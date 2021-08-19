import { Flex, Heading, Text, Input, Button, FormControl} from "@chakra-ui/react";
import Link from "next/link";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import LeftBar from "../components/leftBar";
import PostBar from "../components/postBar";
import TopBar from "../components/topBar";
import { useEffect, useState } from "react";
import { Post } from "./types";

const Home: NextPage = () => {
  const [login, setLogin] = useState(true);
  const [pass1, setPass1] = useState("")
  const [pass2, setPass2] = useState("")
  const [reg, setReg] = useState(false)

  const handleChange = ()=>{
      setLogin(prev => !prev)
  }

  useEffect(()=>{
      if(pass1 === pass2){
          setReg(true)
      }else{
          setReg(false)
      }

  },[pass1,pass2,reg])

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
            <Heading cursor="pointer" size="H4">Go Back</Heading>
            </Link>
            </Flex>
            <form action="http://localhost:4000/login" method="post">

          <Flex
            d={login ? "flex" : "none"}
            bg="white"
            justifyContent="center"
            alignItems="center"
            w="300px"
            h="370px"
            borderRadius="10px"
            flexDir="column"
            pos="relative"
          >
            <Input
              w="200px"
              focusBorderColor="none"
              bg="#F2F4FF"
              border="none"
              placeholder="username"
              name="username"
              required
            />
            <Input
              w="200px"
              focusBorderColor="none"
              bg="#F2F4FF"
              border="none"
              placeholder="password"
              my="20px"
              name="password" 
              type="password"
              required
            />
            <Button
              _hover={{ bg: "#C75AF6" }}
              _active={{
                bg: "#C75AF6",
                border: "none",
              }}
              _focus={{
                boxShadow:
                  "none",
              }}
              color="white"
              bg="#AD1FEA"
              w="100px"
              type="submit"
            >
              Login
            </Button>
            <Text cursor="pointer" pos="absolute" right="15px" bottom="8px" onClick={handleChange}>Create an account?</Text>
          </Flex>
          </form>
          <form action="http://localhost:4000/register" method="post">
          <Flex
            d={login ? "none" : "flex"}
            bg="white"
            justifyContent="center"
            alignItems="center"
            w="300px"
            h="370px"
            borderRadius="10px"
            flexDir="column"
            pos="relative"
          >
            <Input
              w="200px"
              focusBorderColor="none"
              bg="#F2F4FF"
              border="none"
              placeholder="username"
              name="username"
              required
            />
            <Input
              w="200px"
              focusBorderColor="none"
              bg="#F2F4FF"
              border="none"
              placeholder="password"
              type="password"
              name="password"
              my="20px"
              required
              value={pass1}
              onChange={(e)=>setPass1(e.target.value)}
            />
            <Input
              w="200px"
              focusBorderColor="none"
              bg="#F2F4FF"
              border="none"
              placeholder="confirm password"
              type="password"
              required
              value={pass2}
              onChange={(e)=>setPass2(e.target.value)}
            />
            <Button
              _hover={{ bg: "#C75AF6" }}
              _active={{
                bg: "#C75AF6",
                border: "none",
              }}
              _focus={{
                boxShadow:
                  "none",
              }}
              color="white"
              bg="#AD1FEA"
              mt="20px"
              w="100px"
              type="submit"
              isDisabled={!reg}
            >
              Register
            </Button>
            <Text cursor="pointer" pos="absolute" right="15px" bottom="8px" onClick={handleChange}>Already have an account?</Text>

          </Flex>
          </form>
        </Flex>
      </Flex>
    </>
  );
};

export default Home;

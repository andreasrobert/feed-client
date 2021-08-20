import {
  Flex,
  Heading,
  Text,
  Input,
  Button,
  Image,
} from "@chakra-ui/react";
import Link from "next/link";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import LeftBar from "../components/leftBar";
import PostBar from "../components/postBar";
import TopBar from "../components/topBar";
import { useEffect, useState } from "react";
import { Post } from "./types";

const Login: NextPage = () => {
  const [login, setLogin] = useState(true);
  const [userReg, setUserReg] = useState("");
  const [pass1Reg, setPass1Reg] = useState("");
  const [pass2Reg, setPass2Reg] = useState("");
  const [reg, setReg] = useState(false);
  const [userLog, setUserLog] = useState("");
  const [passLog, setPassLog] = useState("");

  const handleChange = () => {
    setLogin((prev) => !prev);
  };

  useEffect(() => {
    if (pass1Reg === pass2Reg) {
      setReg(true);
    } else {
      setReg(false);
    }
  }, [pass1Reg, pass2Reg, reg]);

  const handleLogin = async (event: any) => {
    event.preventDefault();
    fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
      },
      // We convert the React state to JSON and send it as the POST body
      //   body: `password=testpass`
      body: JSON.stringify({
        username: `${userLog}`,
        password: `${passLog}`,
      }),
    })
      .then(function (response) {
        return response.json();
      })
      .then((result) => {
          if(!result.token){
            window.location.href = "http://localhost:3000/login?log=failed";
          }else{
            document.cookie = `token=${result.token};max-age=500;path=/`;
            window.location.href = "http://localhost:3000/";
          }
        
      });
  };

  const handleRegistry = async (event: any) => {
    event.preventDefault();
    await fetch("http://localhost:4000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
      },
      // We convert the React state to JSON and send it as the POST body
      //   body: `password=testpass`
      body: JSON.stringify({
        username: `${userReg}`,
        password: `${pass1Reg}`,
      }),
    })
      .then(function (response) {
        return response.json();
      })
      .then((result) => {
          if(result === "user created"){
            window.location.href = "http://localhost:3000/login?reg=success";
          }
          else if(result === "username already used"){
            window.location.href = "http://localhost:3000/login?reg=failed";
          }
      });
  };

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
                <Flex alignItems="center">
                <Image mr="5px" src="/icon-arrow-left.svg" w="8px" h="10px" alt=""></Image>
              <Heading _hover={{textDecoration:"underline"}} cursor="pointer" size="H4">
                Go Back
              </Heading>
              </Flex>
            </Link>
          </Flex>
          <form onSubmit={handleLogin}>
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
                value={userLog}
                onChange={(e) => setUserLog(e.target.value)}
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
                value={passLog}
                onChange={(e) => setPassLog(e.target.value)}
              />
              <Button
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
                w="100px"
                type="submit"
              >
                Login
              </Button>
              <Text
                cursor="pointer"
                pos="absolute"
                right="15px"
                bottom="8px"
                onClick={handleChange}
              >
                Create an account?
              </Text>
            </Flex>
          </form>
          <form onSubmit={handleRegistry}>
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
                value={userReg}
                onChange={(e) => setUserReg(e.target.value)}
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
                value={pass1Reg}
                onChange={(e) => setPass1Reg(e.target.value)}
              />
              <Input
                w="200px"
                focusBorderColor="none"
                bg="#F2F4FF"
                border="none"
                placeholder="confirm password"
                type="password"
                required
                value={pass2Reg}
                onChange={(e) => setPass2Reg(e.target.value)}
              />
              <Button
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
                mt="20px"
                w="100px"
                type="submit"
                isDisabled={!reg}
              >
                Register
              </Button>
              <Text
                cursor="pointer"
                pos="absolute"
                right="15px"
                bottom="8px"
                onClick={handleChange}
              >
                Already have an account?
              </Text>
            </Flex>
          </form>
        </Flex>
      </Flex>
    </>
  );
};

export default Login;

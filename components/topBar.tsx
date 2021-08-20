import { Flex, Heading, Text, Button, Image } from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";

export default function TopBar(props:{sort:string; setSort:(sort:string)=>void}) {
  const [drop, setDrop] = useState(false)

  const handleClick = ()=>{
      setDrop(prev => !prev)
  }

  return (
    <>
      <Flex
        bg="#373F68"
        h="72px"
        w="100%"
        p="14px"
        borderRadius="10px"
        mb="14px"
        justifyContent="space-between"
        alignItems="center"
        pos="relative"
      >
          <Flex d={drop ? "flex" : "none"} boxShadow=" rgba(17, 12, 46, 0.15) 0px 20px 20px 0px;"  justifyContent="space-around" flexDir="column" borderRadius="10px" pos="absolute" w="255px" h="192px" bg="white"bottom="-208px" zIndex="2" >
              <Flex alignItems="center" justifyContent="space-between" borderBottom="1px solid #cfcfcf" h="25%">
            <Text size="Body1" cursor="pointer" onClick={()=>props.setSort("Most Upvotes")} _hover={{color:"#AD1FEA"}} px="24px">Most Upvotes</Text>
            <Image d={props.sort==="Most Upvotes" ? "inherit" : "none"} src="/icon-check.svg" pr="24px" alt=""></Image>
            </Flex>
            <Flex alignItems="center" justifyContent="space-between" borderBottom="1px solid #cfcfcf" h="25%">
            <Text size="Body1" cursor="pointer" onClick={()=>props.setSort("Most Comments")} _hover={{color:"#AD1FEA"}} px="24px">Most Comments</Text>
            <Image d={props.sort==="Most Comments" ? "inherit" : "none"} src="/icon-check.svg" pr="24px" alt=""></Image>
            </Flex>
            <Flex alignItems="center" justifyContent="space-between" borderBottom="1px solid #cfcfcf" h="25%">
            <Text size="Body1" cursor="pointer" onClick={()=>props.setSort("Least Comments")} _hover={{color:"#AD1FEA"}} px="24px">Least Comments</Text>
            <Image d={props.sort==="Least Comments" ? "inherit" : "none"} src="/icon-check.svg" pr="24px" alt=""></Image>
            </Flex>
            <Flex alignItems="center" justifyContent="space-between" h="25%">
            <Text size="Body1" cursor="pointer" onClick={()=>props.setSort("Newest")} _hover={{color:"#AD1FEA"}} px="24px">Newest</Text>
            <Image d={props.sort==="Newest" ? "inherit" : "none"} src="/icon-check.svg" pr="24px" alt=""></Image>

            </Flex>
          </Flex>



        <Flex alignItems="center" cursor="pointer" onClick={handleClick}>
          {/* <Heading size="H3" color="white" mr="40px">6 Suggestions</Heading> */}
          <Text color="white" mr="6px" mb="-4px">
            Sort by :
          </Text>
          <Heading size="H4" color="white" mb="-5.5px">
            {props.sort}
          </Heading>
          <Image
            ml="6px"
            src={drop? "/icon-arrow-up.svg" :"/icon-arrow-down.svg"}
            w="10px"
            h="6px"
            mt="7px"
            alt=""
          ></Image>
        </Flex>
        <Link href="/new" passHref>
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
            + Add Post
          </Button>
        </Link>
      </Flex>
    </>
  );
}

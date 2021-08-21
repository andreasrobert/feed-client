import { Flex, Heading, Text, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function Comment(props: { data: any }) {

  function timeSince(time:any) {

    switch (typeof time) {
      case 'number':
        break;
      case 'string':
        time = +new Date(time);
        break;
      case 'object':
        if (time.constructor === Date) time = time.getTime();
        break;
      default:
        time = +new Date();
    }
    var time_formats = [
      [60, 'seconds', 1], 
      [120, '1 minute ago', '1 minute from now'], 
      [3600, 'minutes', 60], 
      [7200, '1 hour ago', '1 hour from now'], 
      [86400, 'hours', 3600], 
      [172800, 'Yesterday', 'Tomorrow'], 
      [604800, 'days', 86400], 
      [1209600, 'Last week', 'Next week'], 
      [2419200, 'weeks', 604800], 
      [4838400, 'Last month', 'Next month'], 
      [29030400, 'months', 2419200], 
      [58060800, 'Last year', 'Next year'], 
      [2903040000, 'years', 29030400], 
      [5806080000, 'Last century', 'Next century'], 
      [58060800000, 'centuries', 2903040000] 
    ];
    var seconds = (+new Date() - time) / 1000,
      token = 'ago',
      list_choice = 1;
  
    if (seconds == 0) {
      return 'Just now'
    }
    if (seconds < 0) {
      seconds = Math.abs(seconds);
      token = 'from now';
      list_choice = 2;
    }
    var i = 0,
      format;
    while (format = time_formats[i++])
      if (seconds < format[0]) {
        if (typeof format[2] == 'string')
          return format[list_choice];
        else
          return Math.floor(seconds / format[2]) + ' ' + format[1] + ' ' + token;
      }
    return time;
  }
  
  console.log(props.data.created_at)

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
<Text size="Body3" color="#647196">
  {/* { 
new Date(`${props.data.created_at}`)
.toLocaleDateString(undefined, {
  year: "numeric",
  month: "long",
  day: "numeric",
})} */}

{timeSince(new Date(`${props.data.created_at}`))}

</Text>
{/* <Text size="Body3">Reply</Text> */}
</Flex>
<Text size="Body1" pb="20px">{props.data.comment}</Text>
          


        </Flex>
      </Flex>
    </>
  );
}

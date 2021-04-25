import { Flex, Heading, Text } from "@chakra-ui/react";
import { IconInformation } from "./IconInformation";

export function Informations({number, text, icon}) {
  const isActiveIcon = icon

  return (
    <Flex
      direction="column"
      align={["flex-start", "flex-start", "center"]}
      justify="center"
    >
      <Heading fontSize={["2xl", "5xl"]} color="#FFBA08" fontWeight="bold" >
        {number}
      </Heading>
      <Text fontWeight="bold" fontSize={["md", "xl"]} color="#47585B">
        {text}
        { isActiveIcon && <IconInformation/> }
      </Text>     
    </Flex>
  )
}
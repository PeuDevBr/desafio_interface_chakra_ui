import { Flex, Text } from "@chakra-ui/react";

export function NumberText({number, text}) {
  return (
    <Flex
      direction="column"
      align="center"
    >
      <Text fontSize="48" color="#FFBA08">{number}</Text>
      <Text fontSize="24">{text}</Text>
    </Flex>
  )
}
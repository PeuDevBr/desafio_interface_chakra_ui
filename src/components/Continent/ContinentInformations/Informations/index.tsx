import { Flex, Text } from "@chakra-ui/react";

export function Informations({number, text}) {
  return (
    <Flex
      direction="column"
      align="center"
    >
      <Text fontSize={["28", "32", "36", "40", "48"]} color="#FFBA08">{number}</Text>
      <Text fontSize={["18","18", "20", "20", "24"]}>{text}</Text>
    </Flex>
  )
}
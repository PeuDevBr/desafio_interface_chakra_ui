import { Flex, Text } from "@chakra-ui/react";

export function Banner() {
  return (
    <Flex
        w="100%"
        h={["150px", "250px", "500px"]}
        px={["0", "0", "36"]}
        pt={["0", "0", "72"]}
        bgImage='url("/images/destination/europa.png")'
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        align="center"
        justify={["center", "center", "flex-start"]}
      >
        <Text
          textAlign={["center", "left"]}
          fontSize={["1.75rem", "5xl"]}
          color="gray.100"
          fontWeight="bold"
        >
          Europa
        </Text>
      </Flex>
  )
}
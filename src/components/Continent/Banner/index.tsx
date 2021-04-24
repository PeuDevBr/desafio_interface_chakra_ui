import { Flex, Text } from "@chakra-ui/react";

export function Banner() {
  return (
    <Flex
        h={500}
        backgroundImage='url("/images/destination/europa.png")'
        alt="Europa"
      >
        <Text
          mx={149}
          mt={369}
          fontSize="48"
          color="white"
          fontWeight="bold"
        >
          Europa
        </Text>
      </Flex>
  )
}
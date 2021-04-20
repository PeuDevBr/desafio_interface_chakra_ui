import { Avatar, Flex, Image, Text } from "@chakra-ui/react";

export function Country({foto, city, country, avatar}) {
  return (
    <Flex
      direction="column"
      bg="white"
      w={256}
      h={279}
      mr={45}
    >
      <Image 
        h={173}
        src={`/images/${foto}.png`}
      />
      <Flex
        justifyContent="space-between"
        align="center"
        mx="6"
        mt="4"
      >
        <Flex direction="column">
          <Text 
            fontWeight="bold"
            fontSize="20"
          >
            {city}
          </Text>
          <Text 
            fontSize="16"
            mt="4"
          >
            {country}
          </Text>
        </Flex>
        <Avatar
          size="sm"
          src={`/images/${avatar}.png`}
        />
      </Flex>          
    </Flex>  
  )
}
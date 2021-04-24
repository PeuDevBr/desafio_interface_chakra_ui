import { Avatar, Flex, Image, Text } from "@chakra-ui/react";

interface countryCardsProps {
  photo: string,
  city: string,
  country: string,
  avatar: string,
}

export function CountryCards({photo, city, country, avatar}: countryCardsProps) {
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
        src={`/images/destination/city/${photo}.png`}
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
          src={`/images/destination/country/${avatar}.png`}
        />
      </Flex>          
    </Flex>  
  )
}
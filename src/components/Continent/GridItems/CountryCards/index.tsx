import { Avatar, Flex, Image, Text, Center, Heading } from "@chakra-ui/react";

interface countryCardsProps {
  photo: string,
  city: string,
  country: string,
  avatar: string,
}

export function CountryCards({photo, city, country, avatar}: countryCardsProps) {
  return (
    <Center>
      <Flex
        direction="column"
        bg="white"        
        w={256}
        h={279}
      >
        <Image 
          h={173}

          src={`/images/destination/city/${photo}.png`}
        />

        <Flex
          justifyContent="space-between"
          align="center"
          p="5"
          border="1px"
          borderColor="#FFBA08"
          borderTop="0"
        >
          <Flex direction="column">

            <Heading fontWeight="bold" fontSize="xl">
              {city}
            </Heading>

            <Text fontSize="md" mt="4" >
              {country}
            </Text>

          </Flex>

          <Avatar
            size="sm"
            src={`/images/destination/country/${avatar}.png`}
          />

        </Flex>  

      </Flex>  
    </Center>
  )
}
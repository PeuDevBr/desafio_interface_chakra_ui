import { Flex, Image, Text } from "@chakra-ui/react";
import { useBreakpointValue } from "@chakra-ui/media-query"

interface TravelCardProps {
  icon: string,
  text: string,
}

export function TravelCard({icon, text}: TravelCardProps) {
  const isMobile = useBreakpointValue({
    base: false,
    sm: true
  })

  return (
    <Flex direction={["row", "column"]} justify="center" align="center">
      {
        isMobile 
          ? <Image src={`/images/travelTypes/${icon}.png`} w="85px" h="85px" mb="6"/> 
          : <Text color="yellow.400" fontSize="4xl" mr="2">●</Text>
      }
      <Text fontWeight="600" color="gray.700" fontSize={["md", "xl", "2xl"]}>{text}</Text>
    </Flex>
  )
}
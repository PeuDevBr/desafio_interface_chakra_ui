import { Flex, Heading, Image, Text} from "@chakra-ui/react"

export default function Banner() {
  return (
    <Flex
      w="100%"
      h={["163px", "250px", "250px", "335px"]}
      bgImage='url("/images/banner/Background.png")'
      justifyContent="center"
    >
      <Flex
        justify={["center", "space-between"]}
        align="center"
        w="100%"
        mx="auto"
        px={["4", "10", "15", "20", "36"]}
      > 
        <div>
          <Heading
            color="gray.100" 
            fontWeight="bold" 
            fontSize={["xl", "2l", "2xl", "2xl", "4xl"]}
          >
            5 Continestes, <br/> infinitas possibilidades.
          </Heading>
          <Text
            maxW={["100%", "100%", "100%", "550px"]}
            color="gray.300"
            fontSize={["0.8rem", "xl"]}
            mt="5"
          >
            Chegou a hora de tirar do papel a viagem que você <br/> sempre sonhou.
            
          </Text>
        </div>

        <Image
            src="/images/banner/Airplane.png" 
            alt="Avião"
            cursor="pointer"
            w={["300px", "300px", "300px", "430px"]}
            display={["none", "none", "block"]}
            transform="translateY(48px)"
            ml="8"
          />

      </Flex>
    </Flex>
  )
}
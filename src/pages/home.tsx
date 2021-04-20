import { Center, Flex, Image, Link, Text } from "@chakra-ui/react"
import React from "react"
import { Header } from "../components/Header";

export default function Home() {
  return (
    <Flex
      width="100%" // para a margin funcionar
      mx="auto" //     
      maxWidth={1440} //
      direction="column"
    >
      <Header/>

      <Flex
        h={335}
        backgroundImage='url("/images/Background.png")'
        justifyContent="center"
      >
        <Flex
          direction="column"
          mt={100}
          mx={110}          
        >
          <Text
            fontSize="36px"
            lineHeight="54px"
            fontWeight="bold"
            color="white"
            w={426}
          >
            <p>5 Continestes, <br/> infinitas possibilidades.</p>
          </Text>
          <Text
            w={524}
            color="gray.300"
            fontSize="20px"
            lineHeight="30px"
          >
            <p>Chegou a hora de tirar do papel a viagem que você <br/> sempre sonhou.</p>
            
          </Text>
        </Flex>
        <Flex>
          <Image 
            src="/images/Airplane.png" 
            alt=""
            cursor="pointer"
            w={417}
            h={270}
            mt={100}
            mx={130}
          />
        </Flex>
      </Flex>
      <Center>
        <Image 
          src="/images/travelTypes.png" 
          alt="Logo"
          h="145px"
          mt="20"
        />
      </Center>
      <Center>
        <Image 
          src="/images/divider.png" 
          alt="Logo"
          mt="16"
          mb="16"
        />
      </Center>
      <Center
        fontSize="40px"
      >
        Vamos nessa?
      </Center>
      <Center
        fontSize="40px"
      >
        Então escolha seu continente
      </Center>
      <Center>
        <Link href="/europa" passHref>
          <Image 
            src="/images/continentsSlide.png" 
            alt="Logo"
            w="1240px"
            mt="14"
             mb="10"
          />
        </Link>
      </Center>
    </Flex>
  )
}
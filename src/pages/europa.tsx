import { Center, Flex, Grid, Text } from "@chakra-ui/react"
import React from "react"
import { Country } from "../components/Country";
import { Header } from "../components/Header";
import { NumberText } from "../components/NumberText";

export default function Europa() {
  return (
    <Flex
      width="100%" // para a margin funcionar
      mx="auto" //     
      maxWidth={1440} //
      direction="column"
    >
      <Header/>
     
      <Flex
        h={500}
        backgroundImage='url("/images/europa.png")'
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

      <Flex>   

        <Text
          maxWidth={450}
          fontSize="20"
          textAlign="justify"
          mt="10"
          mx={149}
          mb="10"
        >
          A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste.
        </Text>

        <Center fontWeight="bold">
          <Flex w={490} justifyContent="space-between">
            <NumberText number="50" text="países"/>
            <NumberText number="60" text="línguas"/>
            <NumberText number="27" text="cidades +100 @"/>
          </Flex>      
        </Center>
        
      </Flex>
      
      <Text  
        mx={149}
        fontSize="26"
        fontWeight="bold"
      >
        Cidades + 100
      </Text>

      <Grid 
        templateColumns="repeat(4, 1fr)" 
        ml={149} 
        mt="10" 
        rowGap={10} 
        maxWidth={1160}
      >
        <Country 
          foto="londres" 
          city="Londres" 
          country="Reino Unido" 
          avatar="londresLogo"
        /> 

        <Country 
          foto="paris" 
          city="Paris" 
          country="França" 
          avatar="franca"
        /> 
 
        <Country 
          foto="roma" 
          city="Roma" 
          country="Itália" 
          avatar="italia"
        />  

        <Country 
          foto="praga" 
          city="Praga" 
          country="República Tcheca" 
          avatar="republica"
        /> 

        <Country 
          foto="amsterda" 
          city="Amsterdã" 
          country="Holanda" 
          avatar="holanda"
        />     
      </Grid>
      
    </Flex>
  )
}
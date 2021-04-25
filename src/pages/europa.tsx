import { Flex, Text, Grid } from "@chakra-ui/react"
import React from "react"
import { Header } from "../components/Header";
import { Banner } from "../components/Continent/Banner";
import { ContinentText } from "../components/Continent/ContinentText";
import { GridItems } from "../components/Continent/GridItems";
import { ContinentInformation } from "../components/Continent/ContinentInformations";

export default function Europa() {
  return (
    <Flex
      width="100%" // para a margin funcionar
      mx="auto" //     
      maxWidth={1440} //
      direction="column"
    >
      <Header link="home"/>
     
      <Banner/>

      <Flex direction="column" maxW="1160px"  mx="auto" mb="10" px="1rem" >
        <Grid 
          templateColumns={["1fr", "1fr", "1fr 1fr", "1.2fr 1fr"]}
          gap={[5, 10,  16, 20]}
          my={["8", "20"]}
        >   

          <ContinentText/>

          <ContinentInformation/>
          
        </Grid>

        <Text fontSize="26" fontWeight="bold">
          Cidades + 100
        </Text>

        <GridItems/>
        
      </Flex>
      
    </Flex>
  )
}
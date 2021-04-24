import { Flex, Text } from "@chakra-ui/react"
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

      <Flex direction="column" mx={[16, 70, 149]}>
        <Flex direction={["column", "row"]} justifyContent="space-between">   

          <ContinentText/>

          <ContinentInformation/>
          
        </Flex>

        <Text fontSize="26" fontWeight="bold">
          Cidades + 100
        </Text>

        <GridItems/>
        
      </Flex>
      
    </Flex>
  )
}
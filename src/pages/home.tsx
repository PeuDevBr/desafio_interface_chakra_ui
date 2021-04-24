import { Box, Flex} from "@chakra-ui/react"
import React from "react"
import Banner from "../components/Home/Banner";
import { Header } from "../components/Header";
import { Slide } from "../components/Home/Slide";
import { TravelTypes } from "../components/Home/TravelTypes";
import { Text } from "../components/Home/Text";
import { Line } from "../components/Home/Line";

export default function Home() {
  return (
    <Flex
      width="100%" // para a margin funcionar
      mx="auto" //     
      maxWidth={1440} //
      direction="column"
    >
      <Header link="/home"/>

      <Banner/>

      <TravelTypes/>

      <Line/>

      <Text text="Vamos nessa?"/>

      <Text text="Então escolha seu continente"/>

      <Slide/>
      
    </Flex>
  )
}
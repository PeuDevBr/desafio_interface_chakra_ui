import { Flex} from "@chakra-ui/react"
import React from "react"
import { Banner } from "../components/Home/Banner";
import { Header } from "../components/Header";
import { Slide } from "../components/Home/Slide";
import { TravelTypes } from "../components/Home/TravelTypes";
import { Text } from "../components/Home/Text";
import { Line } from "../components/Home/Line";
import { GetStaticProps } from "next";
import { getPrismicClient } from "../services/prismic";
import Prismic from "@prismicio/client"

 export interface ContinentsProps {
  continents: {
    slug: string,
    title: string,
    summary: string,
    image: string,
  }[] // array com vários continentes
}

export default function Home({ continents }: ContinentsProps) {
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

      <Slide continents={continents}/>
      
    </Flex>
  )
}

export const getStaticProps: GetStaticProps = async() => {
  const prismic = getPrismicClient();

  const response = await prismic.query(
    [Prismic.Predicates.at('document.type', 'continent')]
  )

  const continents = response.results.map(continent => {
    return {
      slug: continent.uid,
      title: continent.data.title,
      summary: continent.data.summary,
      image: continent.data.slider_image.url
    }
  })

  console.log(continents)
  
  return { 
    props: {
      continents
    },
    revalidate: 1800, // verifica se tem atualização a cada 30 minutos
  }
}
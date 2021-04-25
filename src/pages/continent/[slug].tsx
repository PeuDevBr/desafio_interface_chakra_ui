import { Flex, Text, Grid } from "@chakra-ui/react"
import React from "react"
import { Header } from "../../components/Header";
import { Banner } from "../../components/Continent/Banner";
import { ContinentText } from "../../components/Continent/ContinentText";
import { GridItems } from "../../components/Continent/GridItems";
import { ContinentInformation } from "../../components/Continent/ContinentInformations";
import { GetStaticPaths, GetStaticProps } from "next";
import Prismic from "@prismicio/client"
import { getPrismicClient } from "../../services/prismic";
import { RichText } from "prismic-dom"

export interface ContinentProps {
  continent: {
    slug: string;
    title: string;
    description: string;
    banner_image: string;
    countries: number;
    languages: number;
    cities: number;
    cities_list: string;
    cities100: {
      city: string;
      country: string;
      flag: string;
    }[]
  }
}

export default function Europa({ continent }: ContinentProps) {
  return (
    <Flex
      width="100%" // para a margin funcionar
      mx="auto" //     
      maxWidth={1440} //
      direction="column"
    >
      <Header link="/home"/>
     
      <Banner continent={continent}/>

      <Flex direction="column" maxW="1160px"  mx="auto" mb="10" px="1rem" >
        <Grid 
          templateColumns={["1fr", "1fr", "1fr 1fr", "1.2fr 1fr"]}
          gap={[5, 10,  16, 20]}
          my={["8", "20"]}
        >   

          <ContinentText/>

          <ContinentInformation/>
          
        </Grid>

        <Text fontSize={["2xl", "4xl"]} fontWeight="bold">
          Cidades + 100
        </Text>

        <GridItems/>
        
      </Flex>
      
    </Flex>
  )
}

export const getStaticPaths: GetStaticPaths = async() => {
  const prismic = getPrismicClient();

  const continents = await prismic.query(
    [Prismic.Predicates.at('document.type', 'continent')]
  )

  const paths = continents.results.map(continent => {
    return {
      params: {
        slug: continent.uid
      }
    }
  });

  return {
    paths,
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async(context) => {
  const prismic = getPrismicClient();
  const { slug } = context.params;
  const response = await prismic.getByUID('continent', String(slug), {})

  const continent = {
    slug: response.uid,
    title: response.data.title,
    description: RichText.asText(response.data.description),
    banner_image: response.data.banner_image.url,
    countries: response.data.countries,
    languages: response.data.languages,
    cities: response.data.cities,
    cities_list: response.data.cities_list,
    cities100: response.data.cities100.map( city => {
      return {
        city: city.city,
        country: city.country,
        thumbnail: city.thumbnail.url,
        flag: city.flag.url,
      }
    })
  };

  return {
    props: {
      continent
    },
    revalidate: 1800
  }
}

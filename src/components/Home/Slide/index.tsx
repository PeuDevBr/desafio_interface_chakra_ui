import { Flex, Heading, Image, Text} from "@chakra-ui/react";
import Link from "next/link"
import React from "react";

import SwiperCore, { Navigation, Pagination, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import { ContinentsProps } from "../../../pages/home";

SwiperCore.use([Navigation, Pagination, A11y, Autoplay]);



export function Slide({ continents }: ContinentsProps) {
  return (
    <Flex 
      w="100%" 
      h={["250px","450px"]} 
      maxW="1240px" 
      mx="auto" 
      mb={["5","10"]}
      mt={["2", "4"]}
    >
      {console.log(continents)}
      <Swiper
        slidesPerView={1} //slide exibido por vez
        navigation // ativa a paginação
        pagination={{ clickable: true }} // pode ser clicável
        autoplay={{
          delay:4000, // muda de slide automatico ao final do tempo
        }}
        style={{width: '100%', flex: '1'}}
      > 
        {continents.map(continent =>(
          <SwiperSlide key={continent.slug}>
            <Flex
              w="100%"
              h="100%"
              justify="center"
              align="center"
              direction="column"
              bgImage={`url('${continent.image}')`}
              bgRepeat="no-repeat"
              bgSize="cover"
              textAlign="center"
              bgPosition="center"

              color="gray.100"
              fontWeight="bold"
            >
              <Link href={`/continent/${continent.slug}` }>
                <a>
                  <Heading fontSize={["3xl", "4xl", "5xl"]}>
                    {`${continent.title}`}
                  </Heading>
                  <Text 
                    fontSize={["0.8rem", "1xl", "2xl"]}
                    mt={["2", "4"]}
                  >
                    {`${continent.summary}`}
                  </Text>
                </a>
              </Link>
            </Flex>
          </SwiperSlide>
        ))}

      </Swiper>
    </Flex>
  )
}

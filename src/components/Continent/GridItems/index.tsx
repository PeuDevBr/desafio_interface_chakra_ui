import { Grid } from "@chakra-ui/react"
import React from "react"
import { CountryCards } from "./CountryCards"
export function GridItems() {
  return (
    <Grid
      templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)", "repeat(4, 1fr)" ]}
      mt="10" 
      rowGap={10} 
      maxWidth={1160}
    >
      <CountryCards 
        photo="londres" 
        city="Londres" 
        country="Reino Unido" 
        avatar="londresLogo"
      /> 

      <CountryCards 
        photo="paris" 
        city="Paris" 
        country="França" 
        avatar="franca"
      /> 
  
      <CountryCards 
        photo="roma" 
        city="Roma" 
        country="Itália" 
        avatar="italia"
      />  

      <CountryCards 
        photo="praga" 
        city="Praga" 
        country="República Tcheca" 
        avatar="republica"
      /> 

      <CountryCards 
        photo="amsterda" 
        city="Amsterdã" 
        country="Holanda" 
        avatar="holanda"
      />     
    </Grid>
  )
}
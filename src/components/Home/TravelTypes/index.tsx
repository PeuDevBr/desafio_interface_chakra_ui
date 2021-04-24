import { Grid, GridItem } from "@chakra-ui/react";
import { TravelCard } from "./travelCard";

export function TravelTypes() {
  return (
    <Grid
      templateColumns={["1fr 1fr", "1fr 1fr", "1fr 1fr", "repeat(5, 1fr)"]}
      w="100%"
      justifyContent="space-between"
      align="center"
      mt={["10", "32"]}
      mx="auto"
      maxW={1160}
      gap={[1, 5]}
      
    >
      <GridItem>
        <TravelCard icon="cocktail" text="vida nortuna"/>
      </GridItem>
      <GridItem>
        <TravelCard icon="surf" text="praia"/>
      </GridItem>
      <GridItem>
        <TravelCard icon="building" text="moderno"/>
      </GridItem>
      <GridItem>
        <TravelCard icon="museum" text="clássico"/>
      </GridItem>
      <GridItem colSpan={[2, 2, 2, 1]}> {/* expande para duas colunas */}
        <TravelCard icon="earth" text="e mais..."/>
      </GridItem>
    </Grid>
  )
}
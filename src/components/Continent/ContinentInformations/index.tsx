import { Flex } from "@chakra-ui/react";
import { Informations } from "./Informations";

export function ContinentInformation() {
  return (
      <Flex 
        align="center"
        justify="space-between"
      >
        <Informations number="50" text="países" icon={false}/>
        <Informations number="60" text="línguas" icon={false}/>
        <Informations number="27" text="cidades +100" icon={true}/>
      </Flex>  
  )
}
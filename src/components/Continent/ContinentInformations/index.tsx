import { Center, Flex } from "@chakra-ui/react";
import { Informations } from "./Informations";

export function ContinentInformation() {
  return (
    <Center fontWeight="bold">
      <Flex w={[120, 220, 320, 420, 520]} justifyContent="space-between">
        <Informations number="50" text="países"/>
        <Informations number="60" text="línguas"/>
        <Informations number="27" text="cidades +100 @"/>
      </Flex>      
    </Center>
  )
}
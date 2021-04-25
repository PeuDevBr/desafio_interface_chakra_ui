import { Text } from "@chakra-ui/react";

export function ContinentText() {
  return (
    <Text 
      maxWidth={450} 
      fontSize={["lg", "xl", "xl", "2xl"]} 
      textAlign="justify"
      color="gray.700"
    >
      A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo
      a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a
      leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio,
      o Cáucaso, e o mar Negro a sudeste.
    </Text>
  );
}

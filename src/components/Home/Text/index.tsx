import { Center } from "@chakra-ui/react";

interface textProps {
  text: string;
}

export function Text({text}: textProps) {
  return (
    <Center
    fontSize={["lg", "3xl", "4xl"]}
    fontWeight="bold"
  >
   {text}
  </Center>
  )
}
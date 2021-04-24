import { Box } from "@chakra-ui/react";

export function Line() {
  return (
    <Box // linha horizontal
      w={["60px", "90px"]} 
      h="2px" mx="auto" 
      my={["6", "20"]} 
      bg="gray.700"
    />
  )
}
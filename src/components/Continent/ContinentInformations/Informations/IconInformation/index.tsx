import React from "react"
import { RiInformationLine } from "react-icons/ri";
import { Icon, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverTrigger, Text } from "@chakra-ui/react";

export function IconInformation() {
  return (
    <Popover>
      <PopoverTrigger>
        <span>
          <Icon
            cursor="pointer"
            as={RiInformationLine}
            ml="1"
            color="gray.400"
            w={["10px", "16px"]}
            h={["10px", "16px"]}
          />
        </span>
      </PopoverTrigger>
      <PopoverContent bg="gray.700" color="#FFBA08">
        <PopoverArrow bg="gray.700" />
        <PopoverCloseButton />
        <PopoverBody fontWeight="400" fontSize="2lg">
          <Text>Berlim, Viena, Madri, Atenas, Lisboa ...</Text>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}

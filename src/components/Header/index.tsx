import { Center, Image } from "@chakra-ui/react";
import Link from "next/link"

interface headerProps {
  link: string,
}

export function Header({link}: headerProps) {
  return (
    <Center h={["50px", "100px"]} >
      <Link href={link}>
        <Image 
          src="/images/Logo.png" 
          alt="Logo"
          w={["81px", "184px"]}
          cursor="pointer"
        />
      </Link>
      
      </Center>
  )
}
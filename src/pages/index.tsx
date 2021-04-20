import { Center, Image } from '@chakra-ui/react'
import Link from "next/link";

export default function Home() {
  return (
    <Center h="100vh">
      <Link href="/home" passHref>
        <Image 
          src="/images/Logo.png" 
          alt=""
          cursor="pointer"
        />
      </Link>
    </Center>
  )
}

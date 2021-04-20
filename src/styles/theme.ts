import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  styles: {
    colors: {
      yellow: {
        "800": "#FFBA08"
      },
      gray: {
        "800": "#47585B"
      }
    },
    fonts: {
      heading: 'Poppins',
      body: 'Poppins'
    },
    global: {
      body: {
        bg: 'gray.100',
        color: 'gray.600'
      }
    }
  }
})
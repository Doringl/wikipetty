import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints, mode } from '@chakra-ui/theme-tools';

const fonts = { mono: `'Menlo', monospace` };

const breakpoints = createBreakpoints({
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em',
});

const styles = {
  global: (props) => ({
    body: {
      color: mode('gray.800', 'whiteAlpha.900')(props),
      transition: 'background-color 1.4s',
    },
  }),
};

const theme = extendTheme({
  colors: {
    black: '#16161D',
  },
  fonts,
  styles,
  breakpoints,
});

export default theme;

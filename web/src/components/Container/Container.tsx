import { Flex, useColorMode, FlexProps } from '@chakra-ui/react';

export const Container = (props: FlexProps) => {
  const { colorMode } = useColorMode();

  const bgColor = { light: 'white', dark: 'gray.900' };

  const color = { light: 'black', dark: 'white' };
  return (
    <Flex
      direction='column'
      justify='flex-start'
      align='center'
      m='2rem'
      bg={bgColor[colorMode]}
      color={color[colorMode]}
      transition={'all 1.4s'}
      {...props}
    ></Flex>
  );
};

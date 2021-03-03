import { Flex, useColorMode, FlexProps } from '@chakra-ui/react';

interface ContainerProps extends FlexProps {
  pink: 'yes' | 'no';
}

export const Container: React.FC<ContainerProps> = (props) => {
  const { colorMode } = useColorMode();

  const bgColor = {
    light: `${props.pink === 'yes' ? '#e7879a' : 'white'}`,
    dark: 'gray.900',
  };

  const color = { light: 'black', dark: 'white' };
  return (
    <Flex
      direction='column'
      justify='flex-start'
      align='center'
      bg={bgColor[colorMode]}
      color={color[colorMode]}
      transition={'all 1.4s'}
      {...props}
    />
  );
};

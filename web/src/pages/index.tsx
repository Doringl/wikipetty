import { Container } from '../components/Container/Container';
import { DarkModeSwitch } from '../components/DarkModeSwitch/DarkModeSwitch';
import { Main } from '../components/Main/Main';
import { WikipettyDog } from '../components/WikipettyDog/WikipettyDog';

const Index = () => (
  <Container height='100vh' pink='yes'>
    <Main m='2rem'>
      <WikipettyDog />
    </Main>
    <DarkModeSwitch />
  </Container>
);

export default Index;

import { Container } from '../components/Container/Container';
import { DarkModeSwitch } from '../components/DarkModeSwitch/DarkModeSwitch';
import { Main } from '../components/Main/Main';

const Index = () => (
  <Container height='100vh'>
    <Main>
      <div>hello</div>
    </Main>
    <DarkModeSwitch />
  </Container>
);

export default Index;

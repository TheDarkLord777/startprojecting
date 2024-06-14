import { RightContainerStyled } from '@components/RightContainer/RightContainer.styled.js';
import Header from '@components/Header/Header.jsx';
import Container from '@components/Container/Container.jsx';

const RightContainer = () => {
  return (
    <RightContainerStyled>
      <Header />
      <Container />
    </RightContainerStyled>
  );
};
export default RightContainer;

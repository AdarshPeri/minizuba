import styled from 'styled-components';
import HomeComp from '../components/Home.component';
const MainDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.div`
  align-self: center;
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 3rem;
  @media (max-width: 45em) {
    font-size: 2rem;
  }
`;

const Home = () => {
  return (
    <MainDiv>
      <Title>Minizuba! A one stop shop to check your orders.</Title>
      <HomeComp />
    </MainDiv>
  );
};

export default Home;

import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const StyledHome = styled.div`
  grid-template-columns: 1fr 1fr;
  display: grid;
  gap: 3.2rem;

  @media (max-width: 40.5em) {
    grid-template-columns: 1fr;
  }
`;

const OrderCard = styled.div`
  border-radius: 9px;
  box-shadow: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);
  /* width: ; */
  background-color: #fff;
  padding: 3rem;
  display: flex;
  justify-content: space-between;
  gap: 3rem;
  align-items: center;

  &:hover {
    transform: scale(1.1);
    transition: all 0.5s;
  }
`;

const Button = styled.button`
  font-size: 1.6rem;
  padding: 1.2rem 2.4rem;
  font-weight: 500;
  color: #02132fb2;
  background-color: #19bae5;
  border: none;
  border-radius: 5px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);

  &:hover {
    background-color: #f3f3f3;
    color: #19bae5;
    transition: all 0.5s;
  }
`;

const H2 = styled.h2`
  font-size: 2rem;
  font-weight: 600;

  @media (max-width: 45em) {
    font-size: 1.5rem;
  }
`;

const HomeComp = () => {
  const navigate = useNavigate();
  const handleClick = (packageTypeId) => {
    navigate(`orders/${packageTypeId}`);
  };

  return (
    <>
      <StyledHome>
        {Array.from({ length: 14 }).map((_, index) => (
          <OrderCard key={index}>
            <H2>Package Type: {index + 1}</H2>
            <Button onClick={() => handleClick(index + 1)}>
              {' '}
              Check Orders{' '}
            </Button>
          </OrderCard>
        ))}
      </StyledHome>
    </>
  );
};

export default HomeComp;

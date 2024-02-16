/* eslint-disable react/prop-types */
import styled from 'styled-components';
import OrderRow from './OrderRow.component';
import Pagination from './Pagination.component';
import { usePaginateOrders } from '../hooks/usePaginateOrders';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const StyledTable = styled.div`
  border: 1px solid #e5e7eb;

  font-size: 1.4rem;
  background-color: #fff;
  border-radius: 7px;
  overflow: hidden;
  max-width: 120rem;
`;

const CommonRow = styled.header`
  display: grid;
  grid-template-columns: 0.8fr 0.8fr 1fr 2fr 1fr 0.6fr;
  column-gap: 2.4rem;
  align-items: center;
  transition: none;
`;

const StyledHeader = styled(CommonRow)`
  padding: 1.6rem 2.4rem;

  background-color: #f9fafb;
  border-bottom: 1px solid #02132fb2;
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: #4b5563;
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

const StyledForm = styled.form`
  display: flex;
  gap: 2rem;
  margin-bottom: 3rem;
`;

const StyledInput = styled.input`
  padding: 1.2rem 2.4rem;
  border-radius: 5px;
  margin-left: 15rem;
`;

const H2 = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  align-self: center;

  @media (max-width: 45em) {
    font-size: 1.5rem;
  }
`;

const StyledBody = styled.section`
  margin: 0.4rem 0;
`;

const StyledRow = styled(CommonRow)`
  padding: 1.2rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid #02132fb2;
  }
`;

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  padding: 1.2rem;

  &:not(:has(*)) {
    display: none;
  }
`;

const Empty = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  text-align: center;
  margin: 2.4rem;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Table = ({ children }) => {
  return <StyledTable role='table'>{children}</StyledTable>;
};

const Header = ({ children }) => {
  return (
    <StyledHeader role='row' as='header'>
      {children}
    </StyledHeader>
  );
};

const Row = ({ children }) => {
  return <StyledRow role='row'>{children}</StyledRow>;
};

const Body = ({ data, render }) => {
  if (!data?.length) return <Empty>No data to show at the moment.</Empty>;
  return <StyledBody>{data.map(render)}</StyledBody>;
};

Table.Header = Header;
Table.Row = Row;
Table.Body = Body;
Table.Footer = Footer;

const OrderTable = ({ orderData, packageTypeId }) => {
  const [quantity, setQuantity] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = (e) => {
    const value = parseInt(e.target.value);
    if (!value) {
      setQuantity('');
      return;
    }

    if (isNaN(value)) {
      setQuantity('');
      return;
    }
    setQuantity(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    searchParams.set('filter', quantity);
    setSearchParams(searchParams);
  };

  const { currentOrders, orderCount } = usePaginateOrders({ orderData });

  return (
    <StyledContainer>
      <StyledForm onSubmit={(e) => handleSubmit(e)}>
        <H2>Package Type: {packageTypeId}</H2>
        <StyledInput
          type='text'
          placeholder='Quantity'
          value={quantity}
          onChange={(e) => handleChange(e)}
        />
        <Button type='submit'>Filter Orders</Button>
      </StyledForm>
      <Table>
        <Table.Header>
          <div>OrderLine ID</div>
          <div>Order ID</div>
          <div>Stock Item ID</div>
          <div>Description</div>
          <div>Quantity</div>
          <div>Unit Price</div>
        </Table.Header>

        <Table.Body
          data={currentOrders}
          render={(order) => <OrderRow key={order.OrderLineID} order={order} />}
        ></Table.Body>

        <Table.Footer>
          <Pagination count={orderCount} />
        </Table.Footer>
      </Table>
    </StyledContainer>
  );
};

export default OrderTable;

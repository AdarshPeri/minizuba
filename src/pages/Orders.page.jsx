import { useParams } from 'react-router-dom';
import OrderTable from '../components/OrderTable.component';
import { useOrders } from '../hooks/useOrders';
import Spinner from '../components/Spinner.component';

const Orders = () => {
  const { packageTypeId } = useParams();
  const { isLoading, data, error } = useOrders({ packageTypeId });

  if (isLoading) return <Spinner />;

  return (
    <>
      <OrderTable orderData={data} packageTypeId= {packageTypeId}/>
    </>
  );
};

export default Orders;

/* eslint-disable react/prop-types */
import useWindowDimensions from '../hooks/useWindowDimensions';
import { Table } from './OrderTable.component';

const OrderRow = ({ order }) => {
  const { isSmallScreen } = useWindowDimensions();
  //[{"OrderLineID": 26, "OrderID": 7, "StockItemID": 132, "Description": "Furry gorilla with big eyes slippers (Black) L", "PackageTypeID": 2, "Quantity": 1, "UnitPrice": 32.0}]
  const {
    OrderLineID: orderLine,
    OrderID: orderId,
    StockItemID: stockItemId,
    Description: description,
    Quantity: quantity,
    UnitPrice: unitPrice,
  } = order;
  return (
    <Table.Row>
      {isSmallScreen ? (
        <>
          <div>{orderLine}</div>
          <div>{orderId}</div>
          <div> {description} </div>
          <div> {quantity} </div>
        </>
      ) : (
        <>
          <div>{orderLine}</div>
          <div>{orderId}</div>
          <div> {stockItemId} </div>
          <div> {description} </div>
          <div> {quantity} </div>
          <div> {unitPrice} </div>
        </>
      )}
    </Table.Row>
  );
};

export default OrderRow;

import { useSearchParams } from 'react-router-dom';

const PAGE_SIZE = 10;

export const usePaginateOrders = ({ orderData }) => {
  const [searchParams] = useSearchParams();

  const pageDetails = searchParams.get('page');
  const pageToReturn = pageDetails ? +pageDetails : 1;

  const filterDetails = searchParams.get('filter');
  const quantityFilter = filterDetails ? +filterDetails : 0;

  if (!orderData?.length) return [];

  if (quantityFilter)
    orderData = orderData.filter((item) => item.Quantity === quantityFilter);
  const orderCount = orderData.length;

  const lastIndex = pageToReturn * PAGE_SIZE - 1;

  const firstIndex = pageToReturn === 1 ? 0 : (pageToReturn - 1) * PAGE_SIZE;

  return {
    currentOrders: orderData.filter(
      (_, index) => index >= firstIndex && index <= lastIndex
    ),
    orderCount,
  };
};

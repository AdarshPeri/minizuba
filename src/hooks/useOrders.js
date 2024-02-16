import { useQuery } from '@tanstack/react-query';
import { fetchOrdersByPackageType } from '../api/apiOrders';

export const useOrders = ({ packageTypeId }) => {
  const {
    isLoading,
    data = {},
    error,
  } = useQuery({
    queryKey: ['orders', packageTypeId],
    queryFn: () => fetchOrdersByPackageType(packageTypeId),
  });

  return { isLoading, data, error };
};

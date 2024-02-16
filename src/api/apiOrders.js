export const fetchOrdersByPackageType = async (packageTypeId, quantity = 0) => {
const urlParams = {
  type_id: packageTypeId
}

  if(quantity) urlParams.quantity = quantity;
  console.log(urlParams)
  const result = await fetch(
    `https://minizuba-fn.azurewebsites.net/api/orderlines?` +
      new URLSearchParams(urlParams)
  );

  return result.json();
};

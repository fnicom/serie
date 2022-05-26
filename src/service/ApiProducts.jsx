const apiUrl = 'https://fakestoreapi.com/products';

export const getProducts = async () => {
  
  const responseProducts = await fetch(apiUrl).then(response => response.json());

  return responseProducts;
}



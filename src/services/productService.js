// services/productService.js
export const fetchProductByBarcode = async (barcode) => {
  const response = await fetch(`http://localhost:5000/api/products/${barcode}`);
  
  if (!response.ok) {
    throw new Error('Product not found');
  }

  const product = await response.json();
  return product;
};

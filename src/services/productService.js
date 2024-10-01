// services/productService.js
export const fetchProductByBarcode = async () => {
  // unique key for the barcode to scan
  const response = await fetch("http://localhost:5000/api/products/5678");

  if (!response.ok) {
    throw new Error("Product not found");
  }

  const product = await response.json();
  return product;
};

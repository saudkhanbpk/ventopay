import React, { useEffect, useState } from "react";
import BarcodeScanner from "../components/Barcode/BarcodeScanner";
import { fetchProductByBarcode } from "../services/productService"; // Fetch products by barcode

const BarcodeOrder = () => {
  const [orderItems, setOrderItems] = useState([]);

  // Function to handle detected barcode and fetch product information
  const handleBarcodeDetected = async (barcode) => {
    try {
      const product = await fetchProductByBarcode(barcode);
      setOrderItems((prevItems) => [...prevItems, product]);
    } catch (error) {
      console.error("Product not found", error);
      // Optionally, provide user feedback here
    }
  };
  useEffect(() => {
    handleBarcodeDetected();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Barcode Order System</h2>
      <div className="flex flex-col md:flex-row gap-4">
        {/* Barcode Scanner */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold">Scan Product</h3>
          <BarcodeScanner onDetected={handleBarcodeDetected} />
        </div>

        {/* Order Summary */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold">Order Summary</h3>
          <ul>
            {orderItems.map((item, index) => (
              <li key={index}>
                {item.name} - ${item.price}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BarcodeOrder;

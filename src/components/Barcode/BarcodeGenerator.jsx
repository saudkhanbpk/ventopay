import React, { useRef, useEffect } from 'react';
import JsBarcode from 'jsbarcode';

const BarcodeGenerator = ({ productCode }) => {
  const barcodeRef = useRef(null);

  useEffect(() => {
    if (productCode) {
      try {
        JsBarcode(barcodeRef.current, productCode, {
          format: "CODE128", 
          lineColor: "#000",
          width: 2,
          height: 50,
          displayValue: true,
        });
      } catch (error) {
        console.error('Barcode generation failed:', error);
      }
    }
  }, [productCode]);

  return (
    <div>
      <h3>Generated Barcode:</h3>
      {/* Display SVG barcode */}
      <svg ref={barcodeRef} />
    </div>
  );
};

export default BarcodeGenerator;

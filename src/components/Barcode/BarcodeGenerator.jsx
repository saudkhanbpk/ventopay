import React, { useRef, useEffect } from 'react';
import JsBarcode from 'jsbarcode';

const BarcodeGenerator = ({ productCode }) => {
  const barcodeRef = useRef(null);

  useEffect(() => {
    JsBarcode(barcodeRef.current, productCode, {
      format: "CODE128",
      lineColor: "#000",
      width: 2,
      height: 50,
      displayValue: true
    });
  }, [productCode]);

  return <svg ref={barcodeRef} />;
};

export default BarcodeGenerator;

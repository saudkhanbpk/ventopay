import React, { useEffect } from 'react';
import Quagga from 'quagga';

const BarcodeScanner = ({ onDetected }) => {
  useEffect(() => {
    Quagga.init({
      inputStream: {
        name: "Live",
        type: "LiveStream",
        target: document.querySelector('#scanner-container'),
      },
      decoder: {
        readers: ["code_128_reader"], // Configure the barcode reader type
      },
    }, (err) => {
      if (err) {
        console.error(err);
        return;
      }
      Quagga.start();
    });

    Quagga.onDetected((data) => {
      onDetected(data.codeResult.code); // When a barcode is detected, pass it to the handler
    });

    return () => {
      Quagga.stop(); // Clean up on component unmount
    };
  }, [onDetected]);

  return <div id="scanner-container" style={{ width: '100%', height: '400px' }} />;
};

export default BarcodeScanner;

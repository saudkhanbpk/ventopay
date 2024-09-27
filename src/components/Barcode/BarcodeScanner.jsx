import React, { useEffect } from "react";
import Quagga from "quagga";

const BarcodeScanner = ({ onDetected }) => {
  useEffect(() => {
    // Initialize Quagga with camera and barcode decoder settings
    Quagga.init(
      {
        inputStream: {
          name: "Live",
          type: "LiveStream",
          target: document.querySelector("#scanner-container"), // The DOM element to show the camera stream
          constraints: {
            width: 640,
            height: 480,
            facingMode: "environment", // Use the rear camera
          },
        },
        decoder: {
          readers: ["code_128_reader", "ean_reader", "upc_reader"], // Multiple barcode readers
        },
      },
      (err) => {
        if (err) {
          console.error(err);
          return;
        }
        Quagga.start(); // Start barcode scanning
      }
    );

    // Barcode detected event
    Quagga.onDetected((data) => {
      console.log("Barcode detected: ", data);
      const barcode = data.codeResult.code;
      onDetected(barcode);
    });
    

    return () => {
      Quagga.stop(); // Stop scanning when component unmounts
    };
  }, [onDetected]);

  return (
    <div id="scanner-container" style={{ width: "100%", height: "400px" }} />
  );
};

export default BarcodeScanner;

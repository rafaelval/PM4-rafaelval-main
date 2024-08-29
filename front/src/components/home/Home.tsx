"use client";
import React, { useState, useEffect } from "react";

const Home: React.FC = () => {
  const images = ["/celulares.jpg", "/portatil.jpeg", "/tablet.jpg"];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleSelectImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="m-7">
      <div className="flex justify-center relative" style={{ height: '600px' }}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className={`max-w-full transition-opacity duration-1000 rounded-xl absolute ${
              currentImageIndex === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
      <div className="flex justify-center mt-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleSelectImage(index)}
            className={`mx-1 w-4 h-4 rounded-full bg-gray-500 ${
              index === currentImageIndex ? "bg-gray-700" : ""
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Home;

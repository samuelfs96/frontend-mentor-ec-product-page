import { Carousel } from "flowbite-react";
import React from "react";

export default function UICarousel({ images }) {
  return (
    <Carousel slide={false} className="max-md:[&>div]:rounded-none">
      {images.map((image, index) => (
        <img key={index} alt={`img of item ${index}`} src={image} />
      ))}
    </Carousel>
  );
}

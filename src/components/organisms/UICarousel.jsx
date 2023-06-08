import { Carousel, Modal } from "flowbite-react";
import React, { useState } from "react";
import CloseButton from "../atoms/CloseButton";

export default function UICarousel({ images }) {
  const [openLightBox, setOpenLightBox] = useState(false);
  return (
    <>
      <Carousel slide={false} className="max-md:[&>div]:rounded-none">
        {images.map((image, index) => (
          <img
            key={index}
            alt={`img of item ${index}`}
            src={image}
            onClick={() => setOpenLightBox(true)}
          />
        ))}
      </Carousel>
      <Modal
        show={openLightBox}
        size="2xl"
        onClose={() => setOpenLightBox(false)}
        className="[&>div>div]:bg-transparent [&>div>div]:shadow-none min-h-full max-sm:[&>div>div>div]:p-0"
      >
        <Modal.Body className="relative">
          <CloseButton customColor="white" className='absolute top-0 md:right-[1.5rem] max-md:right-0 z-10' onClick={() => setOpenLightBox(false)}/>
          <Carousel
            slide={false}
            className="h-[400px]"
          >
            {images.map((image, index) => (
              <img key={index} alt={`img of item ${index}`} src={image} />
            ))}
          </Carousel>
        </Modal.Body>
      </Modal>
    </>
  );
}

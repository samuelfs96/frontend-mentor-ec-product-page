import { Carousel, Modal } from "flowbite-react";
import React, { useEffect, useState } from "react";
import CloseButton from "../atoms/CloseButton";

const customTheme = {
  indicators: {
    wrapper:
      "absolute -bottom-24 max-md:-bottom-16 left-1/2 flex -translate-x-1/2 space-x-3 max-md:hidden",
    base: "w-[75px] h-[75px] rounded-xl bg-ui-pale-orange indicators bg-contain",
    active: {
      on: "opacity-25 border-ui-orange border-2",
      off: "opacity-100",
    },
  },
};

export default function UICarousel({ images }) {
  const [openLightBox, setOpenLightBox] = useState(false);

  useEffect(() => {
    [
      ...document.querySelectorAll(
        openLightBox
          ? "#lightbox-carousel .indicators"
          : "#main-carousel .indicators"
      ),
    ].forEach((item, index) => {
      item.style.backgroundImage = `url(${images[index]})`;
    });
  }, [openLightBox, images]);

  return (
    <>
      <Carousel
        id="main-carousel"
        slide={false}
        className="max-md:[&>div]:rounded-none"
        theme={customTheme}
      >
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
        className="[&>div>div]:bg-transparent [&>div>div]:shadow-none min-h-full max-sm:[&>div>div>div]:p-0 [&>div>div]:h-[550px]"
      >
        <Modal.Body className="relative">
          <CloseButton
            customColor="white"
            className="absolute top-0 md:right-[1.5rem] max-md:right-0 z-10"
            onClick={() => setOpenLightBox(false)}
          />
          <div className="h-[400px]">
            <Carousel id="lightbox-carousel" slide={false} theme={customTheme}>
              {images.map((image, index) => (
                <img key={index} alt={`img of item ${index}`} src={image} />
              ))}
            </Carousel>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

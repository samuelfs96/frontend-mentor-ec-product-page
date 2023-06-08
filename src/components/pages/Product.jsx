import React, { useMemo, useContext } from "react";
import GlobalStateContext from '../../store/context/GlobalStateContext';
import UICarousel from "../organisms/UICarousel";
import img1 from "../../images/image-product-1.jpg";
import img2 from "../../images/image-product-2.jpg";
import img3 from "../../images/image-product-3.jpg";
import img4 from "../../images/image-product-4.jpg";
import ProductDetail from "../organisms/ProductDetail";

export default function Product() {
  const [state] = useContext(GlobalStateContext);
  const images = useMemo(() => [img1, img2, img3, img4], []);
  return (
    <div className="container mx-auto min-[1024px]:px-24 mt-[150px] max-md:mt-[60px]">
      <div className="flex max-md:flex-col gap-8">
        <div className={`h-[350px] md:w-1/2 max-md:w-full ${state.zindexhidden ? '-z-10' : ''}`}>
            <UICarousel images={images} />
        </div>
        <div className="md:w-1/2 max-md:w-full">
          <ProductDetail/>
        </div>
      </div>
    </div>
  );
}

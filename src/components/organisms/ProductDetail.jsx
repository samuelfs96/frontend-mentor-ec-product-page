import { Badge, Button } from "flowbite-react";
import minus_src from "../../images/icon-minus.svg";
import plus_src from "../../images/icon-plus.svg";
import React, { useContext, useMemo, useState } from "react";
import GlobalStateContext from "../../store/context/GlobalStateContext";

const MAXIMUM_QUANTITY = 100;
export default function ProductDetail({
  id,
  image,
  companyname,
  title,
  description,
  price,
  discount,
}) {
  const [state, dispatch] = useContext(GlobalStateContext);
  const [productCount, setProductCount] = useState(0);

  const discounted_amount = useMemo(
    () =>
      discount
        ? parseFloat(price - price * discount).toFixed(2)
        : parseFloat(price).toFixed(2),
    [price, discount]
  );
  const handleAdd = () => {
    setProductCount((count) => {
      if (count < MAXIMUM_QUANTITY) return count + 1;
      return count;
    });
  };
  const handleReduce = () => {
    setProductCount((count) => {
      if (count > 0) return count - 1;
      return 0;
    });
  };
  const handleOnchangeValue = (ev) => {
    setProductCount((v) =>
      ev.target.validity.valid &&
      parseInt(ev.target.value || 0) <= MAXIMUM_QUANTITY
        ? parseInt(ev.target.value || 0)
        : parseInt(v)
    );
  };
  const handleAddToCart = () => {
    const product = {
      id: id,
      image: image,
      title: title,
      amount: discounted_amount,
      count: productCount,
      total: discounted_amount * productCount,
    };
    const { cartproducts } = state;
    const product_to_update = [...cartproducts].find((p) => p.id === id);
    if (product_to_update) {
      product_to_update.count += productCount;
      product_to_update.total += discounted_amount * productCount;
    }
    dispatch({
      type: "additemtocart",
      cartproducts: product_to_update
        ? [product_to_update]
        : [...state.cartproducts, product],
    });
  };

  return (
    <div className="p-8">
      <h4 className="mb-4 uppercase text-ui-orange font-bold text-sm tracking-[.075rem]">
        {companyname}
      </h4>
      <h1 className="text-ui-very-dark-blue text-4xl font-bold mb-10">
        {title}
      </h1>
      <p className="text-ui-dark-grayish-blue mb-8">{description}</p>
      <div className="flex flex-col max-md:flex-row max-md:items-center max-md:justify-between">
        <h2 className="mb-2 text-3xl text-ui-very-dark-blue font-bold flex items-center gap-3">
          <span>${discounted_amount}</span>
          {discount && (
            <Badge className="bg-ui-pale-orange text-ui-orange px-[8px]">
              <span className="text-sm">{discount * 100}%</span>
            </Badge>
          )}
        </h2>
        {discount && (
          <span className="text-ui-grayish-blue line-through font-bold max-md:text-lg">
            ${parseFloat(price).toFixed(2)}
          </span>
        )}
      </div>
      <div className="px-4 flex justify-center items-center max-md:flex-col max-md:gap-1 gap-4 mt-8">
        <div className="max-md:w-full flex-[2] my-2 bg-ui-light-grayish-blue rounded-lg p-[.95rem] flex justify-between items-center gap-2">
          <button className="p-1 hover:opacity-50" onClick={handleReduce}>
            <img src={minus_src} alt="minus logo" />
          </button>
          <input
            pattern="^[0-9]*$"
            className="font-bold w-12 text-center bg-transparent focus:outline-none"
            onChange={handleOnchangeValue}
            value={productCount}
          ></input>
          <button className="p-1 hover:opacity-50" onClick={handleAdd}>
            <img src={plus_src} alt="plus logo" />
          </button>
        </div>
        <Button
          onClick={handleAddToCart}
          className="max-md:w-full shadow-xl shadow-ui-pale-orange flex-[4] py-[.5rem] bg-ui-orange hover:bg-ui-orange hover:opacity-80 transition-opacity my-2 focus:ring-transparent [&>span]:text-md [&>span]:font-bold"
        >
          <svg
            className="mr-2"
            width="22"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
              fill="white"
              fillRule="nonzero"
            />
          </svg>
          Add to cart
        </Button>
      </div>
    </div>
  );
}

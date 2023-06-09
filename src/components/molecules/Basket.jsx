import { Badge, Button, Dropdown } from "flowbite-react";
import { useContext, useMemo, useState } from "react";
import icondelete from "../../images/icon-delete.svg";
import GlobalStateContext from "../../store/context/GlobalStateContext";

export default function Basket() {
  const [state, dispatch] = useContext(GlobalStateContext);
  const { cartproducts } = state;
  const [bcolor, setBcolor] = useState("#69707D");
  const totalitems = useMemo(
    () =>
      cartproducts.length > 0
        ? cartproducts.reduce((p, n) => p + n.count, 0)
        : 0,
    [cartproducts]
  );
  const handleActiveMenu = () => {
    const menu = document.querySelector(".dropdown-basket");
    dispatch({
      type: "hidecarouselzindex",
      zindexhidden: [...menu.classList].includes("opacity-0"),
    });
  };
  const handleDeleteItem = (id) => {
    dispatch({
      type: "removeitemfromcart",
      cartproducts: cartproducts.filter(p => p.id !== id),
    });
  }
  const handleClearCart = () => {
    dispatch({
      type: "clearCart",
    });
  };
  return (
    <Dropdown
      arrowIcon={false}
      inline
      label={
        <div className="relative" onClick={handleActiveMenu}>
          {totalitems > 0 && (
            <Badge
              color="info"
              className="px-[8px] py-[1px] text-[10px] absolute -top-3 -right-3 rounded-full bg-ui-orange text-white"
            >
              {totalitems}
            </Badge>
          )}
          <svg
            onMouseEnter={() => setBcolor("hsl(220, 13%, 13%)")}
            onMouseLeave={() => setBcolor("#69707D")}
            width="22"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
              fill={bcolor}
              fillRule="nonzero"
            />
          </svg>
        </div>
      }
      className="max-md:w-[95%] rounded-lg shadow-lg border-none dropdown-basket"
    >
      <Dropdown.Header className="font-bold py-3">
        <h1>Cart</h1>
      </Dropdown.Header>
      <div className="w-[350px] max-md:w-full">
        {totalitems > 0 ? (
          cartproducts.map(({ id, image, title, amount, count, total }) => (
            <div key={id}>
              <div className="px-5 py-4 flex justify-between items-center">
                <div className="flex gap-4">
                  <img
                    className="rounded"
                    src={image}
                    alt="img product"
                    width={50}
                    height={50}
                  />
                  <div className="text-ui-dark-grayish-blue">
                    <p>{title}</p>
                    <p>
                      {`$${amount} x ${count} `}
                      <span className="font-bold text-ui-very-dark-blue">
                        ${parseFloat(total).toFixed(2)}
                      </span>
                    </p>
                  </div>
                </div>
                <button onClick={() => handleDeleteItem(id)}>
                  <img
                    className="hover:contrast-50"
                    src={icondelete}
                    alt="delete icon"
                  />
                </button>
              </div>
              <div className="px-5 py-3">
                <Button
                  onClick={handleClearCart}
                  className="py-1 w-full bg-ui-orange hover:bg-ui-orange hover:opacity-80 transition-opacity my-2 focus:ring-transparent [&>span]:text-xs [&>span]:font-bold"
                >
                  CheckOut
                </Button>
              </div>
            </div>
          ))
        ) : (
          <div className="px-5 py-16 flex justify-center items-center">
            <h2 className="text-md text-ui-dark-grayish-blue font-bold">
              Your cart is empty.
            </h2>
          </div>
        )}
      </div>
    </Dropdown>
  );
}

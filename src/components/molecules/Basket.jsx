import { Badge, Button, Dropdown } from "flowbite-react";
import { useContext, useState } from "react";
import imgitem from "../../images/image-product-1.jpg";
import icondelete from "../../images/icon-delete.svg";
import GlobalStateContext from "../../store/context/GlobalStateContext";

export default function Basket() {
  const [state, dispatch] = useContext(GlobalStateContext);
  const [bcolor, setBcolor] = useState("#69707D");
  const handleActiveMenu = () => {
    const menu = document.querySelector(".dropdown-basket");
    dispatch({
      type: "hidecarouselzindex",
      zindexhidden: [...menu.classList].includes("opacity-0"),
    });
  };
  return (
    <Dropdown
      arrowIcon={false}
      inline
      label={
        <div className="relative" onClick={handleActiveMenu}>
          <Badge
            color="info"
            className="px-[8px] py-[1px] text-[10px] absolute -top-3 -right-3 rounded-full bg-ui-orange text-white"
          >
            3
          </Badge>
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
      className="w-[325px] max-md:w-[95%] rounded-lg shadow-lg border-none dropdown-basket"
    >
      <Dropdown.Header className="font-bold py-3">
        <h1>Cart</h1>
      </Dropdown.Header>
      <div className="px-5 py-4 flex gap-4 items-center">
        <img
          className="rounded"
          src={imgitem}
          alt="img product"
          width={50}
          height={50}
        />
        <div className="text-ui-dark-grayish-blue">
          <p>Fall Limited Edition Sneakers</p>
          <p>
            $125.00 x 3{" "}
            <span className="font-bold text-ui-very-dark-blue">$375.00</span>
          </p>
        </div>
        <button>
          <img
            className="hover:contrast-50"
            src={icondelete}
            alt="delete icon"
          />
        </button>
      </div>
      <div className="px-5 py-3">
        <Button className="py-1 w-full bg-ui-orange hover:bg-ui-orange hover:opacity-80 transition-opacity my-2 focus:ring-transparent [&>span]:text-xs [&>span]:font-bold">
          CheckOut
        </Button>
      </div>
    </Dropdown>
  );
}

import { Avatar, Navbar } from "flowbite-react";
import { useState } from "react";
import Logo from "../atoms/Logo";
import Basket from "../molecules/Basket";
import logo_src from "../../images/logo.svg";
import avatar_src from "../../images/image-avatar.png";
import CloseButton from "../atoms/CloseButton";

const Links = ["Collections", "Men", "Women", "About", "Contact"];

export default function UINavbar() {
  const [activeMenu, setActiveMenu] = useState(false);
  const handleActiveMenu = () => {
    const menu = document.querySelector(
      "[data-testid=flowbite-navbar-collapse]"
    );
    menu.classList.toggle("hidden");
    if (![...menu.classList].includes("hidden")) {
      setActiveMenu(true);
      setTimeout(() => {
        menu.classList.remove("max-md:-translate-x-full");
      }, 100);
    } else {
      menu.classList.add("max-md:-translate-x-full");
      setActiveMenu(false);
    }
  };
  return (
    <div className="container mx-auto min-[1024px]:px-24">
      <Navbar
        fluid
        className="border-b border-ui-grayish-blue border-opacity-30 md:pb-0 md:pt-0"
      >
        <Navbar.Toggle onClick={handleActiveMenu} className="max-md:mr-[10px]" />
        <div className="flex gap-12 max-md:grow">
          <Navbar.Brand href="#">
            <Logo src={logo_src} />
          </Navbar.Brand>
          <div
            className={`${
              !activeMenu ? "hidden" : ""
            } w-full h-full bg-ui-black opacity-70 fixed top-0 left-0 z-10`}
          />
          <Navbar.Collapse
            className={`
                max-md:fixed max-md:w-2/3 
                max-md:h-full max-md:left-0 
                max-md:top-0 max-md:bg-ui-white 
                max-md:z-20 max-md:-translate-x-full
                max-md:transition-transform 
                max-md:duration-300 max-md:[&>ul]:mt-0 
                max-md:[&>ul]:gap-4
                max-md:px-8 max-md:py-6
            `}
          >
            <CloseButton className={`w-fit h-[30px] mb-6 flex justify-center items-center ${!activeMenu ? 'hidden' : ''}`} onClick={handleActiveMenu} />
            {Links.map((link, index) => (
              <a
                key={index}
                className="max-md:text-ui-very-dark-blue max-md:font-bold md:pt-10 md:pb-10 text-ui-dark-grayish-blue hover:text-ui-very-dark-blue border-b-[3px] border-transparent hover:border-ui-orange"
                href="/#"
              >
                {link}
              </a>
            ))}
          </Navbar.Collapse>
        </div>
        <div className="flex gap-6 max-md:gap-4 items-center">
          <Basket />
          <Avatar
            size="sm"
            className="border-2 hover:border-ui-orange rounded-full cursor-pointer"
            alt="User avatar"
            img={avatar_src}
            rounded
          />
        </div>
      </Navbar>
    </div>
  );
}

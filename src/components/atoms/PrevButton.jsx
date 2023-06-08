import React, { useState } from "react";

export default function PrevButton({ onLightBox }) {
  const [bcolor, setBcolor] = useState("#1D2026");
  return (
    <div
      onMouseEnter={() => setBcolor("hsl(26, 100%, 55%)")}
      onMouseLeave={() => setBcolor("#1D2026")}
      className={`w-[40px] h-[40px] ${
        onLightBox ? "flex" : "md:hidden flex"
      } justify-center items-center bg-white rounded-full`}
    >
      <svg
        width="12"
        height="18"
        xmlns="http://www.w3.org/2000/svg"
        className="mr-1"
      >
        <path
          d="M11 1 3 9l8 8"
          stroke={bcolor}
          strokeWidth="3"
          fill="none"
          fillRule="evenodd"
        />
      </svg>
    </div>
  );
}

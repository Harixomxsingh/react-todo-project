import React from "react";

const Footer = () => {
  return (
    <div className="sticky bottom-0 mt-auto bg-opacity-30 backdrop:filter backdrop-blur-sm  w-full h-9 flex justify-center items-center bg-slate-400 ">
      made with
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-rose-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>{" "}
      by
      <a href="https://www.twitter.com/harixom" target="__blank">
        Hari om Singh
      </a>
    </div>
  );
};

export default Footer;

import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-black text-white text-center uppercase py-16 px-24">
      <div className="w-full flex justify-between">
        <Link className="cursor-pointer" to="/">
          HOME
        </Link>

        <Link className="cursor-pointer" to="/technology">
          TECHNOLOGY
        </Link>

        <Link className="cursor-pointer" to="/science">
          Science
        </Link>

        <Link className="cursor-pointer" to="/business">
          Business
        </Link>

        <Link className="cursor-pointer" to="/travel">
          Travel
        </Link>

        <Link className="cursor-pointer" to="/food">
          Food
        </Link>

        <Link className="cursor-pointer" to="/health">
          Health
        </Link>

        <Link className="cursor-pointer" to="/sports">
          Sports
        </Link>

        <Link className="cursor-pointer" to="/fashion">
          Fashion
        </Link>
      </div>
      <p className="text-xs mt-3">Copyright © 2019</p>
    </div>
  );
};

export default Footer;

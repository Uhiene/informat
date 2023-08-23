import React from "react";
import purpleBg from "../../images/greenBG.svg";
import subscribe from "../../images/subscribe.svg";

const Subscribe = () => {
  return (
    <div className="bg-[#F2F0F5] py-16 px-24 flex items-end gap-10">
      <div
        style={{
          backgroundImage: `url(${purpleBg})`,
        }}
        className="w-48 h-44  bg-no-repeat"
      >
        <p className="font-medium text-[100px] text-center">@</p>
      </div>
      <div className="w-1/2 space-y-2">
        <h1 className="text-xl">Subscribe to INFORMAT Email Briefings</h1>
        <p className="font-lg text-[#5A6372]">
          Sign up for our daily newsletter and get the best of The INFORMAT in
          your in-box.
        </p>
        <input
          type="text"
          placeholder="Your email"
          className="border-b bg-transparent border-[#5A6372] placeholder:text-md placeholder:text-[#5A6372]"
        />
        <div className="flex items-center gap-2">
          <img src={subscribe} alt="" />
          <p className="font-bold text-xs text-[#806799]">SUBSCRIBE</p>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;

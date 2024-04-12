import React from "react";
import chatbotImg from "../assets/simplechatbots.png";
import TickMark from "../assets/TickMark";
const Topbar = () => {
  return (
    <div className="px-[20px] w-full py-[10px] flex flex-row gap-[10px]  rounded-t-[20px] bg-[#EFF3FD] shadow-topbarShadow">
      <div className="relative h-fit">
        <img
          src={chatbotImg}
          className="w-[50px] h-[50px] rounded-full"
          alt=""
        />
        
          <div className="w-[8px] h-[8px] bg-green rounded-full absolute bottom-[4px] right-1"></div>
      
      </div>
      <div className="w-full">
        <div className="flex flex-row gap-[10px] items-center">
          <h3 className="text-lg text-textBlue font-semibold">Timpu</h3>
          <TickMark />
        </div>
        <div className="flex flex-row items-center justify-between w-full">
        <p className="text-textBlue">Chat assistant</p>
        <p className="text-textBlue text-[15px]"><div className="w-[8px] inline-block mr-2 h-[8px] bg-green rounded-full"></div>
        Online</p>
        </div>
      </div>
    </div>
  );
};

export default Topbar;

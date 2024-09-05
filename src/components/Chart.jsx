import React from "react";
import StockChart from "./StockChart";
import compareIcon from "../assets/images/compare-icon.svg";
import fullScreenIcon from "../assets/images/full-screen-icon.svg";

const Chart = () => {
  return (
    <div className="m-20">
      <div>
        <h1 className="text-[70px] font-circular leading-[88px] text-[#1A243A] flex items-start">
          63,179.71
          <sup className="text-[24px] font-circular leading-7 text-[#BDBEBF] self-center">
            USD
          </sup>
        </h1>
        <p className="text-lg font-circular leading-5 text-[#67BF6B] mt-2">
          +2,161.42 (3.54%)
        </p>
      </div>
      <div className="flex gap-16 mt-8">
        <button className="text-lg font-circular leading-5 text-[#6F7177]">
          Summary
        </button>
        <button className="text-lg font-circular leading-5 text-[#1A243A] border-b-[3px] border-[#4B40EE]">
          Chart
        </button>
        <button className="text-lg font-circular leading-5 text-[#6F7177]">
          Statistics
        </button>
        <button className="text-lg font-circular leading-5 text-[#6F7177]">
          Analysis
        </button>
        <button className="text-lg font-circular leading-5 text-[#6F7177]">
          Settings
        </button>
      </div>
      <div className="flex flex-row justify-between mt-5">
        <div className="flex justify-between gap-5">
          <div className="flex justify-center items-center gap-5">
            <img
              width={24}
              height={24}
              src={fullScreenIcon}
              alt="full-screen-icon"
            />
            <p className="text-lg font-circular leading-5 text-[#6F7177]">
              Fullscreen
            </p>
          </div>
          <div className="flex justify-center items-center gap-5">
            <img width={24} height={24} src={compareIcon} alt="compare-icon" />
            <p className="text-lg font-circular leading-5 text-[#6F7177]">
              Compare
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center gap-5">
          <button className="text-lg font-circular leading-5 text-[#6F7177]">
            1d
          </button>
          <button className="text-lg font-circular leading-5 text-[#6F7177]">
            3d
          </button>
          <button className="text-lg font-circular leading-5 text-white w-[49px] h-[33px] bg-[#4B40EE] border-2 rounded-md justify-center">
            1w
          </button>
          <button className="text-lg font-circular leading-5 text-[#6F7177]">
            1m
          </button>
          <button className="text-lg font-circular leading-5 text-[#6F7177]">
            6m
          </button>
          <button className="text-lg font-circular leading-5 text-[#6F7177]">
            1y
          </button>
          <button className="text-lg font-circular leading-5 text-[#6F7177]">
            max
          </button>
        </div>
      </div>
      <div className="mt-5">
        <StockChart />
      </div>
    </div>
  );
};

export default Chart;

import React, { useState } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Summary from "./Summary";
import StockChart from "./StockChart";
import Statistics from "./Statistics";
import Analysis from "./Analysis";
import Settings from "./Settings";
import compareIcon from "../assets/images/compare-icon.svg";
import fullScreenIcon from "../assets/images/full-screen-icon.svg";

const Chart = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState("1w");
  const location = useLocation();

  const handleTimeframeChange = (timeframe) => {
    setSelectedTimeframe(timeframe);
  };

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
        <Link to="/summary">
          <button
            className={`text-lg font-circular leading-5 ${
              location.pathname === "/summary"
                ? "border-b-[3px] border-[#4B40EE] text-[#1A243A]"
                : "text-[#6F7177]"
            }`}
          >
            Summary
          </button>
        </Link>
        <Link to="/">
          <button
            className={`text-lg font-circular leading-5 ${
              location.pathname === "/"
                ? "border-b-[3px] border-[#4B40EE] text-[#1A243A]"
                : "text-[#6F7177]"
            }`}
          >
            Chart
          </button>
        </Link>
        <Link to="/statistics">
          <button
            className={`text-lg font-circular leading-5 ${
              location.pathname === "/statistics"
                ? "border-b-[3px] border-[#4B40EE] text-[#1A243A]"
                : "text-[#6F7177]"
            }`}
          >
            Statistics
          </button>
        </Link>
        <Link to="/analysis">
          <button
            className={`text-lg font-circular leading-5 ${
              location.pathname === "/analysis"
                ? "border-b-[3px] border-[#4B40EE] text-[#1A243A]"
                : "text-[#6F7177]"
            }`}
          >
            Analysis
          </button>
        </Link>
        <Link to="/settings">
          <button
            className={`text-lg font-circular leading-5 ${
              location.pathname === "/settings"
                ? "border-b-[3px] border-[#4B40EE] text-[#1A243A]"
                : "text-[#6F7177]"
            }`}
          >
            Settings
          </button>
        </Link>
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
          <button
            onClick={() => handleTimeframeChange("1d")}
            className={`text-lg font-circular leading-5 ${
              selectedTimeframe === "1d"
                ? "text-white bg-[#4B40EE] border-2 rounded-md justify-center"
                : "text-[#6F7177]"
            } w-[49px] h-[33px] `}
          >
            1d
          </button>
          <button
            onClick={() => handleTimeframeChange("3d")}
            className={`text-lg font-circular leading-5 ${
              selectedTimeframe === "3d"
                ? "text-white bg-[#4B40EE] border-2 rounded-md justify-center"
                : "text-[#6F7177]"
            } w-[49px] h-[33px] `}
          >
            3d
          </button>
          <button
            onClick={() => handleTimeframeChange("1w")}
            className={`text-lg font-circular leading-5 ${
              selectedTimeframe === "1w"
                ? "text-white bg-[#4B40EE] border-2 rounded-md justify-center"
                : "text-[#6F7177]"
            } w-[49px] h-[33px] `}
          >
            1w
          </button>
          <button
            onClick={() => handleTimeframeChange("1m")}
            className={`text-lg font-circular leading-5 ${
              selectedTimeframe === "1m"
                ? "text-white bg-[#4B40EE] border-2 rounded-md justify-center"
                : "text-[#6F7177]"
            } w-[49px] h-[33px] `}
          >
            1m
          </button>
          <button
            onClick={() => handleTimeframeChange("6m")}
            className={`text-lg font-circular leading-5 ${
              selectedTimeframe === "6m"
                ? "text-white  bg-[#4B40EE] border-2 rounded-md justify-center"
                : "text-[#6F7177]"
            } w-[49px] h-[33px] `}
          >
            6m
          </button>
          <button
            onClick={() => handleTimeframeChange("1y")}
            className={`text-lg font-circular leading-5 ${
              selectedTimeframe === "1y"
                ? "text-white bg-[#4B40EE] border-2 rounded-md justify-center"
                : "text-[#6F7177]"
            } w-[49px] h-[33px] `}
          >
            1y
          </button>
          <button
            onClick={() => handleTimeframeChange("mx")}
            className={`text-lg font-circular leading-5 ${
              selectedTimeframe === "mx"
                ? "text-white bg-[#4B40EE] border-2 rounded-md justify-center"
                : "text-[#6F7177]"
            } w-[49px] h-[33px] `}
          >
            max
          </button>
        </div>
      </div>
      <div className="mt-5">
        <Routes>
          <Route path="/summary" element={<Summary />} />
          <Route
            path="/"
            element={<StockChart selectedTimeframe={selectedTimeframe} />}
          />
          <Route path="/analysis" element={<Analysis />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
};

export default Chart;

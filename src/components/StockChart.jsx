import React, { useState, useEffect } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import axios from "axios";

const StockChart = () => {
  const [data, setData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [tooltipPosition, setTooltipPosition] = useState(0);

  const API_KEY = "IR967YO1QUTCJF6X";

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-[#4B40EE] text-white p-2 rounded-md">
          <p className="intro text-sm">{`${payload[0].value.toLocaleString()}`}</p>
        </div>
      );
    }

    return null;
  };

  const fetchStockData = async () => {
    const randomPrice = (Math.random() * 100000).toFixed(2);
    const newData = {
      name: new Date().toLocaleTimeString(),
      value: parseFloat(randomPrice),
    };
    setTooltipPosition(parseFloat(randomPrice));
    setData((prevData) => {
      const updatedData = [...prevData, newData].slice(-100);
      setActiveIndex(updatedData.length - 1);
      return updatedData;
    });
  };

  useEffect(() => {
    fetchStockData();
    const interval = setInterval(fetchStockData, 1000);
    return () => clearInterval(interval);
  }, []);

  // Tried with Alpha Vintage API but not getting appropriate data

  //   useEffect(() => {
  //     const fetchStockData = async () => {
  //       try {
  //         const API_KEY = "IR967YO1QUTCJF6X";
  //         let StockSymbol = "AMZN";
  //         const response = await axios.get(
  //           `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${StockSymbol}&apikey=${API_KEY}`
  //         );
  //         setData(response.data["Time Series (Daily)"]);
  //       } catch (error) {
  //         console.error("Error fetching stock data:", error);
  //       }
  //       const interval = setInterval(fetchStockData, 1000);
  //       return () => clearInterval(interval);
  //     };

  //     fetchStockData();
  //   }, []);

  // Tried with coingecko API but not getting appropriate data

  //   useEffect(() => {
  //     const fetchCryptoData = async () => {
  //       try {
  //         const response = await axios.get(
  //           "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart",
  //           {
  //             params: {
  //               vs_currency: "usd",
  //               days: "1",
  //               interval: "minute",
  //             },
  //           }
  //         );
  //         const prices = response.data.prices.map((price) => ({
  //           name: new Date(price[0]).toLocaleTimeString(),
  //           value: price[1],
  //         }));
  //         setData(prices.slice(-50));
  //       } catch (error) {
  //         console.error("Error fetching crypto data", error);
  //       }
  //     };

  //     fetchCryptoData();

  //     const interval = setInterval(fetchCryptoData, 60000); // Update every 60 seconds

  //     return () => clearInterval(interval);
  //   }, []);

  return (
    <div>
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{
            top: 10,
            left: 0,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="0">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity={0.5} />
              <stop offset="100%" stopColor="#E8E7FF" stopOpacity={0.5} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip
            content={<CustomTooltip />}
            position={{ x: 1220, y: { tooltipPosition } }}
            active={true}
            activeIndex={activeIndex}
          />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#8884d8"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorUv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StockChart;

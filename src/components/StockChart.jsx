import React, { useState, useEffect } from "react";
import {
  Area,
  Bar,
  CartesianGrid,
  ComposedChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import {
  graphDatafor1d,
  graphDatafor3d,
  graphDatafor1w,
  graphDatafor1m,
  graphDatafor6m,
  graphDatafor1y,
  graphDataforMax,
} from "../constants/data";

const StockChart = ({ selectedTimeframe }) => {
  const [data, setData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [tooltipPosition, setTooltipPosition] = useState(0);
  const [lastValue, setLastValue] = useState(null);
  const [maxValue, setMaxValue] = useState(null);

  const getDataForTimeframe = () => {
    switch (selectedTimeframe) {
      case "1d":
        return graphDatafor1d;
      case "3d":
        return graphDatafor3d;
      case "1w":
        return graphDatafor1w;
      case "1m":
        return graphDatafor1m;
      case "6m":
        return graphDatafor6m;
      case "1y":
        return graphDatafor1y;
      case "mx":
        return graphDataforMax;
      default:
        return graphDatafor1w;
    }
  };

  useEffect(() => {
    const selectedData = getDataForTimeframe();
    setData(selectedData);

    const lastEntry = selectedData[selectedData.length - 1];
    setLastValue(lastEntry);

    const maxEntry = selectedData.reduce((max, entry) =>
      entry.uv > max.uv ? entry : max
    );
    setMaxValue(maxEntry);
  }, [selectedTimeframe]);

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-[#4B40EE] rounded-md">
          <p className="text-sm text-[#FFFFFF] p-1">
            Max: {maxValue?.uv?.toLocaleString()} <br />
            Last: {lastValue?.uv?.toLocaleString()}
          </p>
        </div>
      );
    }

    return null;
  };

  return (
    <div>
      <ResponsiveContainer width="100%" height={400}>
        <ComposedChart
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
            dataKey="uv"
            stroke="#8884d8"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorUv)"
          />
          <Bar
            type="monotone"
            dataKey="pv"
            stroke="#E6E8EB"
            barSize={10}
            strokeWidth={2}
            fillOpacity={1}
            opacity={1}
            fill="#E6E8EB"
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StockChart;

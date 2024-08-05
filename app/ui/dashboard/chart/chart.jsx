"use client";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Chart = () => {
  const data = [
    {
      name: "Sun",
      visit: 4000,
      click: 2400,
    },
    {
      name: "Mon",
      visit: 3000,
      click: 1398,
    },
    {
      name: "Tue",
      visit: 2000,
      click: 3800,
    },
    {
      name: "Wed",
      visit: 2780,
      click: 3908,
    },
    {
      name: "Thu",
      visit: 1890,
      click: 4800,
    },
    {
      name: "Fri",
      visit: 2390,
      click: 3800,
    },
    {
      name: "Sat",
      visit: 3490,
      click: 4300,
    },
  ];
  return (
    <div
      className="text-start mt-5"
      style={{ backgroundColor: "var(--bgsoft)" }}
    >
      <h2 className="mt-5 ms-4">Weekly Recap</h2>
      <LineChart
        className="text-center w-screen me-6"
        width={900}
        height={450}
        data={data}
        margin={{ top: 20, right: 0, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="visit" stroke="#8884d8" />
        <Line type="monotone" dataKey="click" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
};

export default Chart;

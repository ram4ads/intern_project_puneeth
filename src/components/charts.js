import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";


function Charts() {
  const [barData, setBarData] = useState(0);
  console.log(barData);
  

  useEffect(() => {
    const fetchedData = async () => {
      try {
        const responeValue = await fetch("http://localhost:8000/value");
        const value = await responeValue.json();
        console.log(value);
        setBarData(value);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchedData();
  });

  return (
    <BarChart width={800} height={400} data={barData}>
      <CartesianGrid strokeDasharray="3 3" />
       <XAxis dataKey="date" />
       <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="click_count" fill="blue" />
    </BarChart>
  );
}
export default Charts;

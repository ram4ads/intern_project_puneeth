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
  }, []);


  /*const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const time = payload[0].payload.hour;
      
      
  
      return (
        <div className="custom-tooltip">
          <p>{`Time: ${time}`}</p>
          
          
          
        </div>
      );
    }
  
    return null;
  };
*/

  return (
    <BarChart width={800} height={500} data={barData}>
      <CartesianGrid strokeDasharray="3 3" />
       <XAxis dataKey="Time_between"/>
       <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="link1" fill="Maroon" barSize={18}/>
      <Bar dataKey="link2" fill="Teal" barSize={18}/>
     
      
    </BarChart>
  );
}
export default Charts;

import React, {useState, useEffect} from 'react'
import { PieChart, Pie, 
    Tooltip,
    Legend,
    Cell,} from "recharts"



function  PieChartV() {
    const [pieData, setPieData] = useState(0);
    console.log(pieData);
    
  
    useEffect(() => {
      const fetchedData = async () => {
        try {
          const responeValue = await fetch("http://localhost:8000/poll");
          const value = await responeValue.json();
          console.log(value);
          setPieData(value);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      fetchedData();
    }, []);
  
  
  return (
   <PieChart width={600} height={400}>
    <Tooltip/>
    <Legend/>
    <Pie
    data={pieData}
    dataKey="count"
    nameKey="link"
    cx="50%"
    cy="50%"
    outerRadius={80}
    fill='#8884d8'    
    label>
        <Cell name="link1" fill="#a44c9e"/>
        <Cell name="link2" fill="#b3d23f"/>
        
    </Pie>

   </PieChart>
  
    
  )
}

export default PieChartV
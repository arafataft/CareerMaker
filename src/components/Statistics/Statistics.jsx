import React from 'react';
import { PieChart, Tooltip,Pie } from "recharts";

const data = [
  { name: "Assignment 1", value: 57 },
  { name: "Assignment 2", value: 59 },
  { name: "Assignment 3", value: 60 },
  { name: "Assignment 4", value: 60 },
  { name: "Assignment 5", value: 58 },
  { name: "Assignment 6", value: 58 },
  { name: "Assignment 7", value: 60 }
];

const Statistics = () => {
    return (
        <PieChart width={400} height={400}>
      <Pie
        dataKey="value"
        startAngle={360}
        endAngle={0}
        data={data}
        cx={200}
        cy={200}
        outerRadius={80}
        fill="#8884d8"
        label
      />
      <Tooltip />
    </PieChart>
    );
};

export default Statistics;
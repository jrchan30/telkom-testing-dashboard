import React from 'react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  AreaChart,
  Area,
  PieChart,
  Pie,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from 'recharts';

const GraphBlock = ({ type, data }) => {
  const renderChart = () => {
    switch (type) {
      case 'pie':
        return (
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="time"
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#82ca9d"
              isAnimationActive={false}
            />
          </PieChart>
        );
      case 'line':
        return (
          <LineChart data={data} margin={{ left: 10, right: 10 }}>
            <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.1} />
            <XAxis dataKey="time" />
            <YAxis dataKey="value" mirror />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#82ca9d"
              dot={false}
              isAnimationActive={false}
            />
          </LineChart>
        );
      case 'bar':
        return (
          <BarChart data={data} margin={{ left: 10, right: 10 }}>
            <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.1} />
            <XAxis dataKey="time" />
            <YAxis dataKey="value" mirror />
            <Bar dataKey="value" fill="#82ca9d" isAnimationActive={false} />
          </BarChart>
        );
      case 'area':
        return (
          <AreaChart data={data} margin={{ left: 10, right: 10 }}>
            <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.1} />
            <XAxis dataKey="time" />
            <YAxis dataKey="value" mirror />
            <Area
              dataKey="value"
              fill="#82ca9d"
              stroke="#82ca9d"
              isAnimationActive={false}
            />
          </AreaChart>
        );
      default:
        return null;
    }
  };
  return (
    <ResponsiveContainer width="100%" height="100%">
      {renderChart()}
    </ResponsiveContainer>
  );
};

export default GraphBlock;

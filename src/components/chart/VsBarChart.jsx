import "./chart.scss";
import React, { useState, useEffect } from "react";
import axios from "../axios/Axios";
import {
  BarChart,
  Legend,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const VsBarChart = ({ title, year, quarter }) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `/api/stats/sales_vs_customer_vs_lead/?year=${year}&quarter=${quarter}`
        );
        setData(response.data);
        setLoading(false);
        console.log("vsBar data", response.data);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [year, quarter]);

  if (loading) {
    return (
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // Custom tooltip formatter function
  // const tooltipFormatter = (value, name) => {
  //   switch (name) {
  //     case "Total_Expense":
  //       return [`₹${value.toLocaleString()}`, "Total Expense"];
  //     case "Total_Leads":
  //       return [value, "Total Leads"];
  //     case "Total_Customer_Acquired":
  //       return [value, "Total Customer Acquired"];
  //     default:
  //       return [value, name];
  //   }
  // };

  // Custom legend formatter function
  const legendFormatter = (value) => {
    switch (value) {
      case "Total_Expense":
        return "Total Expense (in ₹ lac.)";
      case "Total_Leads":
        return "Total Leads";
      case "Total_Customer_Acquired":
        return "Total Customer Acquired";
      default:
        return value;
    }
  };

  return (
    <div className="chart">
      <div className="title">{title}</div>
      <ResponsiveContainer width={825} height="80%">
        <BarChart
          height={10}
          data={data}
          barGap={15}
          barSize={175}
          margin={{ top: 25, right: 90 }}
        >
          <XAxis dataKey="Year_Qua" className="xAxisLabel" />
          <YAxis className="yAxisLabel" />
          {/* <Tooltip formatter={tooltipFormatter} /> */}
          {/* want to show data when cursor is on the bar*/}
          <Legend
            formatter={legendFormatter}
            wrapperStyle={{ fontSize: "14px" }}
          />
          <Bar dataKey="Total_Expense" fill="#FF6D80">
            <LabelList
              dataKey="Total_Expense"
              position="top"
              fill="#FF6D80"
              formatter={(value) => `₹${value.toLocaleString()}`}
            />
          </Bar>
          <Bar dataKey="Total_Leads" fill="#8884d8">
            <LabelList
              dataKey="Total_Leads"
              position="top"
              fill="#8884d8"
              formatter={(value) => value}
            />
          </Bar>
          <Bar dataKey="Total_Customer_Acquired" fill="#82ca9d">
            <LabelList
              dataKey="Total_Customer_Acquired"
              position="top"
              fill="#82ca9d"
              formatter={(value) => value}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default VsBarChart;

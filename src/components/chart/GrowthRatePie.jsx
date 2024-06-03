import "./chart.scss";
import React, { useState, useEffect } from "react";
import axios from "../axios/Axios";
import { PieChart } from "@mui/x-charts/PieChart";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import api from "../../api";

const GrowthRatePie = ({
  title,
  section,
  parturl,
  year,
  quarter,
  margin_left,
  outer_radius_size,
  start_angle,
  end_angle,
  cx_axis,
  cy_axis,
}) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await api.get(
          `/api/${section}/${parturl}/?year=${year}&quarter=${quarter}`
        );
        setData(response.data);
        setLoading(false);
        console.log("growth rate pie data", response.data);
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

  const getArcLabel = (params) => {
    console.log("ArcLabel params:", params.percent);
    return `${params.percent}%`;
  };

  const sizing = {
    margin: { left: margin_left },
    legend: { hidden: true },
    font_size: 10,
  };

  // let data;
  // data = [
  //   {
  //     id: 1,
  //     label: "Delivered",
  //     value: 90,
  //   },
  //   {
  //     id: 2,
  //     label: "In transit",
  //     value: 62,
  //   },
  //   {
  //     id: 3,
  //     label: "Shipped",
  //     value: 68,
  //   },
  //   {
  //     id: 4,
  //     label: "Return",
  //     value: 8,
  //   },
  // ];

  return (
    <div className="chart">
      <div className="title">{title}</div>
      <div className="pie">
        <PieChart
          series={[
            {
              // data: data,
              arcLabel: getArcLabel,
              arcLabelMinAngle: 30,
              data: data.map((item) => ({
                ...item,
                label: `${item.label}: `,
                color:
                  item.percent < 0 ? "rgba(255, 99, 132, 0.8)" : "lightgreen", // Assign crimson color if value is negative
              })),
              valueFormatter: (v) => {
                return `₹ ${v.revenue} -> ${v.percent}%`;
              },
              highlightScope: { faded: "global", highlighted: "item" },
              faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
              innerRadius: 30,
              outerRadius: outer_radius_size,
              // paddingAngle: 2,
              // cornerRadius: 5,
              startAngle: start_angle,
              endAngle: end_angle,
              cx: cx_axis,
              cy: cy_axis,
            },
          ]}
          width={400}
          height={265}
          {...sizing}
        />
      </div>
    </div>
  );
};

export default GrowthRatePie;

// src/StackedBarChart.js
import React, { useState, useEffect } from "react";
import axios from "../axios/Axios";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { Bar } from "react-chartjs-2";
import { Container } from "@mui/material";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "./chart.scss";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const StackedBarChart = ({ title, section, parturl, year, quarter }) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `/api/${section}/${parturl}/?year=${year}&quarter=${quarter}`
        );

        // Add background colors to the datasets
        const backgroundColors = [
          "rgba(75, 192, 192, 0.8)",
          "rgba(153, 102, 60, 0.8)",
          "rgba(255, 159, 64, 0.8)",
          "rgba(255, 99, 132, 0.8)",
          "rgba(54, 162, 235, 0.8)",
          "rgba(255, 306, 86, 0.8)",
          "rgba(75, 102, 192, 0.8)",
        ];

        const updatedDatasets = response.data.datasets.map(
          (dataset, index) => ({
            ...dataset,
            backgroundColor: backgroundColors[index % backgroundColors.length],
          })
        );

        setData({
          labels: response.data.labels,
          datasets: updatedDatasets,
        });

        // setData(response.data);
        setLoading(false);
        console.log("stacked bar data", response.data);
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

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Company Performance: Net Profit, Revenue, and Expenses",
      },
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };

  return (
    <div className="chart">
      <div className="title">{title}</div>
      <Container className="stack-chart-container">
        <Bar data={data} options={options} />
      </Container>
    </div>
  );
};

export default StackedBarChart;

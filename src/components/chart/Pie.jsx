import "./chart.scss";
import React, { useState, useEffect } from "react";
// import axios from "../axios/Axios";
import { PieChart } from "@mui/x-charts/PieChart";
// import CircularProgress from "@mui/material/CircularProgress";
// import Box from "@mui/material/Box";

const Pie = ({ year, quarter }) => {
  // const [data, setData] = useState({});
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       setLoading(true);
  //       const response = await axios.get(
  //         `/api/order/order_status_distribution/?year=${year}&quarter=${quarter}`
  //       );
  //       setData(response.data);
  //       setLoading(false);
  //       console.log("data", response.data);
  //     } catch (error) {
  //       setError(error);
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, [year, quarter]);

  // if (loading) {
  //   return (
  //     <Box sx={{ display: "flex" }}>
  //       <CircularProgress />
  //     </Box>
  //   );
  // }

  // if (error) {
  //   return <div>Error: {error.message}</div>;
  // }

  let data;
  data = [
    {
      id: 1,
      label: "Delivered",
      value: 90,
    },
    {
      id: 2,
      label: "In transit",
      value: 62,
    },
    {
      id: 3,
      label: "Shipped",
      value: 68,
    },
    {
      id: 4,
      label: "Return",
      value: 8,
    },
  ];

  return (
    <div className="chart">
      <div className="title">Order Status Distribution</div>
      <div className="pie">
        <PieChart
          series={[
            {
              data: data,
              highlightScope: { faded: "global", highlighted: "item" },
              faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
              innerRadius: 65,
              outerRadius: 100,
              paddingAngle: 2,
              cornerRadius: 5,
              startAngle: -180,
              endAngle: 180,
            },
          ]}
          width={400}
          height={265}
        />
      </div>
    </div>
  );
};

export default Pie;

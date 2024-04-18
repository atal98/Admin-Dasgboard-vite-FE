import "./card.scss";
import React, { useState, useEffect } from "react";
// import axios from "../axios/Axios";
// import CircularProgress from "@mui/material/CircularProgress";
// import Box from "@mui/material/Box";

// { type, title, symbol, section, parturl, year, quarter }
const Cards = ({ type, title, symbol }) => {
  // const [data, setData] = useState({});
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       setLoading(true);
  //       const response = await axios.get(
  //         `/api/${section}/${parturl}/?year=${year}&quarter=${quarter}`
  //       );
  //       setData(response.data);
  //       setLoading(false);
  //       // console.log("data", response.data);
  //     } catch (error) {
  //       setError(error);
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, [section, parturl, year, quarter]);

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

  let value;

  switch (type) {
    case "user":
      value = 25; // data.total_user

      break;
    case "retention":
      value = 90; //data.total_user_rention_rate

      break;
    case "churn":
      value = 10; // data.total_user_churn_rate

      break;
    case "conversion":
      value = 40; // data.total_user_conversin_rate

      break;
    case "order":
      value = 150; // data.total_order

      break;
    case "order_fulfill":
      value = 100; // data.total_order_fulfill

      break;
    case "order_value":
      value = 20000; // data.total_order_value

      break;
    case "avg_order":
      value = 15000; // data.total_avg_order_value

      break;
    case "return":
      value = 2; // data.total_order_return_rate

      break;
    case "delivery":
      value = 100; //data.total_delivery

      break;
    case "shipped":
      value = 10; // data.shipped

      break;
    case "intransit":
      value = 10; // data.in_transit

      break;
    case "delivered":
      value = 78; // data.delivered

      break;
    case "return_delivered":
      value = 2; // data.return_delivered

      break;
    default:
      break;
  }

  return (
    <div className="card">
      <div className="title">
        <span>{title}</span>
      </div>
      <div className="counter">
        <span>
          {symbol === "%" ? `${value} ${symbol}` : `${symbol} ${value}`}
        </span>
      </div>
    </div>
  );
};

export default Cards;

import "./card.scss";
import React, { useState, useEffect } from "react";
import axios from "../axios/Axios";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import api from "../../api";

// { type, title, symbol, section, parturl, year, quarter }
const Cards = ({ type, title, symbol, section, parturl, year, quarter }) => {
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
        setData(response.data);
        setLoading(false);
        // console.log("data", response.data);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [section, parturl, year, quarter]);

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

  let value;

  switch (type) {
    case "user":
      value = data.total_user; // data.total_user

      break;
    case "retention":
      value = data.total_user_rention_rate; //data.total_user_rention_rate

      break;
    case "churn":
      value = data.total_user_churn_rate; // data.total_user_churn_rate

      break;
    case "conversion":
      value = data.total_user_conversin_rate; // data.total_user_conversin_rate

      break;
    case "order":
      value = data.total_order; // data.total_order

      break;
    case "order_fulfill":
      value = data.total_order_fulfill; // data.total_order_fulfill

      break;
    case "order_value":
      value = data.total_order_value; // data.total_order_value

      break;
    case "avg_order":
      value = data.total_avg_order_value; // data.total_avg_order_value

      break;
    case "return":
      value = data.total_order_return_rate; // data.total_order_return_rate

      break;
    case "delivery":
      value = data.total_delivery; //data.total_delivery

      break;
    case "shipped":
      value = data.shipped; // data.shipped

      break;
    case "intransit":
      value = data.in_transit; // data.in_transit

      break;
    case "delivered":
      value = data.delivered; // data.delivered

      break;
    case "return_delivered":
      value = data.return_delivered; // data.return_delivered

      break;
    case "cac":
      value = data.cac; // data.return_delivered

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

import React, { useState, useEffect } from "react";
import "./widget.scss";
import axios from "../axios/Axios";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import { Link } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

// { parturl, year, quarter }
const Widget = ({ type, parturl, year, quarter }) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `/api/dashboard/${parturl}/?year=${year}&quarter=${quarter}`
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
  }, [parturl, year, quarter]);

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

  let count, title, isMoney, icon, link, linkto;

  switch (type) {
    case "user":
      title = "TOTAL USERS";
      isMoney = false;
      icon = (
        <PersonOutlinedIcon
          className="icon"
          style={{
            color: "crimson",
            backgroundColor: "rgba(255, 0, 0, 0.2)",
          }}
        />
      );
      link = "See all users";
      linkto = "/users";
      count = data.total_user; // data.total_user

      break;
    case "order_fulfill":
      title = "TOTAL ORDERS FULFILL";
      isMoney = false;
      icon = (
        <ShoppingCartOutlinedIcon
          className="icon"
          style={{
            backgroundColor: "rgba(218, 165, 32, 0.2)",
            color: "goldenrod",
          }}
        />
      );
      link = "View all orders";
      linkto = "/orders";
      count = data.total_order_fulfill; //data.total_order_fulfill

      break;
    case "revenue":
      title = "TOTAL REVENUE";
      isMoney = true;
      icon = (
        <MonetizationOnOutlinedIcon
          className="icon"
          style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
        />
      );
      link = "View details";
      linkto = "/";
      count = data.total_revenue; //data.total_revenue

      break;
    case "profit":
      title = "TOTAL GROSS PROFIT";
      isMoney = true;
      icon = (
        <TrendingUpOutlinedIcon
          className="icon"
          style={{
            backgroundColor: "rgba(128, 0, 128, 0.2)",
            color: "purple",
          }}
        />
      );
      link = "View details";
      linkto = "/";
      count = data.total_gross_profit; //data.total_gross_profit

      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{title}</span>
        <span className="counter">
          {isMoney && "₹"} {count}
        </span>
        <Link to={linkto} style={{ textDecoration: "none" }}>
          <span className="link">{link}</span>
        </Link>
      </div>
      <div className="right">{icon}</div>
    </div>
  );
};

export default Widget;

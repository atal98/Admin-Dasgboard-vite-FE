// import * as React from "react";
import React, { useState, useEffect } from "react";
// import axios from "../axios/Axios";
import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns } from "../../datatablesource";
import { Link } from "react-router-dom";
// import CircularProgress from "@mui/material/CircularProgress";
// import Box from "@mui/material/Box";

// { year, quarter }
export default function DataTable() {
  // const [data, setData] = useState({});
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       setLoading(true);
  //       const response = await axios.get(
  //         `/api/user/user_table/?year=${year}&quarter=${quarter}`
  //       );
  //       // Add a unique id to each row
  //       const rowsWithIds = response.data.map((row, index) => ({
  //         ...row,
  //         id: index + 1, // Adding 1 to avoid id being 0
  //       }));
  //       setData(rowsWithIds);
  //       setLoading(false);
  //       // setData(response.data);
  //       // setLoading(false);
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

  const actionCoulmn = [
    {
      field: "action",
      headerName: "Action",
      width: 75,
      renderCell: (params) => {
        const userId = params.row.userid;
        return (
          <div className="cellAction">
            <Link
              to={`/users/${userId}`}
              style={{ textDecoration: "none" }}
              className="link"
            >
              <span className="viewButton">View</span>
            </Link>
          </div>
        );
      },
    },
  ];

  let data;

  data = [
    {
      id: 1,
      userid: 1,
      user_name: "Rohan Kumar",
      city: "Mumbai",
      state: "Maharashtra",
      age: 25,
      phone: "+919876543210",
      email: "rohan.kumar@example.com",
      gender: "Male                ",
    },
    {
      id: 2,
      userid: 2,
      user_name: "Neha Sharma",
      city: "Delhi",
      state: "Uttar Pradesh",
      age: 30,
      phone: "+919876543211",
      email: "neha.sharma@example.com",
      gender: "Female              ",
    },
    {
      id: 6,
      userid: 6,
      user_name: "Pooja Mishra",
      city: "Chennai",
      state: "Tamil Nadu",
      age: 27,
      phone: "+919876543401",
      email: "pooja.mishra@example.com",
      gender: "Female              ",
    },
    {
      id: 7,
      userid: 7,
      user_name: "Rahul Verma",
      city: "Hyderabad",
      state: "Telangana",
      age: 32,
      phone: "+919876543402",
      email: "rahul.verma@example.com",
      gender: "Male                ",
    },
    {
      id: 8,
      userid: 8,
      user_name: "Kavita Singh",
      city: "Ahmedabad",
      state: "Gujarat",
      age: 29,
      phone: "+919876543403",
      email: "kavita.singh@example.com",
      gender: "Female              ",
    },
    {
      id: 9,
      userid: 9,
      user_name: "Anuj Dubey",
      city: "Pune",
      state: "Maharashtra",
      age: 24,
      phone: "+919876543404",
      email: "anuj.dubey@example.com",
      gender: "Male                ",
    },
    {
      id: 10,
      userid: 10,
      user_name: "Swati Patel",
      city: "Surat",
      state: "Gujarat",
      age: 31,
      phone: "+919876543405",
      email: "swati.patel@example.com",
      gender: "Female              ",
    },
    {
      id: 11,
      userid: 11,
      user_name: "Alok Yadav",
      city: "Lucknow",
      state: "Uttar Pradesh",
      age: 26,
      phone: "+919876543499",
      email: "alok.yadav@example.com",
      gender: "Male                ",
    },
    {
      id: 12,
      userid: 12,
      user_name: "Nisha Gupta",
      city: "Kanpur",
      state: "Uttar Pradesh",
      age: 33,
      phone: "+919876543500",
      email: "nisha.gupta@example.com",
      gender: "Female              ",
    },
    {
      id: 13,
      userid: 13,
      user_name: "Sanjay Singh",
      city: "Agra",
      state: "Uttar Pradesh",
      age: 28,
      phone: "+919876543501",
      email: "sanjay.singh@example.com",
      gender: "Male                ",
    },
    {
      id: 14,
      userid: 14,
      user_name: "Vidya Reddy",
      city: "Vijayawada",
      state: "Andhra Pradesh",
      age: 29,
      phone: "+919876543502",
      email: "vidya.reddy@example.com",
      gender: "Female              ",
    },
    {
      id: 15,
      userid: 15,
      user_name: "Rajesh Sharma",
      city: "Amritsar",
      state: "Punjab",
      age: 36,
      phone: "+919876543503",
      email: "rajesh.sharma@example.com",
      gender: "Male                ",
    },
    {
      id: 3,
      userid: 3,
      user_name: "Amit Patel",
      city: "Bangalore",
      state: "Karnataka",
      age: 28,
      phone: "+919876543212",
      email: "amit.patel@example.com",
      gender: "Male                ",
    },
    {
      id: 4,
      userid: 4,
      user_name: "Priya Singh",
      city: "Jaipur",
      state: "Rajasthan",
      age: 35,
      phone: "+919876543399",
      email: "priya.singh@example.com",
      gender: "Female              ",
    },
    {
      id: 5,
      userid: 5,
      user_name: "Akash Gupta",
      city: "Kolkata",
      state: "West Bengal",
      age: 22,
      phone: "+919876543400",
      email: "akash.gupta@example.com",
      gender: "Male                ",
    },
  ];

  return (
    <div className="datatable">
      <div style={{ height: 390, width: "100%" }}>
        <DataGrid
          rows={data}
          columns={userColumns.concat(actionCoulmn)}
          initialState={{
            pagination: {
              paginationModel: { pageSize: 5 },
            },
          }}
          // pageSizeOptions={[5, 10, 25]}
          checkboxSelection={false}
        />
      </div>
    </div>
  );
}

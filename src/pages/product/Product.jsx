import "./product.scss";
import SideBar from "../../components/sidebar/SideBar";
import NavBar from "../../components/navbar/NavBar";
// import Cards from "../../components/card/Cards";
// import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
// import { useState } from "react";

const Product = () => {
  return (
    <div className="product">
      <div className="wrapper">
        <SideBar />
        <div className="productContainer">
          <NavBar title="Products" />

          {/* <div className="widgets">
            <Cards title="TOTAL PRODUCTS" value={100} />
            <Cards title="PRODUCT SALE" value={200} />
            <Cards title="RETURN RATE" value={150} />
            <Cards title="CONVERSION RATE" value={100} />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Product;

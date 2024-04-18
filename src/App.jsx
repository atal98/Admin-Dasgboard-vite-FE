import Home from "./pages/home/Home";
import Users from "./pages/users/Users";
import SingleUser from "./pages/single_user/Single_User";
// import Login from "./pages/login/Login";
import Product from "./pages/product/Product";
import SingleProduct from "./pages/single_product/Single_Product";
import Order from "./pages/orders/Orders";
import Delivery from "./pages/delivery/Delivery";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { productInputs, userInputs } from "./formSource";
// import "./style/dark.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          {/* <Route path="login" element={<Login />} /> */}

          {/* users */}
          <Route path="users">
            <Route index element={<Users />} />
            <Route path=":userId" element={<SingleUser />} />
            {/* <Route
              path="new"
              element={<New inputs={userInputs} title="Add New User" />}
            /> */}
          </Route>

          {/* products */}
          <Route path="products">
            <Route index element={<Product />} />
            <Route path=":productId" element={<SingleProduct />} />
            {/* <Route
              path="new"
              element={<New inputs={productInputs} title="Add New Product" />}
            /> */}
          </Route>

          {/* orders */}
          <Route path="orders">
            <Route index element={<Order />} />
          </Route>

          {/* delivery */}
          <Route path="delivery">
            <Route index element={<Delivery />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

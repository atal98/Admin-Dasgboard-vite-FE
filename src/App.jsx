import Home from "./pages/home/Home";
import Users from "./pages/users/Users";
import SingleUser from "./pages/single_user/Single_User";
// import Login from "./pages/login/Login";
import Product from "./pages/product/Product";
import SingleProduct from "./pages/single_product/Single_Product";
import Order from "./pages/orders/Orders";
import Delivery from "./pages/delivery/Delivery";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Stats from "./pages/stats/Stats";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import ProtectRoute from "./components/ProtectRoute";
// import { productInputs, userInputs } from "./formSource";
// import "./style/dark.scss";

function RegistorandLogout() {
  localStorage.clear();
  return <Register />;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route path="login" element={<Login />} /> */}
        <Route path="register" element={<RegistorandLogout />} />
        <Route
          path="home"
          element={
            <ProtectRoute>
              <Home />
            </ProtectRoute>
          }
        />

        {/* users */}
        <Route path="users">
          <Route
            index
            element={
              <ProtectRoute>
                <Users />
              </ProtectRoute>
            }
          />
          <Route path=":userId" element={<SingleUser />} />
        </Route>

        {/* products */}
        <Route path="products">
          <Route
            index
            element={
              <ProtectRoute>
                <Product />
              </ProtectRoute>
            }
          />
          <Route path=":productId" element={<SingleProduct />} />
        </Route>

        {/* orders */}
        <Route path="orders">
          <Route
            index
            element={
              <ProtectRoute>
                <Order />
              </ProtectRoute>
            }
          />
        </Route>

        {/* delivery */}
        <Route path="delivery">
          <Route
            index
            element={
              <ProtectRoute>
                <Delivery />
              </ProtectRoute>
            }
          />
        </Route>

        {/* stats */}
        <Route path="stats">
          <Route
            index
            element={
              <ProtectRoute>
                <Stats />
              </ProtectRoute>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

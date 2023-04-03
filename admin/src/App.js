import {
  BrowserRouter as Router,
  Routes,
  Route,
  redirect,
} from "react-router-dom";

import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import "./App.css";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import { useContext } from "react";
import { AuthContext } from "./context/authContext/AuthContext";
import NewList from "./pages/newList/NewList"
import List from "./pages/list/List";
import ListList from "./pages/listList/ListList";

function App() {
  const { user } = useContext(AuthContext);

  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route exact path="/" element={user ? <Home /> : <Login />} />
          <Route exact path="/login" element={!user ? <Login /> : <Home />} />
          <Route exact path="/users" element={<UserList />} />
          <Route exact path="/user/:userId" element={<User />} />
          <Route exact path="/newUser" element={<NewUser />} />
          <Route exact path="/movies" element={<ProductList />} />
          <Route exact path="/product/:productId" element={<Product />} />
          <Route exact path="/newMovie" element={<NewProduct />} />
          <Route path="/lists" element={<ListList />} />
          <Route path="/list/:listId" element={<List />} />
          <Route path="/newlist" element={<NewList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

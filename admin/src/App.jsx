import Topbar from './components/topbar/Topbar'
import Sidebar from "./components/sidebar/Sidebar";
import "./App.css"
import Home from './pages/home/Home';
import User from './pages/user/User';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import UserList from './pages/userList/UserList';
import NewUser from './pages/newUser/NewUser';
import ProductList from './pages/productList/ProductList';
import Product from './pages/product/Product';
import NewProduct from './pages/newProduct/NewProduct';

const App = () => {
  return (
  <div>
    <BrowserRouter>
      <Topbar />
      <div className="container">
        <Sidebar />
        
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/newUser" element={<NewUser />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/newProduct" element={<NewProduct />} />
          <Route path="/users/:userId" element={<User />} />
          <Route path="/products/:productId" element={<Product />} />
        </Routes>
      </div>
    </BrowserRouter>
  </div>);
};

export default App;

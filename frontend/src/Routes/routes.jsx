
import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from "../Layout/Mainlayout.jsx"

// User Pages
import FoodMenu from '../pages/user/FoodMenu';
import MyCart from '../pages/user/MyCart';
import MyProfile from '../pages/user/MyProfile';
import PlaceOrder from '../pages/user/PlaceOrder';

// Admin Pages
import AdminDashboard from '../pages/admin/AdminDashboard';
import OrderList from '../pages/admin/OrderList';

// Authentication Pages


import Login from '../login.jsx';
import Register from '../Register.jsx';

const Router = () => {
  return (
    <Routes>

      {/* Authentication */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* User Routes */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<FoodMenu />} />
        <Route path="/food-menu" element={<FoodMenu />} />
        <Route path="/my-cart" element={<MyCart />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/place-order" element={<PlaceOrder />} />
      </Route>

      {/* Admin Routes */}
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/admin/orders" element={<OrderList />} />

      {/* Not Found */}
      <Route path="*" element={<Navigate to="/" replace />} />

    </Routes>
  );
};

export default Router;

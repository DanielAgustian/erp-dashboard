import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu } from "antd";
import DashboardPage from "./page/dashboard";
import React from "react";
import SideBar from "./components/sidebar";
import LoginPage from "./page/auth/login";
import 'antd/dist/antd.css';
import RegisterPage from "./page/auth/register";
import ForgotPasswordPage from "./page/auth/forgot-password";

const { Header, Content, Footer, Sider } = Layout;

function App() {
  return (
    <>        
          <Routes>
            <Route path="/" element={<LoginPage/>}></Route>
            <Route path="/login" element={<LoginPage/>}></Route>
            <Route path="/register" element={<RegisterPage/>}></Route>
            <Route path="/forgot-password" element={<ForgotPasswordPage/>}></Route>
            <Route path="/dashboard" element={<DashboardPage />}></Route>
          </Routes>
    </>
  );
}

export default App;

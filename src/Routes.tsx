import React from "react";
import { Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import HomePage from "./pages/HomePage";
import CakePage from "./pages/CakePage";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/RegisterPage" element={<RegisterPage />} />
      <Route path="/LoginPage" element={<LoginPage />} />
      <Route path="/ForgotPasswordPage" element={<ForgotPasswordPage/>} />
      <Route path="/ResetPasswordPage" element={<ResetPasswordPage/>} />
      <Route path="/CakePage" element={<CakePage />} />
    </Routes>
  );
};

export default AppRoutes;

import React from "react";
import { Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import LogoutPage from "./pages/LogoutPage";
import HomePage from "./pages/HomePage";
import CakePage from "./pages/CakePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import FAQsPage from "./pages/FAQsPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsOfServicePage from "./pages/TermsOfServicePage";
import CookiePolicyPage from "./pages/CookiePolicyPage";
import OurStoryPage from "./pages/OurStoryPage";
import CareersPage from "./pages/CareersPage";
import AnnouncementsPage from "./pages/AnnouncementsPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import ProfilePage from "./pages/ProfilePage";
import OrderSuccessPage from "./pages/OrderSuccessPage";


import AdminUploadPage from "./pages/AdminUploadPage";
import AdminDeletePage from "./pages/AdminDeletePage";
import AdminViewPage from "./pages/AdminViewPage";
import EditCake from "./pages/EditCake";




const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/RegisterPage" element={<RegisterPage />} />
      <Route path="/LoginPage" element={<LoginPage />} />
      <Route path="/ForgotPasswordPage" element={<ForgotPasswordPage/>} />
      <Route path="/ResetPasswordPage" element={<ResetPasswordPage/>} />
      <Route path="/LogoutPage" element={<LogoutPage/>} />
      <Route path="/CakePage" element={<CakePage />} />
      <Route path="/AboutPage" element={<AboutPage />} />
      <Route path="/ContactPage" element={<ContactPage />} />
      <Route path="/FAQsPage" element={<FAQsPage />} />
      <Route path="/PrivacyPolicyPage" element={<PrivacyPolicyPage />} />
      <Route path="/TermsOfServicePage" element={<TermsOfServicePage />} />
      <Route path="/CookiePolicyPage" element={<CookiePolicyPage />} />
      <Route path="/OurStoryPage" element={<OurStoryPage />} />
      <Route path="/CareersPage" element={<CareersPage />} />
      <Route path="/AnnouncementsPage" element={<AnnouncementsPage />} />
      <Route path="/CartPage" element={<CartPage />} />
      <Route path="/CheckoutPage" element={<CheckoutPage />} />
      <Route path="/ProfilePage" element={<ProfilePage />} />
      <Route path="/OrderSuccessPage" element={<OrderSuccessPage />} />


      {/* <Route path="/" element={<AdminUploadPage/>} />
      <Route path="/AdminDeletePage" element={<AdminDeletePage/>} />
      <Route path="/AdminViewPage" element={<AdminViewPage/>} />
      <Route path="/EditCake" element={<EditCake/>} /> */}
    </Routes>
  );
};

export default AppRoutes;

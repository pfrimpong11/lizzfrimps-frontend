import React, { useState } from "react";
import axios from "axios";

const ResetPasswordPage: React.FC = () => {
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });

  const params = new URLSearchParams(window.location.search);
  const token = params.get('token');

  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setErrorMessage(null);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    const { password, confirmPassword } = formData;

    // Check if password is at least 8 characters long
    if (password.length < 8) {
      setErrorMessage("Password must be at least 8 characters long.");
      return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match!");
      return;
    }
  
    console.log(token);
    try {
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_API}/api/reset-password`, {
        token,
        newPassword: formData.password,
      });
  
      console.log("Registration successful:", response.data.msg);
      setTimeout(() => {
          window.location.href = "/LoginPage";
    }, 3000);
    } catch (error: any) {
      if (error.response && error.response.data && error.response.data.msg) {
        setErrorMessage(error.response.data.msg);
      } else {
        setErrorMessage("Registration failed. Please try again.");
      }
      console.error("There was an error registering the user:", error);
    }
  };

  const pageStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#f7f8fc",
    padding: "20px",
  };

  const formContainerStyle: React.CSSProperties = {
    backgroundColor: "#ffffff",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    padding: "40px",
    width: "100%",
    maxWidth: "500px",
  };

  const titleStyle: React.CSSProperties = {
    fontSize: "28px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "30px",
    textAlign: "center",
  };

  const formStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  };

  const inputContainerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
  };

  const labelStyle: React.CSSProperties = {
    fontSize: "14px",
    fontWeight: "bold",
    color: "#555",
    marginBottom: "5px",
  };

  const inputStyle: React.CSSProperties = {
    padding: "12px",
    fontSize: "16px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    transition: "border-color 0.3s ease",
  };

  const buttonStyle: React.CSSProperties = {
    padding: "14px",
    fontSize: "18px",
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "#4CAF50",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  };

  return (
    <div style={pageStyle}>
      <div style={formContainerStyle}>
        <h1 style={titleStyle}>Reset Password</h1>
        <form onSubmit={handleSubmit} style={formStyle}>
          <div style={inputContainerStyle}>
            <label htmlFor="password" style={labelStyle}>
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              style={inputStyle}
            />
          </div>
          <div style={inputContainerStyle}>
            <label htmlFor="confirmPassword" style={labelStyle}>
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              style={inputStyle}
            />
          </div>
          {/* Display error message */}
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
          <button
            type="submit"
            style={buttonStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#45a049";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#4CAF50";
            }}
          >
            Reset
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPasswordPage;

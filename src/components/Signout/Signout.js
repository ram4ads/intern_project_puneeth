import React from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const SignOutButton = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    // Remove the JWT token from cookies or any other necessary cleanup
    Cookies.remove("jwt_token");

    // Redirect to the login page or any other desired route
    navigate("/login");
  };

  return <button onClick={handleSignOut} className="glow-on-hover">Sign Out</button>;
};

export default SignOutButton;

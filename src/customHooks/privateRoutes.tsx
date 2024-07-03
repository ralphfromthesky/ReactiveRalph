import React from "react";
import { Route, Navigate, useNavigate } from "react-router-dom";
import { setLogin } from "../store/store.tsx";

const PrivateRoutes = ({ path, element }) => {
  const { isLogin } = setLogin();
  return isLogin ? <Route path={path} element={element} /> : <Navigate to='/aboutMe'/>;
};

export default PrivateRoutes; 

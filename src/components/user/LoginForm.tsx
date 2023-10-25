import React, { FC } from "react";
import { getApp } from "firebase/app";
import { useAppContext } from "../../middleware/ContextProvider";
import { Button } from "@mui/material";
import { Navigate } from 'react-router-dom';
import { Logout } from "./Logout";


export const LoginForm: FC = () => {
  const [state, dispatch] = useAppContext();

  const onLogin = () => {
    dispatch({type: 'LOGIN'});
  };

  const onLogout = () => {
    dispatch({type: 'LOGOUT'})
  }

  return (
    <div>
      {state.user ? (
        <Navigate to='map'/>
      ) : (
        <Navigate to='my-login'/>
      )}
    </div>
  );
};

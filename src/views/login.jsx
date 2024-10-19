import React, { useContext } from "react";
import { appContext } from "./useContext";

function Login() {
  const {setUserName} = useContext(appContext);
  const handleChange = (e) => {
    setUserName(e.target.value);
  };
  return (
    <div>
      <input type="text" onChange={handleChange} />
    </div>
  );
}

export default Login;

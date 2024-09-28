import React from 'react';

const Login = () => {
  return (
    <div>
      <h1>Login Page</h1>
      {/* Your login form or content goes here */}
      <input 
        type = "text" 
        id = "Username" 
        style={{width: "370px", height: "25px", display: "block", marginBottom: "10px"}}
        placeholder = "Username"
      />
      <input 
        type = "password" 
        id = "Password" 
        style={{width: "370px", height: "25px", display: "block", marginBottom: "10px"}}
        placeholder = "Password"
      />
    </div>
  );
};

export default Login;
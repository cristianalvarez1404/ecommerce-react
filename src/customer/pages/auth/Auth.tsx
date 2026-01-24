import React, { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { Button } from "@mui/material";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="flex justify-center h-[90vh] items-center">
      <div className="max-w-md h-[85vh] rounded-md shadow-lg">
        <img
          className="w-full rounded-t-md"
          src="https://png.pngtree.com/thumb_back/fh260/background/20230217/pngtree-blue-wavy-banner-background-blank-image_1608934.jpg"
          alt=""
        />

        <div>
          {isLogin ? <LoginForm /> : <RegisterForm />}
          <div className="flex items-center gap-1 justify-center mt-5">
            <p>{isLogin && "Don't "} have Account</p>
            <Button size="small" onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? "Create Account" : "Login"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;

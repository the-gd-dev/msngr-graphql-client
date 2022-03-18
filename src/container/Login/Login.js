import React, { useState } from "react";
import FormBtn from "../../components/FormBtn";
import FormCheck from "../../components/FormCheck";
import FormInput from "../../components/FormInput";
import GuestLayout from "../../layouts/GuestLayout";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const loginHandler = (e) => {
    e.preventDefault();
    
    return false;
  };
  return (
    <GuestLayout>
      <div className="flex flex-column">
        <div className="flex w-full mx-auto my-auto flex-col items-center justify-center px-8">
          <div className="w-full flex justify-center py-16">
            <div className="w-full flex flex-col sm:w-3/4 lg:w-1/2 xl:w-1/3 shadow-lg p-6 rounded-xl border">
              <form onSubmit={loginHandler} className="w-full ">
                <h2 className="text-2xl mb-6 mt-2">Login</h2>
                <FormInput
                  type="email"
                  required
                  placeholder="Email Address"
                  height={50}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-14 text-xl  border rounded-xl mb-4 px-4"
                />
                <FormInput
                  type="password"
                  placeholder="Password"
                  height={50}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full h-14 text-xl  border rounded-xl mb-4 px-4"
                />
                <div className="w-full flex justify-between">
                  <FormCheck
                    value={rememberMe}
                    onChange={() => setRememberMe(!rememberMe)}
                    label="Keep me signed in"
                  />
                  <a href="/passowrd" className="text-blue-400">
                    Forgot password
                  </a>
                </div>
                <FormBtn btntext="Login" btntype="primary" height={50} />
              </form>
            </div>
          </div>
        </div>
      </div>
    </GuestLayout>
  );
};

export default Login;

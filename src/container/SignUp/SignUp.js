import React, { useState } from "react";
import FormBtn from "../../components/FormBtn";
import FormInput from "../../components/FormInput";
import GuestLayout from "../../layouts/GuestLayout";

const SignUp = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const signupHandler = (e) => {
    e.preventDefault();
    console.log(email, name, password, confirmPassword);
    return false;
  };
  return (
    <GuestLayout>
      <div className="flex flex-column">
        <div className="flex w-full mx-auto my-auto flex-col items-center justify-center px-8">
          <div className="w-full flex justify-center py-4">
            <div className="w-full flex flex-col sm:w-3/4 lg:w-1/2 xl:w-1/3 shadow-lg p-6 rounded-xl border">
              <form onSubmit={signupHandler} className="w-full ">
                <h2 className="text-2xl mb-6 mt-2">Register</h2>
                <FormInput
                  required
                  type="text"
                  placeholder="Name"
                  height={50}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full h-14 text-xl  border rounded-xl mb-4 px-4"
                />
                <FormInput
                  required
                  type="email"
                  placeholder="Email Address"
                  height={50}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-14 text-xl  border rounded-xl mb-4 px-4"
                />
                <FormInput
                  required
                  type="password"
                  placeholder="Password"
                  height={50}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full h-14 text-xl  border rounded-xl mb-4 px-4"
                />
                <FormInput
                  required
                  type="password"
                  placeholder="Confirm Password"
                  height={50}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full h-14 text-xl  border rounded-xl mb-4 px-4"
                />
                <FormBtn btntext="Sign Up" btntype="primary" height={50} />
              </form>
            </div>
          </div>
        </div>
      </div>
    </GuestLayout>
  );
};

export default SignUp;

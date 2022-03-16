import React from "react";
import GuestLayout from "../../layouts/GuestLayout";

const Login = () => {
  return (
    <GuestLayout>
      <div className="flex flex-column">
        <div className="flex w-full mx-auto my-auto flex-col items-center justify-center px-8">
          <div className="w-full flex justify-center py-16">
            <div className="w-full flex flex-col sm:w-1/2 lg:w-1/3">
              <form action="/" className=" shadow-lg p-4 rounded-xl w-full border">
                <h2 className="text-3xl mb-6 mt-2">Login</h2>
                <input
                  type="text"
                  className="w-full h-14 text-xl   border rounded-xl mb-4 px-4"
                  placeholder="Username Or Email"
                />
                <input
                  type="text"
                  className="w-full h-14 text-xl  border rounded-xl mb-4 px-4"
                  placeholder="Password"
                />
                <button className="bg-blue-600  text-white px-5 w-full py-4 text-xl rounded-xl">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </GuestLayout>
  );
};

export default Login;

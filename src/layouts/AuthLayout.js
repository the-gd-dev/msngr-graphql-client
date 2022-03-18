import React from "react";
import CustomLink from "../components/CustomLink";
import Logo from "../components/Logo";
import config from "../config";
const AuthLayout = (props) => {
  return (
    <div className="container-fluid">
      <nav className="flex justify-between items-center py-2 px-4">
        <div className="left">
          <div className="branding text-xl flex items-center space-x-2">
            <Logo height={40} />
            <div>Messenger Clone</div>
          </div>
        </div>
        <div className="right text-xl">
          <ul className="list-style-none flex space-x-4">
            <li>
              <CustomLink activeclassname="text-blue-500" to={"/messenger"}>
                Home
              </CustomLink>
            </li>
          
            <li>
              <CustomLink activeclassname="text-blue-500" to={"/"}>
                Logout              
              </CustomLink>
            </li>
          </ul>
        </div>
      </nav>
      <main className="container mx-auto">
        {props.children}
      </main>
    </div>
  );
};

export default AuthLayout;

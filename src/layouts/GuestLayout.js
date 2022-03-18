import React from "react";
import CustomLink from "../components/CustomLink";
import Logo from "../components/Logo";
import config from "../config";
const GuestLayouts = (props) => {
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
              <CustomLink activeclassname="text-blue-500" to={"/"}>
                Home
              </CustomLink>
            </li>
            <li>
              <CustomLink activeclassname="text-blue-500" to={"/login"}>
                Login
              </CustomLink>
            </li>
            <li>
              <CustomLink activeclassname="text-blue-500" to={"/sign-up"}>
                Sign Up
              </CustomLink>
            </li>
          </ul>
        </div>
      </nav>
      <main className="container mx-auto">
        {props.children}
        <footer className="flex flex-col justify-center items-center mb-auto">
          <div className="text-xl text-gray-500">
            A good developer production
          </div>
          <div className="text-xl text-gray-400 flex space-x-4 my-4  justify-center items-center">
            <div>
              <img
                className="h-8"
                src={`${config.assetURI}/nodejs.png`}
                alt=""
              />
            </div>
            <div>
              <img
                className="h-10 w-10"
                src="https://graphql.org/img/logo.svg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-10"
                src={`${config.assetURI}/mongo.png`}
                alt=""
              />
            </div>
            <div>
              <img
                className="h-10 w-10"
                src="https://d33wubrfki0l68.cloudfront.net/554c3b0e09cf167f0281fda839a5433f2040b349/ecfc9/img/header_logo.svg"
                alt=""
              />
            </div>
          </div>

          <div className="text-xl text-gray-600">
            messenger-clone &copy;2022
          </div>
        </footer>
      </main>
    </div>
  );
};

export default GuestLayouts;

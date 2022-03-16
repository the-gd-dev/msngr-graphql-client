import React from "react";
import CustomLink from "../components/CustomLink";
import Logo from "../components/Logo";

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
            <li><CustomLink activeClassName="text-blue-500" to={'/'}>Home</CustomLink></li>
            <li><CustomLink activeClassName="text-blue-500" to={'/login'}>Login</CustomLink></li>
            <li><CustomLink activeClassName="text-blue-500" to={'/sign-up'}>Sign Up</CustomLink></li>
          </ul>
        </div>
      </nav>
      <main className="container mx-auto">
        {props.children}{" "}
        <footer className="flex flex-col mt-12 justify-center items-center">
          <div className="text-xl text-gray-800">
            A good developer production
          </div>
          <div className="text-xl text-gray-600">
            messenger-clone &copy;2022
          </div>
          <div className="text-xl text-gray-400">NodeJS / GraphQL / Socket</div>
        </footer>
      </main>
    </div>
  );
};

export default GuestLayouts;

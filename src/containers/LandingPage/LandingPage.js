import React from "react";
import Logo from "../../components/Logo";
import GuestLayout from "../../layouts/GuestLayout";

const LandingPage = () => {
  return (
    <GuestLayout>
      <div className="flex flex-column">
        <div className="flex mx-auto flex-col lg:flex-row items-center justify-center px-8">
          <div className="w-full flex justify-center">
            <Logo classes="h-64 lg:h-96"/>
          </div>
          <div className="w-3/4 text-center lg:text-left flex justify-center">
            <div className="flex flex-col  space-y-2">
              <div className="text-4xl lg:text-5xl text-gray-800">Messenger Clone</div>
              <div className="text-2xl text-gray-600">
                A dummy practice project.
              </div>
              <div className="text-2xl text-gray-400">
                with exact features facebook messenger has.
              </div>
            </div>
          </div>
        </div>
      </div>
    </GuestLayout>
  );
};

export default LandingPage;

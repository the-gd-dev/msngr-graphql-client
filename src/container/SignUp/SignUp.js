import React, { useState } from "react";
import FormBtn from "../../components/FormBtn";
import FormInput from "../../components/FormInput";
import GuestLayout from "../../layouts/GuestLayout";
import axios from "axios";
import config from "../../config";
import Logo from "../../components/Logo";
import { useNavigate } from "react-router-dom";

const SignUp = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [isRegisterd, setIsRegisterd] = useState(false);
  const navigate = useNavigate();
  const signupHandler = async (e) => {
    e.preventDefault();
    const graphqlQuery = `
      mutation {
        createUser(userRegInput: {name: "${name}",email: "${email}", password: "${password}", confirmPassword: "${confirmPassword}"}) {
          _id
          name
          email
          createdAt
        }
      }
    `;
    try {
      setErrors({});
      let { data } = await axios.post(config.apiBaseURI + "/graphql", {
        query: graphqlQuery,
      });
      setIsRegisterd(true);
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      let newErrors = error.response.data.errors[0].data;
      setErrors(newErrors);
    }

    return false;
  };
  return (
    <GuestLayout>
      <div className="flex flex-col mb-12">
        <div className="flex w-full mx-auto my-auto flex-col items-center justify-center px-8 relative">
          {isRegisterd ? (
            <div className="w-full flex flex-col space-y-4 sm:w-3/4 lg:w-1/2 xl:w-1/3 justify-center items-center h-full bg-white shadow-lg p-4 rounded-xl border absolute">
              <Logo height={150} />
              <div className="text-3xl font-semibold">
                Registered Successfully
              </div>
              <div className="text-xl text-center">
                Please login. <br />
                Redirecting you to the login page in a moment.
              </div>
            </div>
          ) : null}
          <div className="w-full flex justify-center py-4">
            <div className="w-full flex flex-col sm:w-3/4 lg:w-1/2 xl:w-1/3 shadow-lg p-6 rounded-xl border">
              <form onSubmit={signupHandler} className="w-full ">
                <h2 className="text-2xl mb-6 mt-2">Register</h2>
                <FormInput
                  errors={errors || errors.name || []}
                  required
                  type="text"
                  placeholder="Name"
                  height={50}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full h-14 text-xl  border rounded-xl mb-4 px-4"
                />
                <FormInput
                  errors={errors || errors.email || []}
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
                  errors={errors || errors.password || []}
                  type="password"
                  placeholder="Password"
                  height={50}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full h-14 text-xl  border rounded-xl mb-4 px-4"
                />
                <FormInput
                  required
                  errors={errors || errors.confirmPassword || []}
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

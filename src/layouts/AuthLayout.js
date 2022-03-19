import React, { useEffect } from "react";
import CustomLink from "../components/CustomLink";
import Logo from "../components/Logo";
import axios from "../axios";
import { useDispatch } from "react-redux";
import { deleteToken, deleteUser, saveUser } from "../store/auth/actions";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const AuthLayout = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    (async function () {
      let graphqlQuery = `
        {
          jwtUser {
            _id
            name
            email
            createdAt
          }
        }
      `;
      try {
        let { data } = await axios.post("/graphql", { query: graphqlQuery });
        let user = data.data.jwtUser;
        dispatch(saveUser(user));
      } catch (error) {
        toast.error("User Authentication Failed. Logging out.", {
          position: "top-center",
          autoClose: 3000,
        });
        dispatch(deleteToken());
        setTimeout(() => {
          navigate("/login");
        }, 2500);
      }
    })();
  }, []);

  const logoutUser = () => {
    if (window.confirm("Are you sure ?")) {
      dispatch(deleteToken());
      navigate("/login");
    }
  };
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
              <CustomLink
                onClick={logoutUser}
                activeclassname="text-blue-500"
                to={"/"}
              >
                Logout
              </CustomLink>
            </li>
          </ul>
        </div>
      </nav>
      <main className="container mx-auto">{props.children}</main>
    </div>
  );
};

export default AuthLayout;

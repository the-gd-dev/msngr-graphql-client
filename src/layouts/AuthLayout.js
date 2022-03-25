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
          position: "top-right",
          autoClose: 3000,
        });
        dispatch(deleteToken());
        navigate("/login");
      }
    })();
  }, []);
  return <main className="messenger__main__view p-0 m-0">{props.children}</main>;
};

export default AuthLayout;

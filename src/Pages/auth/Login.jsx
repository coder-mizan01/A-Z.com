import React, { useState } from "react";
//packages
import axios from "axios";
import config from "../../config.json";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import {setUser} from "../../Redux/Authentication";
import { Link } from "react-router-dom";

//global hook

//css
import "../../CSS/Login.css";

//icons
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [click, setClick] = useState(false);

  const handleRegistration = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${config.apiUrl}/api/auth/login`, {
        email,
        password,
      });
      if (res.data.success) {

        //if login is successful then this alert message will come
        console.log(res.data.token);

      //dispatch setUser reducer to authentication 
        dispatch(
          setUser({
            email: res.data.user.email,
            password: res.data.user.password,
            token : res.data.token,
            role : res.data.user.token

          })
        );

        //save email , password and token in the localstorage
        localStorage.setItem("email", JSON.stringify(res.data.user.email));
        localStorage.setItem("password",JSON.stringify(res.data.user.password));
        localStorage.setItem("role",JSON.stringify(res.data.user.role));
        localStorage.setItem("token",JSON.stringify(res.data.token));

        navigate(location.state || "/");
      } else {
        console.log(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login">

      <form onSubmit={handleRegistration} className="login-form">
        <div className="mb-3">
          <label htmlFor="">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-field"
            id="exampleInputEmail1"
            placeholder="Enter your email"
            autoComplete="none"
            required
          />
        </div>
        <div className="password">
          <label htmlFor="">Password</label>
          <input
            type={click ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field"
            id="exampleInputPassword1"
            placeholder="Enter your password"
            autoComplete="none"
            required
          />
          <button
            type="button"
            className="hide-show-password"
            onClick={() => setClick(!click)}
          >
            {" "}
            {click ? (
              <FaRegEye type="checkbox" className="see" />
            ) : (
              <FaRegEyeSlash className="dont-see" />
            )}{" "}
          </button>
        </div>

        <button type="submit" className="sign-in-btn">
          Sign in
        </button>
      </form>

      <p className="">
        not a member please
        <Link to="/Register">Register</Link>
      </p>
    </div>
  );
};

export default Register;

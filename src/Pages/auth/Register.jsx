import React, { useState } from "react";
import axios from "axios";
import config from "../../config.json";
import { useNavigate, Link } from "react-router-dom";

//icons
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa"

//css
import "../../CSS/Register.css";


const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [seePassword,setSeePassword] = useState(false);

  const handleRegistration = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${config.apiUrl}/api/auth/register`,
        { name, email, password, phone }
      );
      if (res.data.success) {

        toast.success('user is created')
        navigate('/Login')
      } else {
        console.log(res.data.message)
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="register">
      <form onSubmit={handleRegistration} className="register-form" >
        <div className="">
          <label htmlFor="">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input-field "
            id="exampleInputName"
            placeholder="Enter your Name"
            autoComplete="none"
            required
          />
        </div>

        <div className="">
          <label htmlFor="">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-field "
            id="exampleInputEmail1"
            placeholder="Enter your email"
            autoComplete="none"
            required
          />
        </div>
        <div className="">
          <label htmlFor="">Phone Number</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="input-field "
            id="exampleInputPhone"
            placeholder="Enter your Phone"
            autoComplete="none"
            required
          />
        </div>



        <div className="password">
          <label htmlFor="">Password</label>
          <input
            type={seePassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field"
            id="exampleInputPassword1"
            placeholder="Enter your password"
            autoComplete="none"
            required
          />
          <button type="button" className="hide-show-password" onClick={()=>setSeePassword(!seePassword)} >{seePassword ?<FaRegEye />:<FaRegEyeSlash />  } </button>
        </div>

        <button type="submit" className="sign-up-btn">
          Signup
        </button>
      </form>

        <p className="">Already member
        <Link to='/Login'>
          login
        </Link>
        </p>

    </div>
  );
};

export default Register;

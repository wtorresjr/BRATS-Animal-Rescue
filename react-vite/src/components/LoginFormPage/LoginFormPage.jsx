import React, { useState } from "react";
import { thunkLogin } from "../../redux/session";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Navigate, NavLink } from "react-router-dom";
import "./LoginForm.css";
import SignupFormModal from "../SignupFormModal";
import { useModal } from "../../context/Modal";
import { MessageComponent } from "../Messaging";

function LoginFormPage() {
  const { setModalContent, closeModal } = useModal();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  if (sessionUser) return <Navigate to="/home" replace={true} />;

  const handleSubmit = async (e) => {
    e.preventDefault();
    openLoggingInMessage();

    try {
      const serverResponse = await dispatch(
        thunkLogin({
          email,
          password,
        })
      );

      if (serverResponse) {
        closeModal();
        setErrors(serverResponse);
      } else {
        navigate("/admin");
      }
    } catch (error) {
      // Handle errors, if any, from the thunkLogin action
      console.error("Error during login:", error);
      setIsVisible(false);
    }
  };

  const openLoggingInMessage = () => {
    setModalContent(
      <MessageComponent message={"Logging In..."} origin={"loginPage"} />
    );
  };

  const openSignUpModal = () => {
    setModalContent(<SignupFormModal />);
  };

  const demoLogIn = async (e) => {
    e.preventDefault();
    openLoggingInMessage();
    try {
      const loginDemo = await dispatch(
        thunkLogin({
          email: "demo@demo.com",
          password: "password",
        })
      );
      if (loginDemo) {
        setErrors(serverResponse);
      } else {
        navigate("/admin");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div className="loginFormModal">
      {errors.length > 0 &&
        errors.map((message) => (
          <p key={message} className="errorsPtag">
            {message}
          </p>
        ))}
      <div className="formContain">
        <form onSubmit={handleSubmit} className="loginForm">
          {Object.keys(errors).length ? (
            <p className="errorsPtag">Email or Password is Incorrect</p>
          ) : (
            ""
          )}
          <label>
            Email
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label>
            Password
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <button type="submit">Log In</button>
          {/* <button type="submit" onClick={demoLogIn}>
            Demo Login
          </button> */}
          <p>
            <NavLink onClick={openSignUpModal}>Sign Up</NavLink>
          </p>
        </form>
      </div>
    </div>
  );
}

export default LoginFormPage;

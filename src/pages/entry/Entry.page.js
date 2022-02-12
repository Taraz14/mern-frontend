import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

import { LoginForm } from "../../component/auth/Login.comp";
import { ResetPassword } from "../../component/password-reset/PasswordReset.comp";
import "./Entry.style.css";

export const Entry = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [frmload, setFrmload] = useState("login");

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "username":
        setUsername(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
    // console.log(name, value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      return alert("Harap lengkapi form!");
    }

    //TODO call api to submit the form
    console.log(username, password);
  };

  //Reset Password
  const handleOnResetSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      return alert("Isi Email yang terdaftar!");
    }

    //TODO call api to submit the form
    console.log(email);
  };

  const formSwitcher = (frmType) => {
    setFrmload(frmType);
  };

  return (
    <div className="entry-page bg-warning">
      <div className="jumbotron shadow">
        {frmload === "login" && (
          <LoginForm
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
            username={username}
            pass={password}
            formSwitcher={formSwitcher}
          />
        )}
        {frmload === "reset" && (
          <ResetPassword
            handleOnChange={handleOnChange}
            handleOnResetSubmit={handleOnResetSubmit}
            email={email}
            formSwitcher={formSwitcher}
          />
        )}
      </div>
    </div>
  );
};

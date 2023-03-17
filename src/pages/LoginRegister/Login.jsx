import React, { useContext } from "react";
import Athcontext from "../../Context/AthContext";
import { Link } from "react-router-dom";
import Button from "../../Components/Form/Button";
import Input from "../../Components/Form/Input";
import { useForm } from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";

import {
  requiredValidator,
  minValidator,
  maxValidator,
  emailValidator,
} from "../../validators/rules";

import "./LoginRegister.css";

export default function Login() {
  const athcontext = useContext(Athcontext);
  const navigate=useNavigate()

  const [formState, onInputHandler] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const userLogin = (event) => {
    event.preventDefault();

    const loginuser = {
      email: formState.inputs.email.value,
      password: formState.inputs.password.value,
    };

    fetch(`https://dongato-server.bavand.top/api/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginuser),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.status) {
          console.log("ok login page");

          fetch(`https://dongato-server.bavand.top/api/user/me`, {
            method: "GET",
            headers: {
              Authorization: result.data.token,
            },
          })
            .then((data) => data.json())
            .then((data) => {
              athcontext.login(result.data.token, data.data);
              navigate("/app")
            });
        }
      });
  };

  return (
    <>
      <section className="login-register">
        <div className="login">
          <span className="login__title">login </span>

          <form action="#" className="login-form">
            <div className="login-form__password">
              <Input
                type="text"
                placeholder="email"
                className="login-form__username-input"
                element="input"
                id="email"
                onInputHandler={onInputHandler}
                validations={[
                  requiredValidator(),
                  maxValidator(25),
                  emailValidator(),
                ]}
              />
            </div>
            <div className="login-form__password">
              <Input
                element="input"
                id="password"
                type="password"
                className="login-form__password-input"
                placeholder="password"
                validations={[
                  requiredValidator(),
                  minValidator(8),
                  maxValidator(18),
                ]}
                onInputHandler={onInputHandler}
              />
            </div>
            <Link
              className="login-form__forget-password-link"
              to="/forgetpassword">
              forget your password click here
            </Link>
            <Button
              className={`login-form__btn ${
                formState.isFormValid
                  ? "login-form__btn-success"
                  : "login-form__btn-error"
              }`}
              type="submit"
              onClick={userLogin}
              disabled={!formState.isFormValid}>
              <span className="login-form__btn-text">submit</span>
            </Button>
          </form>

          <div className="login__new-member">
            <span className="login__new-member-text">
              do you have account ?
            </span>
            <Link className="login__new-member-link" to="/register">
              sing in
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

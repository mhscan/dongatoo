import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Button from "../../Components/Form/Button";
import Input from "../../Components/Form/Input";
import { useForm } from "../../hooks/useForm";
import {
  requiredValidator,
  minValidator,
  maxValidator,
  emailValidator,
} from "../../validators/rules";

import "./LoginRegister.css";

import Athcontext from "../../Context/AthContext";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const athcontext = useContext(Athcontext);
  const navigate = useNavigate();

  const [formState, onInputHandler] = useForm(
    {
      name: {
        value: "",
        isValid: false,
      },

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

  const registerNewUser = (event) => {
    event.preventDefault();

    const newUserInfos = {
      name: formState.inputs.name.value,

      email: formState.inputs.email.value,
      password: formState.inputs.password.value,
    };

    fetch(`https://dongato-server.bavand.top/api/user/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUserInfos),
    })
      .then((res) => res.json())
      .then((result) => {
        if (!result.status) {
        }
        if (result.status) {
          console.log("ok register page");

          fetch(`https://dongato-server.bavand.top/api/user/me`, {
            method: "GET",
            headers: {
              Authorization: result.data.token,
            },
          })
            .then((data) => data.json())
            .then((data) => {
              athcontext.login(result.data.token, data.data);

              navigate("/app");
            });
        }
      });
  };

  return (
    <>
      <section className="login-register">
        <div className="login register-form">
          <span className="login__title">sing in </span>

          <form action="#" className="login-form">
            <div className="login-form__username">
              <Input
                type="text"
                placeholder="name"
                className="login-form__username-input"
                element="input"
                id="name"
                onInputHandler={onInputHandler}
                validations={[
                  requiredValidator(),
                  minValidator(6),
                  maxValidator(20),
                ]}
              />
            </div>

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
                type="password"
                placeholder="password"
                className="login-form__password-input"
                element="input"
                id="password"
                onInputHandler={onInputHandler}
                validations={[
                  requiredValidator(),
                  minValidator(8),
                  maxValidator(18),
                ]}
              />
            </div>
            <Button
              className={`login-form__btn ${
                formState.isFormValid
                  ? "login-form__btn-success"
                  : "login-form__btn-error"
              }`}
              type="submit"
              onClick={registerNewUser}
              disabled={!formState.isFormValid}>
              <span className="login-form__btn-text">join us</span>
            </Button>
          </form>

          <div className="login__new-member">
            <span className="login__new-member-text">
              already have account{" "}
            </span>
            <Link className="login__new-member-link" to="/login">
              sing up{" "}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

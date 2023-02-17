import React from "react";

import Button from "../../Components/Form/Button";
import Input from "../../Components/Form/Input";
import { useForm } from "../../hooks/useForm";
import {
  requiredValidator,
  minValidator,
  maxValidator,
  emailValidator,
} from "../../validators/rules";

export default function Forgetpassword() {
  const [formState, onInputHandler] = useForm(
    {
      username: {
        value: "",
        isValid: false,
      }
    },
    false
  );

  const userLogin = (event) => {
    event.preventDefault();
    console.log("send email ");
  };
  return (
    <>
      <section className="login-register">
        <div className="login">
          <span className="login__title">forget password </span>

          <form action="#" className="login-form">
            <div className="login-form__username">
              <Input
                className="login-form__username-input"
                id="username"
                type="text"
                placeholder="email"
                element="input"
                validations={[
                  requiredValidator(),
                  minValidator(8),
                  maxValidator(40),
                  emailValidator(),
                ]}
                onInputHandler={onInputHandler}
              />
            </div>
            
            <Button
              className={`login-form__btn ${
                formState.isFormValid
                  ? "login-form__btn-success"
                  : "login-form__btn-error"
              }`}
              type="submit"
              onClick={userLogin}
              disabled={!formState.isFormValid}>
              <span className="login-form__btn-text">send email</span>
            </Button>
          </form>

          
         
        </div>
      </section>
    </>
  );
}

import React, { useState } from "react";

import IMG from "../../assets/mydash.png";

import "./Signup.scss";

const SignUp = () => {
  const [values, setValues] = useState({
    email: "",
    full__name: "",
    phone: "",
    password: "",
    confirm__password: "",
  });

  const [validations, setValidations] = useState({
    email: "",
    full__name: "",
    phone: "",
    password: "",
    confirm__password: "",
  });

  const validateAll = () => {
    const { email, full__name, phone, password, confirm__password } = values;

    const validations = {
      email: "",
      full__name: "",
      phone: "",
      password: "",
      confirm__password: "",
    };
    let isValid = true;

    if (!email) {
      validations.email = "Email is required!";

      isValid = false;
    }
    if (email && !/\S+@\S+\.\S+/.test(email)) {
      validations.email = "Accepted Email format is example@mail.com!";
      isValid = false;
    }

    if (!phone) {
      validations.phone = "Phone Number Is Required!";
      isValid = false;
    }

    if (phone && !/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*/.test(phone)) {
      validations.phone = "Accepted Phone Number sample is +(123) - 456-78-90!";
      isValid = false;
    }

    if (!full__name) {
      validations.full__name = "Full Name Is Required!";
      isValid = false;
    }

    if (!password) {
      validations.password = "Password Is Required!";
      isValid = false;
    }

    if (!confirm__password) {
      validations.confirm__password = "Re-Enter Your Password!";
      isValid = false;
    }

    if (password !== confirm__password) {
      validations.confirm__password = "The Two Passwords Do Not Match!";
      isValid = false;
    }

    if (!isValid) setValidations(validations);
    if (isValid) setValidations("");
  };

  const validateOne = (e) => {
    const { name } = e.target;
    const value = values[name];
    let message = "";

    if (!value) {
      message = `${name} is required!`;
    }

    if (value && name === "email" && !/\S+@\S+\.\S+/.test(value)) {
      message = "Email format must be as example@mail.com";
    }

    setValidations({ ...validations, [name]: message });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    validateAll();

    if (validations) return false;
    if (!validations) window.location.replace("/home");
  };

  const { email, full__name, phone, password, confirm__password } = values;

  const {
    email: emailVal,
    full__name: full__nameVal,
    phone: phoneVal,
    password: passwordVal,
    confirm__password: confirm__passwordVal,
  } = validations;

  return (
    <section className="signUp">
      <div className="signUp__container">
        <div className="signUp__left">
          <img src={IMG} alt="side" className="signUp__left-image" />
          <div className="signUp__left-text">
            <h3>Choose a date range</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium doloribus qui minus.
            </p>
          </div>
        </div>

        <div className="signUp__form">
          <h3>Create an account</h3>

          <form onSubmit={handleSubmit}>
            <div className="form__control">
              <label htmlFor="email">Your email address</label>
              <input
                type="email"
                name="email"
                required
                value={email}
                className="form__input"
                onChange={handleChange}
                onBlur={validateOne}
              />
              <div className="form__input-error">{emailVal}</div>
            </div>
            <div className="form__control">
              <label htmlFor="password">Your password</label>
              <input
                type="password"
                name="password"
                required
                value={password}
                className="form__input"
                onChange={handleChange}
                onBlur={validateOne}
              />
              <div className="form__input-error">{passwordVal}</div>
            </div>
            <div className="form__control">
              <label htmlFor="confirm-password">Confirm your password</label>
              <input
                type="password"
                name="confirm__password"
                required
                value={confirm__password}
                className="form__input"
                onChange={handleChange}
                onBlur={validateOne}
              />
              <div className="form__input-error">{confirm__passwordVal}</div>
            </div>
            <div className="form__control">
              <label htmlFor="full__name">Your full name</label>
              <input
                type="text"
                name="full__name"
                className="form__input"
                required
                value={full__name}
                onChange={handleChange}
                onBlur={validateOne}
              />
              <div className="form__input-error">{full__nameVal}</div>
            </div>
            <div className="form__control">
              <label htmlFor="phone">Your phone number</label>
              <input
                type="phone"
                name="phone"
                className="form__input phone"
                required
                value={phone}
                onChange={handleChange}
                onBlur={validateOne}
              />
              <div className="form__input-error">{phoneVal}</div>
            </div>
            <div className="form__checkBox">
              <input
                type="checkBox"
                name="checkBox"
                className="checkBox"
                required
              />
              <label htmlFor="checkBox">
                I read and agree to Terms and Conditions
              </label>
            </div>
            <button type="submit" className="btn">
              Create account
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignUp;

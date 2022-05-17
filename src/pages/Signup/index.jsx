import React, { useState } from "react";

import IMG from "../../assets/mydash.png";

import "./Signup.scss";

const Signup = () => {
  const [values, setValues] = useState({
    email: "",
    fullname: "",
    phone: "",
    password: "",
    confirmPass: "",
  });

  const [validations, setValidations] = useState({
    email: "",
    fullname: "",
    phone: "",
    password: "",
    confirmPass: "",
  });

  const validateAll = () => {
    const { email, fullname, phone, password, confirmPass } = values;

    const validations = {
      email: "",
      fullname: "",
      phone: "",
      password: "",
      confirmPass: "",
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

    if (!fullname) {
      validations.fullname = "Full Name Is Required!";
      isValid = false;
    }

    if (!password) {
      validations.fullname = "Password Is Required!";
      isValid = false;
    }

    if (!confirmPass) {
      validations.fullname = "Re-Enter Your Password!";
      isValid = false;
    }

    if (password !== confirmPass) {
      validations.confirmPass = "The Two Passwords Do Not Match!";
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

  const { email, fullname, phone, password, confirmPass } = values;

  const {
    email: emailVal,
    fullname: fullnameVal,
    phone: phoneVal,
    password: passwordVal,
    confirmPass: confirmPassVal,
  } = validations;

  return (
    <section className="signup">
      <div className="signup__container">
        <div className="signup__left">
          <img src={IMG} alt="side" className="signup__left-image" />
          <div className="signup__left-text">
            <h3>Choose a date range</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium doloribus qui minus.
            </p>
          </div>
        </div>

        <div className="signup__form">
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
                name="confirmPass"
                required
                value={confirmPass}
                className="form__input"
                onChange={handleChange}
                onBlur={validateOne}
              />
              <div className="form__input-error">{confirmPassVal}</div>
            </div>
            <div className="form__control">
              <label htmlFor="full__name">Your full name</label>
              <input
                type="text"
                name="fullname"
                className="form__input"
                required
                value={fullname}
                onChange={handleChange}
                onBlur={validateOne}
              />
              <div className="form__input-error">{fullnameVal}</div>
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
            <div className="form__checkbox">
              <input
                type="checkbox"
                name="checkbox"
                className="checkbox"
                required
              />
              <label htmlFor="checkbox">
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

export default Signup;

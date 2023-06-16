import React, { useState } from "react";
import "./Form.css";
import validate from "../../validation";

export default function Form({ login }) {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  function handleChange(e) {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...userData,
        [e.target.name]: e.target.value,
      })
    );
  }
  function handleSubmit(e) {
    e.preventDefault();
    const array = Object.entries(errors);
    array.length ? alert("Complete validation error") : login(userData);
  }
  return (
    <section className="form" onSubmit={handleSubmit}>
      <form>
        <div className="container-form">
          <div className="form-container-image">
            <img
              className="form-image"
              src="https://steamuserimages-a.akamaihd.net/ugc/1776075167778430983/A1781B71FFEEE64573876FF9821FB2B5EFB540C0/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false"
              alt="Rick and Morty"
            />
          </div>
          <div className="container-input">
            <label htmlFor="">Email</label>
            <input
              className={errors.email ? "input-error" : null}
              key="email"
              name="email"
              type="email"
              placeholder="Insert your Email"
              value={userData.email}
              onChange={handleChange}
            />
            <p className="text-error">{errors.email && `! ${errors.email}`}</p>
          </div>
          <div className="container-input">
            <label htmlFor="">Password</label>
            <input
              className={errors.password ? "input-error" : null}
              key="password"
              name="password"
              type="password"
              placeholder="Insert your Password "
              value={userData.password}
              onChange={handleChange}
            />
            <p className="text-error">
              {errors.password && `! ${errors.password}`}
            </p>
          </div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </section>
  );
}

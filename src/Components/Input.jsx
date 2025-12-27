import React from "react";

const Input = ({ label, placeholder, type }) => {
  return (
    <>
      <label htmlFor=''>{label}</label>
      <br />
      <input type={type} placeholder={placeholder} />
    </>
  );
};

export default Input;

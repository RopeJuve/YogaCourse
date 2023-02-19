import { useState, useRef } from "react";
import "./Input.css";

const Input = ({ type, name }) => {
  const inputRef = useRef(null);
  const [value, setValue] = useState("");
  const [wrapper, setWrapper] = useState("");
  const [error, setError] = useState("");
  const border = name === "" ? "border-none" : "";
  const none = name === "" ? "p-none" : "error";

  const handelChange = (e) => {
    setValue(e.target.value);
    if (name === "") {
      setWrapper("border-none");
    }
    if (inputRef.current.checkValidity()) {
      if (name === "") {
        setWrapper("input__wrapper border-none");
      } else {
        setWrapper("input__wrapper correct");
      }
    } else {
      setWrapper("input__wrapper input-error");
      setError(`You need to enter valid ${e.target.name}`);
    }
  };

  return (
    <>
      <div className={wrapper === "" ? ` input__wrapper ${border}` : wrapper}>
        <label>{name}</label>
        <input
          ref={inputRef}
          type={type}
          name={name}
          value={value}
          onFocus={() => {
            name === ""
              ? setWrapper("input__wrapper border-none")
              : setWrapper("input__wrapper animate");
          }}
          onChange={handelChange}
          onBlur={() => {
            name === ""
              ? setWrapper("input__wrapper border-none")
              : setWrapper("input__wrapper blur");
          }}
          required={name === "" ? false : true}
        />
      </div>
      <p className={none}>{error}</p>
    </>
  );
};

export default Input;

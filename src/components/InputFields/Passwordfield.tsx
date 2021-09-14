import { useState } from "react";
import "./index.scss";

const Passwordfield = ({ label, inputName }) => {
  const [toggleShow, setToggleShow] = useState(false);
  return (
    <div className="textfield_container">
      <label className="typography_content_medium" htmlFor={inputName}>
        {label}
      </label>
      <div className="textfield_container__password_container">
        <input type={toggleShow ? "text" : "password"} name={inputName} />
        <span onClick={() => setToggleShow(!toggleShow)}>show</span>
      </div>
    </div>
  );
};

export default Passwordfield;

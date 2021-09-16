import { useState } from "react";
import "./index.scss";

const Passwordfield = ({ label, inputName }) => {
  const [toggleShow, setToggleShow] = useState(false);
  return (
    <div className="textfield_container">
      <label
        className="typography_content_medium poppin_regular"
        htmlFor={inputName}
      >
        {label}
      </label>
      <div className="textfield_container__password_container">
        <input
          type={toggleShow ? "text" : "password"}
          name={inputName}
          className="typography_content_xs"
        />
        <span
          onClick={() => setToggleShow(!toggleShow)}
          className={`typography_content_xxs poppin_regular ${
            toggleShow && "show_password"
          }`}
        >
          show
        </span>
      </div>
    </div>
  );
};

export default Passwordfield;

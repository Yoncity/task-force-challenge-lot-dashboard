import "./index.scss";

const Textfield = ({ label, placeholder, inputName }) => {
  return (
    <div className="textfield_container">
      <label
        className="typography_content_medium poppin_regular"
        htmlFor={inputName}
      >
        {label}
      </label>
      <input
        className="textfield_container__textfield_input typography_content_xs"
        type="text"
        name={inputName}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Textfield;

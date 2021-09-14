import "./index.scss";
import logo from "../../assets/icons/logo.svg";
import imageDesk from "../../assets/images/desk.jpg";
import Textfield from "../../components/InputFields/Textfield";
import Passwordfield from "../../components/InputFields/Passwordfield";

const Auth = () => {
  return (
    <div className="auth_container">
      <div className="auth_container__left">
        <img
          src={imageDesk}
          alt="Our Office"
          className="auth_container__left__main_image"
        />
        <img src={logo} alt="Logo" className="auth_container__left__logo" />
        <p className="auth_container__left__slogan white_text">
          “Let the countdown begin”
        </p>
      </div>
      <div className="auth_container__right">
        <div className="auth_container__right__form_container">
          <div className="auth_container__right__form_container__header">
            <p className="auth_container__right__form_container__header__title typography_title_h1">
              Create Account
            </p>
            <p className="auth_container__right__form_container__header__info typography_content_large">
              We’re glad you are here! Now fill in the details to get started
            </p>
            <div className="auth_container__right__form_container__header__divider"></div>
          </div>

          <div className="auth_container__right__form_container__body">
            <Textfield
              inputName="fullName"
              label="Full Name*"
              placeholder="Yonatan Dawit"
            />
            <Textfield
              inputName="email"
              label="Email*"
              placeholder="yonatan.dawit.yd2@gmail.com"
            />

            <Passwordfield inputName="password" label="Enter Password*" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;

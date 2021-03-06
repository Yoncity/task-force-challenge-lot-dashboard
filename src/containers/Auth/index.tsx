import './index.scss';
import logo from '../../assets/icons/logo.svg';
import imageDesk from '../../assets/images/desk.jpg';
import Textfield from '../../components/InputFields/Textfield';
import Passwordfield from '../../components/InputFields/Passwordfield';
import google_icon from '../../assets/icons/google_icon.png';
import { useState } from 'react';

const Auth = () => {
  const [tab, setTab] = useState(0);
  const createAccount = () => {
    return (
      <div className="auth_container__right__form_container">
        <div className="auth_container__right__form_container__header">
          <p className="auth_container__right__form_container__header__title typography_title_h1 poppin_bold primary_text">
            Create Account
          </p>
          <p className="auth_container__right__form_container__header__info typography_content_large poppin_regular gray_text_1">
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

          <div className="auth_container__right__form_container__body__terms_and_conditions_container">
            <input type="checkbox" name="terms_and_conditions" />
            <label
              htmlFor="terms_and_conditions"
              className="poppin_medium gray_text"
            >
              I agree to terms and Conditions
            </label>
          </div>

          <div className="auth_container__right__form_container__body__create_button button_filled poppin_medium white_text">
            Create Account
          </div>

          <div className="auth_container__right__form_container__body__or_divider">
            <div className="auth_container__right__form_container__body__or_divider__bar"></div>
            <p className="auth_container__right__form_container__body__or_divider__text typography_content_xxs poppin_regular gray_text_3">
              Or
            </p>
            <div className="auth_container__right__form_container__body__or_divider__bar"></div>
          </div>

          <div className="auth_container__right__form_container__body__google_signup">
            <img src={google_icon} alt="Google Icon" />
            <p className="typography_content_xs poppin_medium">
              Sign Up With Google
            </p>
          </div>

          <p className="auth_container__right__form_container__body__signin typography_content_xs poppin_regular gray_text_5">
            Already Have An Account?{' '}
            <span
              className="poppin_medium primary_text"
              onClick={() => setTab(1)}
            >
              Signin
            </span>
          </p>
        </div>
      </div>
    );
  };

  const login = () => {
    return (
      <div className="auth_container__right__form_container">
        <div className="auth_container__right__form_container__header">
          <p className="auth_container__right__form_container__header__title typography_title_h1 poppin_bold primary_text">
            Log In
          </p>
          <p className="auth_container__right__form_container__header__info typography_content_large poppin_regular gray_text_1">
            We’re glad you are back! Now fill in the details And dive in
          </p>
          <div className="auth_container__right__form_container__header__divider"></div>
        </div>

        <div className="auth_container__right__form_container__body">
          <Textfield
            inputName="email"
            label="Email*"
            placeholder="yonatan.dawit.yd2@gmail.com"
          />

          <Passwordfield inputName="password" label="Enter Password*" />

          <p className="auth_container__right__form_container__body__forgot_password typography_content_small poppin_medium red_text">
            Forgot Password?
          </p>

          <div className="auth_container__right__form_container__body__create_button button_filled poppin_medium white_text login_button">
            Login
          </div>

          <p className="auth_container__right__form_container__body__signin typography_content_xs poppin_regular gray_text_5">
            Don’t Have An Account?{' '}
            <span
              className="poppin_medium primary_text"
              onClick={() => setTab(0)}
            >
              Signup
            </span>
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="auth_container">
      <div className="auth_container__left">
        <img
          src={imageDesk}
          alt="Our Office"
          className="auth_container__left__main_image"
        />
        <img src={logo} alt="Logo" className="auth_container__left__logo" />
        <p
          className="auth_container__left__slogan typography_title_h4 poppin_italic {
  font-size: 40px;
  font-weight: bold;
} white_text"
        >
          “Let the countdown begin”
        </p>
      </div>
      <div className="auth_container__right">
        {tab === 0 ? createAccount() : login()}
      </div>
    </div>
  );
};

export default Auth;

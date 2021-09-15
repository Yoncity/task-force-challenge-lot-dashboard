import { useState } from "react";
import "./index.scss";
import ME from "../../../assets/images/ME.jpg";
import homeIcon from "../../../assets/icons/home.svg";
import calendarIcon from "../../../assets/icons/calendar.svg";
import userIcon from "../../../assets/icons/user.svg";
import articleIcon from "../../../assets/icons/article.svg";
import settingsIcon from "../../../assets/icons/settings.svg";
// import homeIcon from "../../../assets/icons/home.svg";

const Sidebar = ({ active }) => {
  const [collapse, setCollapse] = useState(false);

  const isActiveBackground = (current, active) => {
    return current === active && "background_primary";
  };

  const isActiveText = (current, active) => {
    return current === active ? "white_text" : "primary_text";
  };

  return (
    <div className={`sidebar_container ${collapse && "collapse"}`}>
      <div className="sidebar_container__profile">
        <img
          src={ME}
          alt=""
          className="sidebar_container__profile_image p_image"
        />
        <div className="sidebar_container__profile__info">
          <p className="sidebar_container__profile__info__main typography_content_medium">
            Yonatan Dawit
          </p>
          <p className="sidebar_container__profile__info__minor typography_content_xxss">
            Yoncity
          </p>
        </div>
      </div>
      <div
        className={`sidebar_container__menu ${isActiveBackground(
          active,
          "Home"
        )}`}
      >
        <img
          src={homeIcon}
          alt=""
          className="sidebar_container__menu__icon icon"
        />
        <p
          className={`sidebar_container__menu__title typography_content_medium ${isActiveText(
            active,
            "Home"
          )} `}
        >
          Home
        </p>
      </div>

      <div
        className={`sidebar_container__menu ${isActiveBackground(
          active,
          "Appointments"
        )}`}
      >
        <img
          src={calendarIcon}
          alt=""
          className="sidebar_container__menu__icon icon"
        />
        <p
          className={`sidebar_container__menu__title typography_content_medium  ${isActiveText(
            active,
            "Appointments"
          )}`}
        >
          Appointments
        </p>
      </div>

      <div
        className={`sidebar_container__menu ${isActiveBackground(
          active,
          "Staffs"
        )}`}
      >
        <img
          src={userIcon}
          alt=""
          className="sidebar_container__menu__icon icon"
        />
        <p
          className={`sidebar_container__menu__title typography_content_medium  ${isActiveText(
            active,
            "Staffs"
          )}`}
        >
          Staffs
        </p>
      </div>

      <div
        className={`sidebar_container__menu ${isActiveBackground(
          active,
          "Reports"
        )}`}
      >
        <img
          src={articleIcon}
          alt=""
          className="sidebar_container__menu__icon icon"
        />
        <p
          className={`sidebar_container__menu__title typography_content_medium  ${isActiveText(
            active,
            "Reports"
          )}`}
        >
          Reports
        </p>
      </div>

      <div
        className={`sidebar_container__menu ${isActiveBackground(
          active,
          "Settings"
        )}`}
      >
        <img
          src={settingsIcon}
          alt=""
          className="sidebar_container__menu__icon icon"
        />
        <p
          className={`sidebar_container__menu__title typography_content_medium  ${isActiveText(
            active,
            "Settings"
          )}`}
        >
          Settings
        </p>
      </div>

      <div
        className={`sidebar_container__menu ${isActiveBackground(
          active,
          "home"
        )}`}
        onClick={() => setCollapse(!collapse)}
      >
        <img
          src={settingsIcon}
          alt=""
          className="sidebar_container__menu__icon icon"
        />
        <p
          className={`sidebar_container__menu__title typography_content_medium primary_text`}
        >
          Hide
        </p>
      </div>
    </div>
  );
};

export default Sidebar;

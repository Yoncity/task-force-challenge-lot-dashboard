import './index.scss';
import { Link } from 'react-router-dom';
import ME from '../../../assets/images/ME.jpg';
import homeIcon from '../../../assets/icons/home.svg';
import homeIcon_active from '../../../assets/icons/home_white.svg';
import calendarIcon from '../../../assets/icons/calendar.svg';
import calendarIcon_white from '../../../assets/icons/calendar_white.svg';
import userIcon from '../../../assets/icons/user.svg';
import userIcon_white from '../../../assets/icons/user_white.svg';
import articleIcon from '../../../assets/icons/article.svg';
import articleIcon_white from '../../../assets/icons/article_white.svg';
import left from '../../../assets/icons/left.svg';
import right from '../../../assets/icons/right.svg';
import settingsIcon from '../../../assets/icons/settings.svg';
// import homeIcon from "../../../assets/icons/home.svg";

const Sidebar = ({ active, collapse, setCollapse }) => {
  const isActiveBackground = (current, active) => {
    return current === active && 'background_primary active';
  };

  const isActiveText = (current, active) => {
    return current === active ? 'white_text' : 'primary_text';
  };

  return (
    <div className={`sidebar_container ${collapse && 'collapse'}`}>
      <div className="sidebar_container__profile">
        <img
          src={ME}
          alt=""
          className="sidebar_container__profile_image p_image"
        />
        <div className="sidebar_container__profile__info">
          <p className="sidebar_container__profile__info__main typography_content_medium euclid_medium">
            Yonatan Dawit
          </p>
          <p className="sidebar_container__profile__info__minor typography_content_xxss euclid_regular">
            Yoncity
          </p>
        </div>
      </div>

      <Link to="/">
        <div
          className={`sidebar_container__menu ${isActiveBackground(
            active,
            'Home',
          )}`}
        >
          <img
            src={active === 'Home' ? homeIcon_active : homeIcon}
            alt=""
            className="sidebar_container__menu__icon icon"
          />
          <p
            className={`sidebar_container__menu__title euclid_medium typography_content_medium ${isActiveText(
              active,
              'Home',
            )} `}
          >
            Home
          </p>
        </div>
      </Link>

      <Link to="/appointments">
        <div
          className={`sidebar_container__menu ${isActiveBackground(
            active,
            'Appointments',
          )}`}
        >
          <img
            src={active === 'Appointments' ? calendarIcon_white : calendarIcon}
            alt=""
            className="sidebar_container__menu__icon icon"
          />
          <p
            className={`sidebar_container__menu__title euclid_medium typography_content_medium  ${isActiveText(
              active,
              'Appointments',
            )}`}
          >
            Appointments
          </p>
        </div>
      </Link>

      <Link to="/staff">
        <div
          className={`sidebar_container__menu ${isActiveBackground(
            active,
            'Staffs',
          )}`}
        >
          <img
            src={active === 'Staffs' ? userIcon_white : userIcon}
            alt=""
            className="sidebar_container__menu__icon icon"
          />
          <p
            className={`sidebar_container__menu__title euclid_medium typography_content_medium  ${isActiveText(
              active,
              'Staffs',
            )}`}
          >
            Staffs
          </p>
        </div>
      </Link>

      <Link to="/report">
        <div
          className={`sidebar_container__menu ${isActiveBackground(
            active,
            'Reports',
          )}`}
        >
          <img
            src={active === 'Reports' ? articleIcon_white : articleIcon}
            alt=""
            className="sidebar_container__menu__icon icon"
          />
          <p
            className={`sidebar_container__menu__title euclid_medium typography_content_medium  ${isActiveText(
              active,
              'Reports',
            )}`}
          >
            Reports
          </p>
        </div>
      </Link>

      <div
        className={`sidebar_container__menu ${isActiveBackground(
          active,
          'Settings',
        )}`}
      >
        <img
          src={settingsIcon}
          alt=""
          className="sidebar_container__menu__icon icon"
        />
        <p
          className={`sidebar_container__menu__title euclid_medium typography_content_medium  ${isActiveText(
            active,
            'Settings',
          )}`}
        >
          Settings
        </p>
      </div>

      <div
        className={`sidebar_container__menu ${isActiveBackground(
          active,
          'home',
        )}`}
        onClick={() => setCollapse(!collapse)}
      >
        <img
          src={collapse ? right : left}
          alt=""
          className="sidebar_container__menu__icon icon"
        />
        <p
          className={
            'sidebar_container__menu__title euclid_medium typography_content_medium primary_text'
          }
        >
          Hide
        </p>
      </div>
    </div>
  );
};

export default Sidebar;

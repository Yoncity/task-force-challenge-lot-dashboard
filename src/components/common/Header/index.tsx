import "./index.scss";
import moon from "../../../assets/icons/moon.svg";
import logout from "../../../assets/icons/logout.svg";

const Header = ({ title }) => {
  return (
    <div className="header_container">
      <p className="typography_title_h2 primary_text">{title}</p>
      <div className="header_container__search background_gray_6">
        <img src={moon} alt="" />
        <input type="search" placeholder="Search for patients" />
      </div>
      <div className="header_container__actions">
        <img src={moon} alt="" className="header_container__actions__icon" />
        <img src={logout} alt="" className="header_container__actions__icon" />
      </div>
    </div>
  );
};

export default Header;

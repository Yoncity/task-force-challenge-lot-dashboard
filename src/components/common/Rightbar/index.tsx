import "./index.scss";
import apartment from "../../../assets/icons/apartment.svg";
import more_menu from "../../../assets/icons/more_menu.svg";
import people from "../../../assets/icons/people.svg";

const Rightbar = () => {
  return (
    <div className="rightbar_container">
      <div className="rightbar_container__header">
        <img
          src={apartment}
          alt=""
          className="rightbar_container__header__icon"
        />
        <p className="rightbar_container__header__title typography_content_large black_text_2">
          Today, 10 June
        </p>
        <img
          src={apartment}
          alt=""
          className="rightbar_container__header__icon"
        />
      </div>
      <div className="rightbar_container__body">
        <div className="rightbar_container__body__row card">
          <img
            src={people}
            alt=""
            className="rightbar_container__body__row__icon"
          />
          <div className="rightbar_container__body__row__info">
            <p className="rightbar_container__body__row__info__major typography_content_xss black_text_1">
              General meeting
            </p>
            <p className="rightbar_container__body__row__info__minor typography_content_xxs gray_text_7">
              10 - 11 am
            </p>
          </div>
          <img
            src={more_menu}
            alt=""
            className="rightbar_container__body__row__icon"
          />
        </div>

        <div className="rightbar_container__body__row card">
          <img
            src={apartment}
            alt=""
            className="rightbar_container__body__row__icon"
          />
          <div className="rightbar_container__body__row__info">
            <p className="rightbar_container__body__row__info__major typography_content_xss black_text_1">
              Uni Marketing
            </p>
            <p className="rightbar_container__body__row__info__minor typography_content_xxs gray_text_7">
              12 - 1 pm
            </p>
          </div>
          <img
            src={more_menu}
            alt=""
            className="rightbar_container__body__row__icon"
          />
        </div>

        <div className="rightbar_container__body__row card">
          <img
            src={people}
            alt=""
            className="rightbar_container__body__row__icon"
          />
          <div className="rightbar_container__body__row__info">
            <p className="rightbar_container__body__row__info__major typography_content_xss black_text_1">
              General meeting
            </p>
            <p className="rightbar_container__body__row__info__minor typography_content_xxs gray_text_7">
              2 - 3 pm
            </p>
          </div>
          <img
            src={more_menu}
            alt=""
            className="rightbar_container__body__row__icon"
          />
        </div>

        <div className="rightbar_container__body__row card">
          <img
            src={apartment}
            alt=""
            className="rightbar_container__body__row__icon"
          />
          <div className="rightbar_container__body__row__info">
            <p className="rightbar_container__body__row__info__major typography_content_xss black_text_1">
              Uni Marketing
            </p>
            <p className="rightbar_container__body__row__info__minor typography_content_xxs gray_text_7">
              4 - 5 pm
            </p>
          </div>
          <img
            src={more_menu}
            alt=""
            className="rightbar_container__body__row__icon"
          />
        </div>

        <div className="rightbar_container__body__row card">
          <img
            src={people}
            alt=""
            className="rightbar_container__body__row__icon"
          />
          <div className="rightbar_container__body__row__info">
            <p className="rightbar_container__body__row__info__major typography_content_xss black_text_1">
              General meeting
            </p>
            <p className="rightbar_container__body__row__info__minor typography_content_xxs gray_text_7">
              5 - 5:30 pm
            </p>
          </div>
          <img
            src={more_menu}
            alt=""
            className="rightbar_container__body__row__icon"
          />
        </div>

        <div className="rightbar_container__body__row card">
          <img
            src={apartment}
            alt=""
            className="rightbar_container__body__row__icon"
          />
          <div className="rightbar_container__body__row__info">
            <p className="rightbar_container__body__row__info__major typography_content_xss black_text_1">
              Uni Marketing
            </p>
            <p className="rightbar_container__body__row__info__minor typography_content_xxs gray_text_7">
              5:30 - 6 pm
            </p>
          </div>
          <img
            src={more_menu}
            alt=""
            className="rightbar_container__body__row__icon"
          />
        </div>
      </div>
    </div>
  );
};

export default Rightbar;

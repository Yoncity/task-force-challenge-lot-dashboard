import './index.scss';
import Layout from '../../components/common/Layout';
import people from '../../assets/icons/people.svg';
import apartment from '../../assets/icons/apartment.svg';
import more_menu from '../../assets/icons/more_menu.svg';
import Calendar from 'react-calendar';
// import "react-calendar/dist/Calendar.css";

const Appointments = () => {
  return (
    <Layout activeMenu="Appointments" headerTitle="Appointments">
      <div className="appointment_container">
        <p className="appointment_container__title typography_title_h3 euclid_regular">
          Calendar
        </p>
        <div className="appointment_container__calendar">
          <Calendar />
        </div>

        <div className="appointment_container__summary">
          <p className="appointment_container__summary__title typography_title_h3 euclid_regular">
            June main Events
          </p>

          <div className="appointment_container__summary__cards">
            <div className="appointment_container__summary__cards__card card">
              <img
                src={people}
                alt=""
                className="appointment_container__summary__cards__card__icon"
              />
              <div className="appointment_container__summary__cards__card__info">
                <p className="appointment_container__summary__cards__card__info__major poppin_medium typography_content_xss black_text_1">
                  General meeting
                </p>
                <p className="appointment_container__summary__cards__card__info__minor poppin_regular typography_content_xxs gray_text_7">
                  10 - 11 am
                </p>
              </div>
              <img
                src={more_menu}
                alt=""
                className="appointment_container__summary__cards__card__icon"
              />
            </div>

            <div className="appointment_container__summary__cards__card card">
              <img
                src={apartment}
                alt=""
                className="appointment_container__summary__cards__card__icon"
              />
              <div className="appointment_container__summary__cards__card__info">
                <p className="appointment_container__summary__cards__card__info__major poppin_medium typography_content_xss black_text_1">
                  Uni Marketing
                </p>
                <p className="appointment_container__summary__cards__card__info__minor poppin_regular typography_content_xxs gray_text_7">
                  10 - 11 am
                </p>
              </div>
              <img
                src={more_menu}
                alt=""
                className="appointment_container__summary__cards__card__icon"
              />
            </div>

            <div className="appointment_container__summary__cards__card card">
              <img
                src={people}
                alt=""
                className="appointment_container__summary__cards__card__icon"
              />
              <div className="appointment_container__summary__cards__card__info">
                <p className="appointment_container__summary__cards__card__info__major poppin_medium typography_content_xss black_text_1">
                  General meeting
                </p>
                <p className="appointment_container__summary__cards__card__info__minor poppin_regular typography_content_xxs gray_text_7">
                  10 - 11 am
                </p>
              </div>
              <img
                src={more_menu}
                alt=""
                className="appointment_container__summary__cards__card__icon"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Appointments;
